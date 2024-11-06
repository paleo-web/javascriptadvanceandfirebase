import { auth , onAuthStateChanged } from "./firebase/firebase.js";


// login page
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, redirect to home or dashboard page
        const uid = user.uid;
        console.log(uid);
        
        // Example redirection, change to your actual logged-in page
        if (window.location.pathname === "../SignIn-page/signIn.html" || window.location.pathname === "../sign-up page/signup.html") {
            history.replaceState(null, null, "../profile-page/profile.html");
            window.location.href = "../profile-page/profile.html"; // Replace with your actual page

        }
    } else {
        // User is not signed in
        if (window.location.pathname !== "../SignIn-page/signIn.html" && window.location.pathname !== "../sign-up page/signup.html") {
            history.replaceState(null, null, "../SignIn-page/signIn.html");
            window.location.href = "../SignIn-page/signIn.html"; // Redirect to sign-in page
        }
    }
});
