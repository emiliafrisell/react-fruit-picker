import React, { useState, useEffect } from 'react'

import Player from './emojis/player'
import Fruits from './fruits'
import Fruit from './emojis/fruit'
import Poop from './emojis/poop'

import useKeyPress from './useKeyPress'

// FRUITS
// import Apple from '../images/apple.jpg'
// import Grapes from '../images/grapes.jpg'
// import Pear from '../images/pear.jpg'
// import Pineapple from '../images/pineapple.jpg'
// import Orange from '../images/orange.jpg'

// CSS
import './game.css';

// FIRESTORE
import { addHighScore } from "./firestore/add-highscore";
import { addUserScore } from "./firestore/add-user-score";
import { setNewPersonalHighscore } from "./firestore/set-new-personal-highscore";
// import GetFruits from "./getFruits";


const ActiveGame = ({ props }) => {

    const [ id, setId ] = useState(0)

    const up = useKeyPress("ArrowUp");
    const right = useKeyPress("ArrowRight");
    const down = useKeyPress("ArrowDown");
    const left = useKeyPress("ArrowLeft");

    // const openmoji = require('openmoji')
    // const om = openmoji.openmojis[0]

    // const fruitArray = [Apple, Pineapple, Grapes, Orange, Pear];

    const placeFruit = (fruit) => {
        let randomX = Math.floor(Math.random() * 20) + 1
        let randomY = Math.floor(Math.random() * 20) + 1

        let sameAsFruit = Fruits.some(location => location.x === randomX && location.y === randomY)
        let sameAsPlayer = (props.playerX === randomX && props.playerY === randomY)
        let sameAsPoop = props.poops.some(location => location.x === randomX && location.y === randomY)

        if (sameAsFruit || sameAsPlayer || sameAsPoop) {
            console.log('the same')
            console.log(sameAsFruit, sameAsPlayer, sameAsPoop)
            placeFruit(fruit)
        } else {
            fruit.x = randomX
            fruit.y = randomY 
            fruit.type = Math.floor(Math.random() * 18)
        }

    }

    const placePoop = () => {
        props.poops.push({
            id: id, 
            x: props.prevPlayerPosition.x, 
            y: props.prevPlayerPosition.y
        })

        setId(id + 1)
    }

    const movePlayer = () => {
        if (up && props.playerY > 1) { 
            props.setPlayerY(props.playerY - 1) 
        } else if (right && props.playerX < 20) { 
            props.setPlayerX(props.playerX + 1)
            props.setPlayerOrientation('scaleX(-1)')
        } else if (down && props.playerY < 20) { 
            props.setPlayerY(props.playerY + 1)
        } else if (left && props.playerX > 1) { 
            props.setPlayerX(props.playerX - 1); 
            props.setPlayerOrientation('scaleX(1)')
        }
    }

    const checkLocationOfPlayer = (x, y) => {

        let foundFruit = Fruits.some(fruit => fruit.x === x && fruit.y === y)
        let steppedInPoop = props.poops.some(poop => poop.x === x && poop.y === y)

        if (foundFruit) {   
            Fruits.map(fruit => {
                if (fruit.x === x && fruit.y === y) {
                    props.setScore(props.score + 1)
                    placePoop()
                    placeFruit(fruit)
                }
                return
            })
        }

        if (steppedInPoop) {
            console.log('game over')
            props.setIsGameOver(true)
            props.setIsActiveGame(false)
            addUserScore(props.user, props.score)
            props.userProps.setUserScores([...props.userProps.userScores, props.score])
            if(props.score > props.userProps.personalHighScore) {
                props.userProps.setPersonalHighScore(props.score)
                setNewPersonalHighscore(props.user, props.score)
                console.log('new personal record')
            }
            addHighScore(props.userProps.userName, props.user, props.score)
            
            if(props.score > props.highScore) {
                props.setHighScore(props.score)
            }
        }
    }

    useEffect(() => {

        props.setPrevPlayerPosition({x: props.playerX, y: props.playerY})

        movePlayer()
        
        checkLocationOfPlayer(props.playerX, props.playerY)
        
    }, [up, right, down, left])
    
  return (
    <>
      <Player props={props} />
      
      { 
        Fruits.map(fruit => {
            if (fruit.x.length === 0) {
                placeFruit(fruit)
            }
            return  <Fruit type={fruit.type} id={fruit.id} x={fruit.x} y={fruit.y} />  
        })
      }

      {
          props.poops.map(poop => {
            return  <Poop id={poop.id} x={poop.x} y={poop.y} />  
        })
      }
    </>
  )
}

export default ActiveGame
