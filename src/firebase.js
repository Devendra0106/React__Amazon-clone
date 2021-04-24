import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDYMXXWHUV90zH-zbD06kK8YRvoFcsJ1ec",
    authDomain: "clone-5d27b.firebaseapp.com",
    projectId: "clone-5d27b",
    storageBucket: "clone-5d27b.appspot.com",
    messagingSenderId: "34562409139",
    appId: "1:34562409139:web:5c46497f241f9fd163e6c6",
    measurementId: "G-HHYWCNJ6ZF"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };