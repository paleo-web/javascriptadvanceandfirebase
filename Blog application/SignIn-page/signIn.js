import {
    auth,
    signInWithEmailAndPassword,

} from '../firebase/firebase.js'

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        alert('logged in successfully')
        window.location.href = "../profile-page/profile.html";

    })
    .catch((err) => {
        alert(err.message)
    })
})