 import{auth ,createUserWithEmailAndPassword} from './apps.js'

 let input_SignUp = document.getElementById('input_SignUp')
 let password_SignUp = document.getElementById('password_SignUp')
 let SignUp_Btn = document.getElementById('SignUp_Btn')

//  console.log(input_SignUp , password_SignUp, SignUp_Btn)
//  const auth = getAuth(app);
 
SignUp_Btn.addEventListener('click' , hello)

function hello(){
    createUserWithEmailAndPassword(auth, input_SignUp.value, password_SignUp.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      window.location = './Profile.html'
      
      
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode , errorMessage)
      // ..
    });    
}

// hello()
