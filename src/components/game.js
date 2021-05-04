import React, { useState } from 'react'

import './game.css';

import StartScreen from './start-screen'
import ActiveGame from './active-game'
import GameOver from './game-over'
import Score from './score'

const Game = ({ user, userProps, fruits }) => {

    const [isActiveGame, setIsActiveGame] = useState(false)
    const [isGameOver, setIsGameOver] = useState(false)

    const [ score, setScore ] = useState(0)
    const [ highScore, setHighScore ] = useState('')

    const [ poops, setPoops ] = useState([])

    const [ playerX, setPlayerX ] = useState(17)
    const [ playerY, setPlayerY ] = useState(2)
    const [ playerOrientation, setPlayerOrientation ] = useState('scaleX(1)')
    const [ prevPlayerPosition, setPrevPlayerPosition ] = useState({x: playerX, y: playerY})

    const [ up, setUp ] = useState(false)
    const [ right, setRight ] = useState(false)
    const [ down, setDown ] = useState(false)
    const [ left, setLeft ] = useState(false)

    const playerStyle = {
        transform: playerOrientation,
        gridColumnStart: playerX,
        gridRowStart: playerY,
    }

    const gameProps = {
        poops: poops,
        setPoops: setPoops,
        playerX: playerX,
        setPlayerX: setPlayerX,
        playerY: playerY,
        setPlayerY: setPlayerY,
        prevPlayerPosition: prevPlayerPosition,
        setPrevPlayerPosition: setPrevPlayerPosition,
        score: score,
        setScore: setScore,
        highScore: highScore,
        setHighScore: setHighScore,
        playerStyle: playerStyle,
        setPlayerOrientation: setPlayerOrientation,
        // isGameOver: isGameOver, 
        setIsGameOver: setIsGameOver,
        setIsActiveGame: setIsActiveGame,
        user: user,
        userProps: userProps,
        fruits: fruits,
        
        touchUp: up,
        touchRight: right,
        touchDown: down,
        touchLeft: left,
        setTouchUp: setUp,
        setTouchRight: setRight,
        setTouchDown: setDown,
        setTouchLeft: setLeft
    }

    const handleStartGame = () => {
        console.log('new game has started')

        setIsActiveGame(!isActiveGame)
        setIsGameOver(false)

        setPoops([])
        setScore(0)

        setPlayerX(17)
        setPlayerY(2)
        setPlayerOrientation('scaleX(1)')
    }

  return (
    <>
      <main>

        <section className="playArea">

                    {/* <!-- START SCREEN -->  */}
            { !isActiveGame && !isGameOver && <StartScreen onClick={handleStartGame} /> }

                    {/* <!-- GAME PLAY --> */}
            { isActiveGame && <ActiveGame props={gameProps} /> }

                    {/* <!-- GAME OVER --> */}
            { isGameOver && <GameOver onClick={handleStartGame} /> }

        </section>

        <section className='controls'>

          <button id='up'
            onTouchStartCapture={() => setUp(true)} 
            onTouchEndCapture={() => setUp(false)}
            > 
              <i className="fa fa-angle-up" aria-hidden="true"></i>
          </button>

          <button id='right'
            onTouchStartCapture={() => setRight(true)} 
            onTouchEndCapture={() => setRight(false)}
          >
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>

          <button id='down'
            onTouchStartCapture={() => setDown(true)} 
            onTouchEndCapture={() => setDown(false)}
          >
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </button>

          <button id='left'
            onTouchStartCapture={() => setLeft(true)} 
            onTouchEndCapture={() => setLeft(false)}
          >
              <i className="fa fa-angle-left" aria-hidden="true"></i>
          </button>

        </section>
        <Score score={score} highScore={highScore} userProps={userProps} isGameOver={isGameOver} />
      </main>
    </>
  )
}

export default Game
