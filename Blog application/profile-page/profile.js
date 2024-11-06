import {
  auth,
  signOut,
  onAuthStateChanged,
  db,
  setDoc,
  doc,
  getDoc,
  collection,
  Timestamp,
  getDocs,
} from "../firebase/firebase.js";

// console.log();
onAuthStateChanged(auth, (user) => {
  if (user) {
    let user = auth.currentUser;
    const uid = user.uid;
    const userInfo = {
      userEmail: user.email,
      UserAccountCreated: user.metadata.creationTime,
      userLastSignInTime: user.metadata.lastSignInTime,
      userImg: user.photoURL,
      userId: auth.currentUser.uid,
    };
    // console.log(user);
    UserInfo(userInfo,uid);
    User(uid); 

  //  window.location.href = "../profile-page/profile.html";
  } else {
    // window.location.href = "../SignIn-page/signIn.html";
  }
});

const signOutButton = document.getElementById("signOut");
signOutButton.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log("sign out successful");
      window.location.href = "../SignIn-page/signIn.html";
    })
    .catch((error) => {
      console.log(error);
    });
});

const ApiContainer = document.getElementById("ApiContainer");
const fetchData = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=18fc752c437f4ec189a07b7afb05667e"
  );  
  const data = await response.json();
 ApiContainer.innerHTML += data.articles.map((data) => {
    return `
        <a href="#" class="flex mb-5 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
  <img class=" w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="${data.urlToImage}" alt="">
  <div class="flex flex-col justify-between p-4 leading-normal">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${data.title}</h5>
  <p class="mb-2 text-xl tracking-tight text-orange-500 underline dark:text-white">${data.author}</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${data.description}</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${data.content}</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${data.publishedAt}</p>
  </div>
</a>
        `;
  });
};

fetchData();



// Function to set user information in Firestore
async function UserInfo(Info, id) {
    try {
        await setDoc(doc(db, "users", id), Info);
        // console.log("success");
    } catch (err) {
        console.log(err);
    }
}

// Function to fetch user information from Firestore
async function User(id) {
    try {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            const data = docSnap.data();
            // console.log(data);
            const User_Email = document.getElementById('User-Email');
            const UserName = document.getElementById('UserName');
            const UserImg = document.getElementById('userImg');
            
            UserImg.src = data.userImg;
            UserName.innerHTML = data.userEmail.slice(0, data.userEmail.indexOf('@'));
            User_Email.innerHTML = data.userEmail;
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error fetching document:", error);
    }
}


// User()