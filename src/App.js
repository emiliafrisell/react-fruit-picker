import { useState, useEffect } from 'react'

import './App.css';

import Header from './components/header'
import Game from './components/game'

import Greeting from './components/color/svg/1F64B.svg'

import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import { 
  FirebaseAuthProvider, 
  FirebaseAuthConsumer,   
  IfFirebaseAuthed,
} from '@react-firebase/auth';
import { FirestoreProvider } from "@react-firebase/firestore";
import { firebaseConfig } from "./config";


function App() {
  const [ player, setPlayer ] = useState('')
  const [ loggedIn, setLoggedIn ] = useState(false)
  const [ userName, setUserName ] = useState('')    
  const [ userEmail, setUserEmail ] = useState('')   
  const [ userScores, setUserScores ] = useState([])
  const [ personalHighScore, setPersonalHighScore ] = useState(0) 
  const [ newUser, setNewUser ] = useState(false)
  const [ continueWOSignIn, setContinueWOSignIn ] = useState(false)
  
  const openmoji = require('openmoji')
  const om = openmoji.openmojis[0]

  // ${om.openmoji_images.color.svg}`
  import('./components/color/svg/1F3C3.svg').then((module) => {
    setPlayer(module.default);
  });

  const userProps = {
    userName: userName,
    userEmail: userEmail,
    userScores: userScores,
    setUserScores: setUserScores,
    personalHighScore: personalHighScore,
    setPersonalHighScore: setPersonalHighScore,
    character: player,
    isSignedIn: loggedIn
  }

  useEffect(() => {
    let db = firebase.firestore();
    
    if (loggedIn) {

      var docRef = db.collection("users").doc(userEmail);
  
      docRef.get().then((doc) => {
      if (doc.exists) {
        let user = doc.data()
        console.log("Welcome back", user.name);
        setPersonalHighScore(user.personalHighScore)
        setUserScores(user.scores)

      } else {
          // doc.data() will be undefined in this case
          console.log("New user!");
          setNewUser(true)
          db.collection("users").doc(userEmail).set({
              name: userName,
              email: userEmail,
              scores: [],
              personalHighScore: 0
          })
      }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
    }
  }, [loggedIn])

  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <FirestoreProvider {...firebaseConfig} firebase={firebase}>
        <div className="App">
          
          <Header loggedIn={loggedIn} />
          <FirebaseAuthConsumer>
            {({ isSignedIn, user, providerId }) => {

              if (isSignedIn) {

                setUserName(user.displayName)
                setUserEmail(user.email)
                setLoggedIn(true)
                setContinueWOSignIn(false)

                return ( 
                  <div className='greeting'>
                    <img src={Greeting} />
                    <h2> { newUser ? 'Hello' : 'Welcome back' } {user.displayName}!</h2>
                  </div>)
              }
              if (!isSignedIn) {
                setLoggedIn(false)
                setUserName('')
                setUserEmail('')
                setNewUser(false)

                return (
                  <>
                    { 
                      !continueWOSignIn && 
                      <div style={{marginTop: '20%'}}>
                        <h3>Please 
                          <span style={{ 
                              paddingLeft: '5px', 
                              paddingRight: '5px', 
                              textDecoration: 'underline',
                              cursor: 'pointer'
                            }}

                            onClick={() => {
                              const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                              firebase.auth().signInWithPopup(googleAuthProvider);
                          }}>
                            Sign In
                          </span> 
                          to start playing</h3>
                        <br /> or <br />
                        <button className='try_again' style={{marginTop: '50px'}}
                          onClick={() =>{ setContinueWOSignIn(true) }}> 
                            Continue without signing in
                        </button>
                      </div>
                    }
                  </>
                )
              }

            }}
          </FirebaseAuthConsumer>
          <IfFirebaseAuthed>
              {() => {
                return <Game user={userEmail} userProps={userProps} />
              }}
          </IfFirebaseAuthed>

          { continueWOSignIn && <Game userProps={userProps} />}
        </div>
      </FirestoreProvider>
    </FirebaseAuthProvider>
  );
}

export default App;
