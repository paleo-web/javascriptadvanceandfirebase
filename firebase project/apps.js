// Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQHrUlQeIoBK-_Kd6DuHoYfjceTawEVj4",
  authDomain: "user-authn.firebaseapp.com",
  projectId: "user-authn",
  storageBucket: "user-authn.appspot.com",
  messagingSenderId: "877702461639",
  appId: "1:877702461639:web:86426fbeb7c0375b90a6e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const name = document.getElementById("name");
const email = document.getElementById("email");

 onAuthStateChanged(auth, (user) => {
  
  if (user) {
    // window.location = './Profile.html'

    

    name.innerHTML = user.email.slice(0, user.email.indexOf("@"));
    email.innerHTML = user.email;

    const uid = user.uid;

    // console.log('user login')
    // ...
    // Swal.fire({
    //   title: "Your account has been created!",
    //   text: "You clicked the button!",
    //   icon: "success"
    // })
  } else {
    // console.log("user Logout");
    // window.location = './SignIn.html'
    // Swal.fire({
    //   title: "Please try again or Create Your Account",
    //   text: "You clicked the button!",
    //   icon: "error"
    // })
  }
});




export {
  app,
  auth,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber,
};
