  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

  // Auth
  import { 
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    sendEmailVerification,
  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  
  // fireStore
  import { getFirestore, query, where,  getDocs, collection , addDoc, doc, setDoc,  getDoc,Timestamp,} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
  
  //Stroage
  import {getStorage,  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDYiNVq-JtKYU6SRUQV5t22CvNE2QLBLRY",
    authDomain: "blog-application-1fadb.firebaseapp.com",
    projectId: "blog-application-1fadb",
    storageBucket: "blog-application-1fadb.appspot.com",
    messagingSenderId: "236398586699",
    appId: "1:236398586699:web:cbf41825bd6d1ca015d6ce"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const googleProvider = new GoogleAuthProvider();


 export{
  auth,
  db,
  storage,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  googleProvider,
  signInWithPopup,  
  sendEmailVerification,
  query,
  where,
  doc, 
  setDoc, 
  Timestamp,
  getDocs,
  collection,
  getDoc,
  addDoc,
  // getStorage,
 } 