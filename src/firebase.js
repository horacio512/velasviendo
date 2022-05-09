// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBL1mCjt1K1GKIFHDSnbBhVcezHVCcQorQ",
    authDomain: "velasviendo.firebaseapp.com",
    projectId: "velasviendo",
    storageBucket: "velasviendo.appspot.com",
    messagingSenderId: "1034233127616",
    appId: "1:1034233127616:web:5f6f9ffa2a125b95f54325",
    measurementId: "G-GG7ZKDFQDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

 export default db