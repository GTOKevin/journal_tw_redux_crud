import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


// import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAD7H8vHUz0VuoRPot7FzjoU75VIEAls5Q",
    authDomain: "react-tw-journal.firebaseapp.com",
    projectId: "react-tw-journal",
    storageBucket: "react-tw-journal.appspot.com",
    messagingSenderId: "304828833260",
    appId: "1:304828833260:web:974384fc7c0848d001b4c9"
  };
 initializeApp(firebaseConfig);

 const db = getFirestore();
  const facebookAuthProvider = new FacebookAuthProvider();
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();
  const auth = getAuth();
  

  export{
      db,
      googleAuthProvider,
      facebookAuthProvider,
      githubAuthProvider,
      auth
    //   firebase
  }