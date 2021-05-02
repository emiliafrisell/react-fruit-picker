import React from 'react'

// import Runner from '../../images/run.jpg'
import '../game.css';

// import player from '../color/svg//1F600.svg'


const Player = ({ props }) => {

  return (
    <>
      <img src={props.userProps.character} className="run" alt='running man emoji' style={props.playerStyle} />
    </>
  )
}

export default Player