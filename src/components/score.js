import React, {useState, useEffect} from 'react'

import firebase from "firebase/app";
import 'firebase/firestore';

import './score.css';


const Score = ({ score, isGameOver, userProps }) => {

    const [ first, setFirst ] = useState('')
    const [ second, setSecond ] = useState('')
    const [ third, setThird ] = useState('')

    let db = firebase.firestore();

    var docRef = db.collection("HighScores")
 
    useEffect(() => {

        docRef.orderBy("score", "desc").limit(3).get().then(doc => {
            let first = doc.docs[0].id
            let second = doc.docs[1].id
            let third = doc.docs[2].id
            
            docRef.doc(first).get().then(doc => {
                setFirst({name: doc.data().name, score: doc.data().score})
            })
            docRef.doc(second).get().then(doc => {
                setSecond({name: doc.data().name, score: doc.data().score})
            })
            docRef.doc(third).get().then(doc => {
                setThird({name: doc.data().name, score: doc.data().score})
            })
            
        });
    }, [])

    useEffect(() => {
        if(score > first.score) {
            setThird({name: second.name, score: second.score})
            setSecond({name: first.name, score: first.score})
            setFirst({name: userProps.userName, score: score})
            console.log('first')
        } else if (score > second.score && score <= first.score) {
            setThird({name: second.name, score: second.score})
            setSecond({name: userProps.userName, score: score})
            console.log('second')

        } else if (score > third.score && score <= second.score) {
            setThird({name: userProps.userName, score: score})
            console.log('third')

        }

    }, [isGameOver])

  return (
    <>
        <section className="scores">
                <p id="score">Score: {score}</p>
                <div style={{textAlign: 'right'}}>
                    <p id="highScore">Personal High score: {userProps.personalHighScore}</p>
                    <p id="highScore">Game High score: {first.score}</p>
                </div>
        </section>
        <section className="scores">
            <div> Personal top 3
                <ol>
                    {
                    userProps.userScores.sort((a, b) => (a < b) ? 1 : -1).slice(0, 3).map(score => {
                        return <li>{score}</li>
                    })
                    }
                </ol>
            </div>
            <div> Game top 3
                <ol style={{textAlign: 'left'}}>
                    <li style={{}}>{first.name}:  <span style={{float: 'right'}}> {first.score}</span></li>
                    <li>{second.name}:  <span style={{float: 'right'}}> {second.score}</span></li>
                    <li>{third.name}:  <span style={{float: 'right'}}> {third.score}</span></li>
                </ol>
            </div>
        </section>
    </>
  )
}

export default Score
