import React, { useState } from 'react'

import './game.css';

import StartScreen from './start-screen'
import ActiveGame from './active-game'
import GameOver from './game-over'
import Score from './score'

const Game = ({user}) => {

    const [isActiveGame, setIsActiveGame] = useState(false)
    const [isGameOver, setIsGameOver] = useState(false)

    const [ score, setScore ] = useState(0)
    const [ highScore, setHighScore ] = useState('')

    const [ poops, setPoops ] = useState([])

    const [ playerX, setPlayerX ] = useState(17)
    const [ playerY, setPlayerY ] = useState(2)
    const [ playerOrientation, setPlayerOrientation ] = useState('scaleX(1)')
    const [ prevPlayerPosition, setPrevPlayerPosition ] = useState({x: playerX, y: playerY})

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
        setIsGameOver: setIsGameOver,
        setIsActiveGame: setIsActiveGame,
        user: user
    }

    const handleStartGame = () => {
        console.log('new game has started')

        setIsActiveGame(!isActiveGame)
        setIsGameOver(false)

        setPoops([])
        setScore(0)

        setPlayerX(17)
        setPlayerY(2)
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

        <Score score={score} highScore={highScore} />
      </main>
    </>
  )
}

export default Game
