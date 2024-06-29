import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyB_0DGwQPrybXRQm9pWsqRMD-FboOuYrB0",
  authDomain: "chatify-8bff4.firebaseapp.com",
  projectId: "chatify-8bff4",
  storageBucket: "chatify-8bff4.appspot.com",
  messagingSenderId: "37067345420",
  appId: "1:37067345420:web:1d29f3f27649a712c8e829",
  measurementId: "G-HHK5JQL4QN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
