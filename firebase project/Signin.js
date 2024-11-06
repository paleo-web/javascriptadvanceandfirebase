import { auth , signInWithEmailAndPassword} from "./apps.js";


let input_SignIn = document.getElementById('input_SignIn')
let password_SignIn = document.getElementById('password_SignIn')
let SignIn_Btn = document.getElementById('SignIn_Btn')

// console.log(input_SignIn , password_SignIn, SignIn_Btn)

SignIn_Btn.addEventListener('click' , ()=>{
  
  signInWithEmailAndPassword(auth, input_SignIn.value, password_SignIn.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location = './Profile.html'
    // console.log('you are logged in')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode , errorMessage)
    
  });
})