// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "react-journal-app-9f22b.firebaseapp.com",
  projectId: "react-journal-app-9f22b",
  storageBucket: "react-journal-app-9f22b.appspot.com",
  messagingSenderId: "655267317936",
  appId: "1:655267317936:web:26e533deef3c0949a65375"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);