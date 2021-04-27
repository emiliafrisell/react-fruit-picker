import React from 'react'

import firebase from "firebase/app";
import 'firebase/firestore';

import { FirestoreProvider } from "@react-firebase/firestore";
import { firebaseConfig } from "../config";
import { FirestoreCollection } from "@react-firebase/firestore";

import './score.css';


const Score = ({ score, highScore, userProps }) => {
 
  return (
    <>
      <section className="scores">
            <p id="score">Score: {score}</p>
            <div style={{textAlign: 'right'}}>
                <p id="highScore">Personal High score: {userProps.personalHighScore}</p>
                <p id="highScore">Game High score: {highScore}</p>
            </div>
      </section>
            <div className="scores">
                <div> Personal
                    <ol>
                        {
                        userProps.userScores.sort((a, b) => (a < b) ? 1 : -1).map(score => {
                            return <li>{score}</li>
                        })
                        }
                    </ol>
                </div>
                <div> Game
                    <ol>
                        {
                        userProps.userScores.sort((a, b) => (a < b) ? 1 : -1).map(score => {
                            return <li>{score}</li>
                        })
                        }
                    </ol>
                </div>
            </div>
    </>
  )
}

export default Score
