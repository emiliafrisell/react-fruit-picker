import React, { useState, useRef } from 'react'

import Runner from '../../images/run.jpg'
import '../game.css';


const Player = ({ props }) => {

    // const [ playerX, setPlayerX ] = useState(17)
    // const [ playerY, setPlayerY ] = useState(2)
    // const [ playerPosition, setPlayerPosition ] = useState({ x: 2, y: 19 })
    const [ currentID, setCurrentID ] = useState(0)

    // const playerStyle = {
    //     transform: 'scaleX(1)',
    //     gridColumnStart: playerX,
    //     gridRowStart: playerY,
    // }


  return (
    <>
      <img src={Runner} className="run" alt='running man emoji' style={props.playerStyle}/>
    </>
  )
}

export default Player
