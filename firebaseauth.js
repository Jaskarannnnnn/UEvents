import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"

const firebaseConfig = {
   apiKey: "AIzaSyCT4YKNopYJYG9SRey9HINpFP52QR5rUBU",
   authDomain: "uevents-bea19.firebaseapp.com",
   projectId: "uevents-bea19",
   storageBucket: "uevents-bea19.appspot.com",
   messagingSenderId: "12703804661",
   appId: "1:12703804661:web:8d0d79ebbc3718981169bc",
   measurementId: "G-NFQ826HNE5"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const db=getFirestore();

onAuthStateChanged(auth, (user)=>{
    const loggedInUserId=localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById('loggedUserFName').innerText=userData.firstName;
                document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUserLName').innerText=userData.lastName;
                document.getElementById('loggedUserphNum').innerText=userData.phNum;

            }
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not Found in Local storage")
    }
  })
