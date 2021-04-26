import React from 'react'

import firebase from "firebase/app";
import "firebase/auth";
import { 
  FirebaseAuthProvider, 
  FirebaseAuthConsumer,   
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd } from '@react-firebase/auth';
import { firebaseConfig } from "../config";


const LogIn = () => {
  return (
    <>
      <div>
        <button
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign In with Google
        </button>
        {/* <button
          data-testid="signin-anon"
          onClick={() => {
            firebase.auth().signInAnonymously();
          }}
        >
          Sign In Anonymously
        </button> */}
        <button
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          Sign Out
        </button>
        {/* <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return (
              <pre style={{ height: 300, overflow: "auto" }}>
                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              </pre>
            );
          }}
        </FirebaseAuthConsumer> */}
        <div>
          
          {/* <IfFirebaseAuthedAnd
            filter={({ providerId }) => providerId !== "anonymous"}
          >
            {({ providerId }) => {
              return <div>You are authenticated with {providerId}</div>;
            }}
          </IfFirebaseAuthedAnd> */}
        </div>
      </div>
    </>
  )
}

export default LogIn


// <h1>Welcome to My Awesome App</h1>
//         <div id="firebaseui-auth-container">

//         <FirebaseAuthConsumer>
//           {({ isSignedIn, user, providerId }) => {
//             return (
//               <pre style={{ height: 300, overflow: "auto" }}>
//                 {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
//               </pre>
//             );
//           }}
//         </FirebaseAuthConsumer>
//         <IfFirebaseAuthedAnd
//           filter={({ providerId, user }) => {
//             if(!user.email){return false;}
//             return (
//               providerId !== "anonymous" &&
//               user.email.indexOf("@companyname.com") > -1
//             );
//           }}
//           >
//           { ({ isSignedIn, user, providerId }) => {
//             return (
//               <div>hello yes testing</div>
//             )
//           }}
//         </IfFirebaseAuthedAnd>  
//         </div>
//         <div id="loader">Loading...</div>
