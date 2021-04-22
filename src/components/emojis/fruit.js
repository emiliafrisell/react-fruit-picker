import React from 'react'

const Fruit = ( props ) => {

    const fruitPosition = {
        gridColumnStart: props.x,
        gridRowStart: props.y,
    }

  return (
    <>
      <img src={props.type} id={props.id} alt="fruit" style={fruitPosition}/>
    </>
  )
}

export default Fruit
