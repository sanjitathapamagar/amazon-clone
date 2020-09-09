import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCuPByNbV8z1YyNFIYmA6XNZZCVyUJENa4",
    authDomain: "clone-66f58.firebaseapp.com",
    databaseURL: "https://clone-66f58.firebaseio.com",
    projectId: "clone-66f58",
    storageBucket: "clone-66f58.appspot.com",
    messagingSenderId: "1046549795113",
    appId: "1:1046549795113:web:f42c00f1072c2f5c3e6738"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
