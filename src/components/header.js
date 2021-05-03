import React from 'react'

import './header.css';
// import Background from '../images/grass_background.png'

import firebase from "firebase/app";



const Header = ({loggedIn}) => {
  return (
    <>
      <header className="App-header" 
      // style ={{backgroundImage: `url(${Background})`}}
      >
        <h1>LITTLE FRUIT PICKER</h1>

        { loggedIn ?
          <button className='sign-in-button'
          onClick={() => {
            firebase.auth().signOut();
          }}
          >
            Sign Out
          </button> :
          <button className='sign-in-button'
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
          >
          Sign In
        </button>
      }
      </header>
    </>
  )
}

export default Header
