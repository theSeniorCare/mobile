// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore"; 
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZJoerQ0v22Qv0t_WarYCOsl9WXmGv8k8",
  authDomain: "chatapp-a781a.firebaseapp.com",
  databaseURL: "https://chatapp-a781a-default-rtdb.firebaseio.com",
  projectId: "chatapp-a781a",
  storageBucket: "chatapp-a781a.appspot.com",
  messagingSenderId: "21496417006",
  appId: "1:21496417006:web:15a285e11d1edd9cc781ff",
  measurementId: "G-4RQ8PWRV96"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP);
export const FIREBASE_DB = getDatabase(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);