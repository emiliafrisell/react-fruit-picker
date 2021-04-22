import React from 'react'

// import useKeyPress from '../useKeyPress'
// import checkLocation from '../checkLocation'

// import Fruits from '../fruits'


import Runner from '../../images/run.jpg'
import '../game.css';


const Player = ({ props }) => {

    // const [ currentID, setCurrentID ] = useState(0)
    // const up = useKeyPress("ArrowUp");
    // const right = useKeyPress("ArrowRight");
    // const down = useKeyPress("ArrowDown");
    // const left = useKeyPress("ArrowLeft");

    // const checkLocation = (x, y) => {
    //     Fruits.map(fruit => {
    //         if (fruit.x === x && fruit.y === y) {
    //             props.setScore(props.score + 1)
    //             fruit.x = Math.floor(Math.random() * 20) + 1
    //             fruit.y = Math.floor(Math.random() * 20) + 1

    //         }
    //     })
    // }

    // useEffect(() => {

    //     if (up)     { props.setPlayerY(props.playerY - 1) }
    //     if (right)  { props.setPlayerX(props.playerX + 1) }
    //     if (down)   { props.setPlayerY(props.playerY + 1) }
    //     if (left)   { props.setPlayerX(props.playerX - 1) }
        
    //     checkLocation(props.playerX, props.playerY)
       
    // }, [up, right, down, left])
    


  return (
    <>
      <img src={Runner} className="run" alt='running man emoji' style={props.playerStyle} />
    </>
  )
}

export default Player