import React from 'react'

import './score.css';


const Score = ({ score, highScore }) => {
    
  return (
    <>
      <section className="scores">
            <p id="score">Score: {score}</p>
            <p id="highScore">High score: {highScore}</p>
      </section>
    </>
  )
}

export default Score
