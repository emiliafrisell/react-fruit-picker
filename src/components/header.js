import React from 'react'

import './header.css';
import Background from '../images/grass_background.png'

import firebase from "firebase/app";



const Header = ({loggedIn}) => {
  return (
    <>
      <header className="App-header" style ={{backgroundImage: `url(${Background})`}}>
        <h1>LITTLE FRUIT PICKER</h1>

        { loggedIn ?
          <button
            onClick={() => {
              firebase.auth().signOut();
            }}
          >
            Sign Out
          </button> :
          <button
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign In with Google
        </button>
      }
      </header>
    </>
  )
}

export default Header
