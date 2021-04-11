import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDGWCw5_GhKXGTUvdFF1riOe05J3Rda344",
    authDomain: "twitter-clone-5ab4b.firebaseapp.com",
    projectId: "twitter-clone-5ab4b",
    storageBucket: "twitter-clone-5ab4b.appspot.com",
    messagingSenderId: "171762591858",
    appId: "1:171762591858:web:166ed183a54e991f64faeb"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
export default db;