import React from 'react'

const GameOver = ({ onClick }) => {
  return (
    <>
        <p id="game_over">You stepped in poop!</p>
        <iframe src="https://giphy.com/embed/LS3GyTEUHandrcndV7" id="poopGIF" title='Happy poop walking and wistling'></iframe>
        <button className="try_again" onClick={onClick}>Try Again</button>  
    </>
  )
}

export default GameOver
