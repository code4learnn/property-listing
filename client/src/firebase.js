// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_kF-PrskTB-7Lw_nx_zKdsDtoMKc62F0",
  authDomain: "project-5205f.firebaseapp.com",
  projectId: "project-5205f",
  storageBucket: "project-5205f.firebasestorage.app",
  messagingSenderId: "710262397420",
  appId: "1:710262397420:web:bf3529ae94959cf32f08c9",
  measurementId: "G-QJTJLW44MY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);