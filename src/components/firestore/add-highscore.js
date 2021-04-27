import firebase from "firebase/app";
import 'firebase/firestore';


export const addHighScore = (userName, user, score) => {
    // firebase.initializeApp({
    //             apiKey: "AIzaSyBtGh5Qy55R-OBHz8ISsBoFd8OWJvKJnsA",
    //             authDomain: "react-fruit-picker.firebaseapp.com",
    //             projectId: 'AsxXK9lsZdVqgAiIJyRa'
    //           });

        let db = firebase.firestore();

    db.collection("HighScores").add({
        email: user,
        name: userName,
        score: score
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}
