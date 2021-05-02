import firebase from "firebase/app";
import 'firebase/firestore';

export const setNewPersonalHighscore = (user, score) => {

    let db = firebase.firestore();

    var userRef = db.collection("users").doc(user);

// Set the "capital" field of the city 'DC'
return userRef.update({
    personalHighScore: score
})
.then(() => {
    // console.log("Document successfully updated!");
})
.catch((error) => {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});

}
