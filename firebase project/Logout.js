import {auth , signOut} from './apps.js'
const Logout = document.getElementById('Logout')


 Logout && Logout.addEventListener('click' , ()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        window.location = './Signup.html'
      }).catch((error) => {
        // An error happened.
        console.log('erro' , error)
      });
 })