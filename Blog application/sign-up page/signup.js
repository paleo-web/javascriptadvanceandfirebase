import{
    auth,
    createUserWithEmailAndPassword,
    googleProvider,
    signInWithPopup,
    sendEmailVerification,
}from '../firebase/firebase.js'

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
        // alert('verify your email ==> 1');

        sendEmailVerification(auth.currentUser)
        .then((result) => {
            alert('verification email sent');
            window.location.href = "../profile-page/profile.html";
            console.log(result);
        })
    })
    .catch((err) => {
        alert(err.message)
    })

})


const google = document.getElementById('google')

google.addEventListener('click', () => {    
    // alert('clicked');
    signInWithPopup(auth, googleProvider)

    .then((result) => {
        console.log('==>' ,result);
        window.location.href = "../profile-page/profile.html";
    })
    .catch((err) => {
        console.log(err);
    })
})