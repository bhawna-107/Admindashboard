// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from  'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIKXrH0CRXEem5jwlkj5f37VW0KoY9M58",
  authDomain: "https://openinapp-dashboard-psi.vercel.app/",
  projectId: "reactdashboard-107",
  storageBucket: "reactdashboard-107.appspot.com",
  messagingSenderId: "894875889932",
  appId: "1:894875889932:web:d6f0a22514a891adb41929",
  measurementId: "G-01WMHY3ZPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(app);
const db = getFirestore(app);
export {app, auth, googleProvider, db};