import { useState, useEffect } from 'react'

import './App.css';

import Header from './components/header'
import Game from './components/game'

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
  
  const openmoji = require('openmoji')
  const om = openmoji.openmojis[0]

  import(`./components${om.openmoji_images.color.svg}`).then((module) => {
    setPlayer(module.default);
  });

  const userProps = {
    userName: userName,
    userEmail: userEmail,
    userScores: userScores,
    setUserScores: setUserScores,
    personalHighScore: personalHighScore,
    setPersonalHighScore: setPersonalHighScore,
    character: player
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
                return <div>hello {user.displayName}</div>
              }
              if (!isSignedIn) {
                setLoggedIn(false)
                setUserName('')
                setUserEmail('')
                return <p>Please sign in to start playing</p>
              }

            }}
          </FirebaseAuthConsumer>
          <IfFirebaseAuthed>
              {() => {
                return <Game user={userEmail} userProps={userProps} />
              }}
          </IfFirebaseAuthed>
          
        </div>
      </FirestoreProvider>
    </FirebaseAuthProvider>
  );
}

export default App;
