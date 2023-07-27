
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTwBqyLuNi_v3bIepl6sNil9G9pXjSP0A",
  authDomain: "website-design-ae9ea.firebaseapp.com",
  projectId: "website-design-ae9ea",
  storageBucket: "website-design-ae9ea.appspot.com",
  messagingSenderId: "133319857768",
  appId: "1:133319857768:web:b7e0117698fd825e2a0ddd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
