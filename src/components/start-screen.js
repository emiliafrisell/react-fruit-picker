import React from 'react'

const StartScreen = ({onClick}) => {

  return (
    <>
        <p id="instructions">Eat as many fruits as possible, but don't get your feet dirty!</p>
        <button id="start_game" onClick={onClick}>Start Game</button>    
    </>
  )
}

export default StartScreen
