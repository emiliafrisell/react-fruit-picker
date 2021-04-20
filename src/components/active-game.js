import React, { useState, useRef } from 'react'

import Player from './emojis/player'
import Fruit from './emojis/fruit'

import './game.css';

const ActiveGame = ({ props }) => {

  return (
    <>
      <Player props={props} />

      <Fruit props={props} />
      <Fruit props={props} />
      <Fruit props={props} />
      <Fruit props={props} />
      <Fruit props={props} />
      
    </>
  )
}

export default ActiveGame
