import firebase from "firebase/app";
import 'firebase/firestore';


export const addUser = (user, email) => {
    

    let db = firebase.firestore();

    var docRef = db.collection("users").doc(email);

    docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Welcome back", doc.data().name);
        return doc
    } else {
        // doc.data() will be undefined in this case
        console.log("New user!");
        db.collection("users").doc(email).set({
            name: user,
            email: email,
            scores: [],
            personalHighScore: 0
        })
    }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}
