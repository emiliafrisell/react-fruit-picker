import React, { useState, useEffect } from 'react'

const Fruit = (props) => {

  const [fruit, setFruit] = useState('')

  const openmoji = require('openmoji')
  const oms = openmoji.openmojis

  let omFruit = oms.filter(om => om.subgroups === 'food-fruit')

  // useEffect(() => {
    import(`../color/svg/${omFruit[props.type].hexcode}.svg`)
      .then((module) => {
        setFruit(module.default)
      })

  //     console.log(props)
  // }, [props.type])

  const fruitPosition = {
    gridColumnStart: props.x,
    gridRowStart: props.y,
  }

  return (
    <>
      <img src={fruit} id={props.id} alt="fruit" style={fruitPosition} />
    </>
  )
}

export default Fruit
