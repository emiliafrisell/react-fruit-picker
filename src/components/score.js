import React from 'react'

import firebase from "firebase/app";
import 'firebase/firestore';

import { FirestoreProvider } from "@react-firebase/firestore";
import { firebaseConfig } from "../config";
import { FirestoreCollection } from "@react-firebase/firestore";

import './score.css';


const Score = ({ score, highScore }) => {
 
  return (
    <>
      <section className="scores">
            <p id="score">Score: {score}</p>
            <p id="highScore">High score: {highScore}</p>
      </section>
    </>
  )
}

export default Score
