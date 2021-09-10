// import firebase from "firebase";
// import * as firebase from "firebase/app"
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGQSiy0pAjdENtQ72V1DX8dE-0Euzp49Y",
  authDomain: "amazn-2-nextjs.firebaseapp.com",
  projectId: "amazn-2-nextjs",
  storageBucket: "amazn-2-nextjs.appspot.com",
  messagingSenderId: "330280725818",
  appId: "1:330280725818:web:c52fd1a70ec5a048663403",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;
