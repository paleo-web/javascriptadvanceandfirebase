import { auth, getDoc, signOut,addDoc  ,onAuthStateChanged, setDoc,doc, collection, Timestamp,  where, getDocs, db, query } from "../firebase/firebase.js";
const form = document.getElementById("form");
const user_container = document.getElementById("user-container");

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    getBlogs(uid);



    User(uid); 

    const userInfo = {
      userEmail: user.email,
      UserAccountCreated: user.metadata.creationTime,
      userLastSignInTime: user.metadata.lastSignInTime,
      userImg: user.photoURL,
      userId: auth.currentUser.uid,
    };
    UserInfo(userInfo,uid);
    // ...
  } else {
    // ...

  }
});


form.addEventListener("submit",async (e) => {
  e.preventDefault();
  
  let user = auth.currentUser
  const userInfo = {
    userEmail: user.email,
    UserAccountCreated: user.metadata.creationTime,
    userLastSignInTime: user.metadata.lastSignInTime,
    userImg: user.photoURL,
    userId: auth.currentUser.uid,
    title: e.target[0].value,
    description: e.target[1].value,
    timestamp: Timestamp.now(),
  };

  
  
  // console.log(userInfo.userId);
  const submit_btn = document.getElementById('submit-btn');
  submit_btn.innerHTML = "Loading...";
  submit_btn.disabled = true;
  const docRef = await addDoc(collection(db, "blogs"), {
    ...userInfo,

  });

});

async function getBlogs(id) {

  const q = query(collection(db, "blogs"), where("userId", "==", id));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    const timestamp = doc.data().timestamp; 
    let time;
    if(timestamp) {
      const date = timestamp.toDate();
      const formattedDate = date.toLocaleString();
      const Publishdate = formattedDate.slice(0, formattedDate.indexOf(','));
      
      time = Publishdate
      
    }
    
    // console.log(time);
    

    let card= `
    <figure class="flex  flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
      <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${doc.data().title}</h3>
          <p class="my-4">${doc.data().description}"</p>
      </blockquote>
      <figcaption class="flex items-center justify-center ">
          <img class="rounded-full w-9 h-9" src="${doc.data().userImg}" alt="profile picture">
          <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>${doc.data().userEmail.slice(0, doc.data().userEmail.indexOf('@'))}</div>
              <div class="text-sm text-gray-500 dark:text-gray-400 ">${time}</div>
          </div>
      </figcaption>    

  </figure>

    `

    user_container.innerHTML += card;
  });
}



const time = Timestamp.now()


// console.log(timeStamp)


// Function to set user information in Firestore
async function UserInfo(Info, id) {
  try {
      await setDoc(doc(db, "users", id), Info);
      console.log("success");
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