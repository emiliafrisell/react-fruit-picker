import React from 'react'

import PoopImg from '../color/svg/1F4A9.svg'

const Poop = ( props ) => {

    const poopPosition = {
        gridColumnStart: props.x,
        gridRowStart: props.y,
    }

  return (
    <>
      <img src={PoopImg} id={props.id} alt="poop" style={poopPosition}/>
    </>
  )
}

export default Poop
