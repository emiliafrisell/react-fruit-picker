import React from 'react'

import './header.css';
import Background from '../images/grass_background.png'


const Header = () => {
  return (
    <>
      <header className="App-header" style ={{backgroundImage: `url(${Background})`}}>
        <h1>LITTLE FRUIT PICKER</h1>
      </header>
    </>
  )
}

export default Header
