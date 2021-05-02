import firebase from "firebase/app";
import 'firebase/firestore';


export const addHighScore = (userName, user, score) => {

    let db = firebase.firestore();

    db.collection("HighScores").add({
        email: user,
        name: userName,
        score: score
    })
    .then((docRef) => {
        // console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}
