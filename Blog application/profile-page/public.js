import { auth, getDoc, signOut,addDoc  ,onAuthStateChanged, setDoc,doc, collection, Timestamp,  where, getDocs, db, query } from "../firebase/firebase.js";
const form = document.getElementById("form");
const user_container = document.getElementById("user-container");

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    // getBlogs(uid);

    // UserInfo(userInfo,uid);
    // ...
  } else {
    // ...

  }
});

let userContainer = document.getElementById("user-container");
const docRef = collection(db, "blogs");
const snapShot = getDocs(docRef)
.then((snapShot) => {
  snapShot.forEach((doc) => {
    
    const timestamp = doc.data().timestamp; 
    let time;
    if(timestamp) {
      const date = timestamp.toDate();
      const formattedDate = date.toLocaleString();
      const Publishdate = formattedDate.slice(0, formattedDate.indexOf(','));
      
      time = Publishdate
      
    }
    
    // console.log(time);
    

//     let card= `
//     <figure class="flex  flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
//       <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
//           <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${doc.data().title}</h3>
//           <p class="my-4">${doc.data().description}"</p>
//       </blockquote>
//       <figcaption class="flex items-center justify-center ">
//           <img class="rounded-full w-9 h-9" src="${doc.data().userImg}" alt="profile picture">
//           <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
//               <div>${doc.data().userEmail.slice(0, doc.data().userEmail.indexOf('@'))}</div>
//               <div class="text-sm text-gray-500 dark:text-gray-400 ">${time}</div>
//           </div>
//       </figcaption>    

//   </figure>

//     `

let card = `
  <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
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

    userContainer.innerHTML += card;
    
  })
})