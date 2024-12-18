// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiWgMPpAcGMKuaSL0_qZJNB2bKwlFOYAQ",
  authDomain: "optimus-mockups.firebaseapp.com",
  projectId: "optimus-mockups",
  storageBucket: "optimus-mockups.appspot.com",
  messagingSenderId: "669406315815",
  appId: "1:669406315815:web:911cd66332f0b0a75b9502"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };