import firebase from "firebase/app"; 
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvgYdi-dGyKkci8eV1PhKq9tF1Q89eTN8",
  authDomain: "react-app-udemy-38816.firebaseapp.com",
  projectId: "react-app-udemy-38816",
  storageBucket: "react-app-udemy-38816.appspot.com",
  messagingSenderId: "966203978029",
  appId: "1:966203978029:web:805ac8069e0f04b10063a4"
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(app);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}