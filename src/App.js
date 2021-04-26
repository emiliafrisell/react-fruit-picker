import { useState, useEffect } from 'react'

import './App.css';

import Header from './components/header'
import Game from './components/game'
import LogIn from './components/login'

import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import { 
  FirebaseAuthProvider, 
  FirebaseAuthConsumer,   
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd } from '@react-firebase/auth';
import { FirestoreProvider } from "@react-firebase/firestore";
import { firebaseConfig } from "./config";

import { addUser } from "./components/firestore/add-user";




function App() {

  // const openmoji = require('openmoji')
  // const om = openmoji.openmojis
  const [ loggedIn, setLoggedIn ] = useState(false)
  const [ userName, setUserName ] = useState('')    
  const [ userEmail, setUserEmail ] = useState('')    

  
  useEffect(() => {
    if(loggedIn) {
      addUser(userName, userEmail)
    }
  }, [loggedIn])
  

  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <FirestoreProvider {...firebaseConfig} firebase={firebase}>
        <div className="App">
          {/* { 
            om.map(emoji => { 
            if (emoji.openmoji_tags.indexOf('fruit') >= 0) { 
              console.log(emoji.openmoji_tags, emoji.openmoji_tags.indexOf('person'))
            return emoji.emoji
            } 
            // else {
            //   return emoji.hexcode
            // }
            })
            } */}
          <Header loggedIn={loggedIn} />
          {/* <LogIn /> */}
          <FirebaseAuthConsumer>
            {({ isSignedIn, user, providerId }) => {
              if (isSignedIn) {
                setUserName(user.displayName)
                setUserEmail(user.email)
                setLoggedIn(true)
                // addUser(user.displayName, user.email )
                return <div>hello {user.displayName}</div>
              }
              if (!isSignedIn) {
                setLoggedIn(false)
                setUserName('')
                setUserEmail('')
                return <p>Please sign in to start playing</p>
              }
              // return (
              //   <pre style={{ height: 300, overflow: "auto" }}>
              //     {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              //   </pre>
              // );
            }}
          </FirebaseAuthConsumer>
          <IfFirebaseAuthed>
              {() => {
                return         <Game user={userEmail} />
              }}
          </IfFirebaseAuthed>
          
        </div>
      </FirestoreProvider>
    </FirebaseAuthProvider>
  );
}

export default App;
