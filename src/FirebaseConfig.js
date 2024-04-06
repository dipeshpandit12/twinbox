// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,GithubAuthProvider}from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAKwC7-aGdy5eBP4XQ1_QJrSteoYsKxfaE",
  authDomain: "twinbox-dd.firebaseapp.com",
  projectId: "twinbox-dd",
  storageBucket: "twinbox-dd.appspot.com",
  messagingSenderId: "636140278529",
  appId: "1:636140278529:web:faaffc4c42654af65bc100",
  measurementId: "G-HP5744F7HZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

const provider_google=new GoogleAuthProvider();
const provider_github= new GithubAuthProvider();
export{auth,provider_google,provider_github}