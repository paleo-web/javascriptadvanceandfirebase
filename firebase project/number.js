// import {auth , RecaptchaVerifier, signInWithPhoneNumber} from './apps.js'

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js"
// import { auth , RecaptchaVerifier, signInWithPhoneNumber } from "./apps.js"


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

// const OTP = document.getElementById('OTP')
const SignUp_Btn = document.getElementById('NumberBtn')
const phoneNumber = document.getElementById('input_Number')
const OTP = document.getElementById('OTP')





SignUp_Btn.addEventListener('click', ()=>{
  // const auth = getAuth();

  // console.log(userNo.value)
  window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
  const appVerifier = window.recaptchaVerifier;
  console.log("appp",appVerifier);

  signInWithPhoneNumber(auth, `+${phoneNumber.value}`, appVerifier)
  .then((confirmationResult) => {

    
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    window.confirmationResult = confirmationResult;
    console.log('OTP sent')

    // ...
  }).catch((error) => {
    console.log(error , 'OTP not sent')
    // 
    // ...
  });
})

document.getElementById('OTP_Btn').addEventListener('click', ()=>{
  const code = OTP.value
  confirmationResult.confirm(code).then((result) => {
    // User signed in successfully.
    const user = result.user;
    console.log(user , 'user login')
    window.location.href = './Profile.html'
  }).catch((error) => {
    // User couldn't sign in (bad verification code?)
    // ...
    console.log(error , 'user not login')
  });
})


