// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ11XHL2fcUi3lUWVL1OMykIjdpCJL6Q0",
  authDomain: "netflixgpt-aeadf.firebaseapp.com",
  projectId: "netflixgpt-aeadf",
  storageBucket: "netflixgpt-aeadf.appspot.com",
  messagingSenderId: "241859443766",
  appId: "1:241859443766:web:173bb2c2c6a99b915eec97",
  measurementId: "G-8C1DH3Q423"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth=getAuth();