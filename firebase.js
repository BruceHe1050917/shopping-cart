// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiKa9Vpn_XdyQr6m6rGN_NiFpdDMlTl8U",
  authDomain: "shopping-car-560ae.firebaseapp.com",
  databaseURL: "https://shopping-car-560ae-default-rtdb.firebaseio.com",
  projectId: "shopping-car-560ae",
  storageBucket: "shopping-car-560ae.appspot.com",
  messagingSenderId: "847895615434",
  appId: "1:847895615434:web:d649edb0d82c5693f56133",
  measurementId: "G-50L03F6MS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);