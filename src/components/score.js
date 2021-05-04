import React, {useState, useEffect} from 'react'

import firebase from "firebase/app";
import 'firebase/firestore';

import './score.css';

import Party from './color/svg/1F389.svg'


const Score = ({ score, isGameOver, userProps }) => {

    const [ first, setFirst ] = useState({name: 'N/N', score: 0})
    const [ second, setSecond ] = useState({name: 'N/N', score: 0})
    const [ third, setThird ] = useState({name: 'N/N', score: 0})

    let db = firebase.firestore();

    var docRef = db.collection("HighScores")
 
    useEffect(() => {

        docRef.orderBy("score", "desc").limit(3).get().then(doc => {
            if (doc.docs[0] !== undefined) {
                let first = doc.docs[0].id
                docRef.doc(first).get().then(doc => {
                    setFirst({name: doc.data().name, score: doc.data().score})
                })
            }
            if (doc.docs[1] !== undefined) {
                let second = doc.docs[1].id
                docRef.doc(second).get().then(doc => {
                    setSecond({name: doc.data().name, score: doc.data().score})
                })
            }
            if (doc.docs[2] !== undefined) {
                let third = doc.docs[2].id
                docRef.doc(third).get().then(doc => {
                    setThird({name: doc.data().name, score: doc.data().score})
                })
            }
            
            
        });
    }, [])

    useEffect(() => {
        if (userProps.isSignedIn) {
            if(score > first.score) {
                setThird({name: second.name, score: second.score})
                setSecond({name: first.name, score: first.score})
                setFirst({name: userProps.userName, score: score})

            } else if (score > second.score && score <= first.score) {
                setThird({name: second.name, score: second.score})
                setSecond({name: userProps.userName, score: score})

            } else if (score > third.score && score <= second.score) {
                setThird({name: userProps.userName, score: score})
            }
        }

    }, [isGameOver])

  return (
    <apart>
        <section className="scores">
                <p id="score">
                    <span style={{fontWeight: 'bold'}}>Score: </span> {score}
                </p>
                <div className='high-scores'>
                    {
                        userProps.isSignedIn && 
                        <p id="highScore"><span style={{fontWeight: 'bold'}}>Personal High score: </span>{userProps.personalHighScore}</p>
                    }
                    <p id="highScore"><span style={{fontWeight: 'bold'}}>Game High score: </span>{first.score}</p>
                </div>
        </section>
        <section className="scores">

            { 
                userProps.isSignedIn && 

                <div className='personal-score score-box'> 

                    <h4>Your top 3 <img src={Party} style={{marginBottom: '-3px'}}/></h4>

                    <ol>
                        {
                        userProps.userScores.sort((a, b) => (a < b) ? 1 : -1).slice(0, 3).map(score => {
                            return (
                                <li>
                                    <span className='game-span'>{score}</span>
                                </li>
                                )
                        })
                        }
                    </ol>
                </div>
            }

            <div className='game-score score-box'> 

                <h4>Game High Score</h4>

                <ol style={{textAlign: 'left'}}>
                    <li key='1'>
                        {first.name}:  <span className='game-span'> {first.score}</span>
                    </li>
                    <li key='2'>
                        {second.name}:  <span className='game-span'> {second.score}</span>
                    </li>
                    <li key='3'>
                        {third.name}:  <span className='game-span'> {third.score}</span>
                    </li>
                </ol>
            </div>
        </section>
    </apart>
  )
}

export default Score
