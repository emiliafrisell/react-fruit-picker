import React, { useState, useRef } from 'react'

import './game.css';

import StartScreen from './start-screen'
import ActiveGame from './active-game'
import GameOver from './game-over'
import Score from './score'
import Player from './emojis/player'

const Game = () => {

    // const player = useRef();
    const [isActiveGame, setIsActiveGame] = useState(false)
    const [isGameOver, setIsGameOver] = useState(false)
    const [ steps, setSteps ] = useState([])
    const [ poops, setPoops ] = useState([])
    const [ fruits, setFruits ] = useState([])

    const [ playerX, setPlayerX ] = useState(0)
    const [ playerY, setPlayerY ] = useState(0)

    const [ fruitX, setFruitX ] = useState(0)
    const [ fruitY, setFruitY ] = useState(0)

    const [ poopPosition, setPoopPosition ] = useState({ x: 0, y: 0 })

    const playerStyle = {
        transform: 'scaleX(1)',
        gridColumnStart: playerX,
        gridRowStart: playerY,
    }

    const fruitStyle = {
        gridColumnStart: fruitX,
        gridRowStart: fruitY,
    }

    const gameProps = {
        steps: steps,
        setSteps: setSteps,
        poops: poops,
        setPoops: setPoops,
        fruits: fruits,
        setFruits: setFruits,
        fruitX: fruitX,
        setFruitX: setFruitX,
        fruitY: fruitY,
        setFruitY: setFruitY,
        fruitStyle: fruitStyle,
        poopPosition: poopPosition,
        setPoopPosition: setPoopPosition,
        playerStyle: playerStyle
    }

    const fruitProps = {
        fruitX: fruitX,
        setFruitX: setFruitX,
    }

    const handleStartGame = () => {
        console.log('new game has started')
        setIsActiveGame(!isActiveGame)

        setSteps([])
        setPoops([])
        setFruits([])

        setPlayerX(17)
        setPlayerY(2)
        setSteps([...steps, {x: playerX, y: playerY}])


        // ID = 0;
        // currentID = 0;
        // poopID = 0;
        // fruitID = 0;
        // score = 0;
    }

    const gameOver = () => {
        console.log('game over')
    }

    console.log(steps)
  return (
    <>
      <main>

        <div className="playArea">

                    {/* <!-- START SCREEN OR GAME PLAY -->  */}
            { isActiveGame ? <ActiveGame props={gameProps} /> : <StartScreen onClick={handleStartGame} /> }

                    {/* <!-- GAME OVER --> */}
            { isGameOver && <GameOver onClick={handleStartGame} /> }

        </div>

        <Score />
      </main>
    </>
  )
}

export default Game
