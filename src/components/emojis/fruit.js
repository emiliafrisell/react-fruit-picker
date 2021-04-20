import React, {useEffect} from 'react'

import Apple from '../../images/apple.jpg'

const Fruit = ({ props }) => {

    let apple =  '<img class="apple" id="%id%" src="images/apple.jpg" style="--priceY: %Y%; --priceX:%X%;" />';
    let pineapple =  '<img class="pineapple"  id="%id%" src="images/pineapple.jpg" style="--priceY: %Y%; --priceX:%X%;" />';
    let grapes = '<img class="grapes"  id="%id%" src="images/grapes.jpg" style="--priceY: %Y%; --priceX:%X%;" />';
    let orange = '<img class="orange"  id="%id%" src="images/orange.jpg" style="--priceY: %Y%; --priceX:%X%;" />';
    let pear =  '<img class="pear" id="%id%" src="images/pear.jpg" style="--priceY: %Y%; --priceX:%X%;" />';

    let fruitArray = [apple, pineapple, grapes, orange, pear];

    const newPosition = () => {
        props.setFruitX(Math.floor(Math.random() * 20) + 1); 
        props.setFruitY(Math.floor(Math.random() * 20) + 1);
    }

    useEffect(() => { 
        newPosition();
    }, []);
    
    console.log(props.fruitX, props.fruitY)

  return (
    <>
      <img src={Apple} className="run" alt='running man emoji' style={props.fruitStyle}/>
    </>
  )
}

export default Fruit
