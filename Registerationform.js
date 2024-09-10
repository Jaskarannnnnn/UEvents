import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
 
const firebaseConfig = {
    apiKey: "AIzaSyCT4YKNopYJYG9SRey9HINpFP52QR5rUBU",
    authDomain: "uevents-bea19.firebaseapp.com",
    projectId: "uevents-bea19",
    storageBucket: "uevents-bea19.appspot.com",
    messagingSenderId: "12703804661",
    appId: "1:12703804661:web:8d0d79ebbc3718981169bc",
    measurementId: "G-NFQ826HNE5"
};
 
 // Initialize Firebase.
const app = initializeApp(firebaseConfig);
const db = getFirestore(); // Get Firestore instance
 
 // Assuming your form has an ID "form"
const form = document.getElementById("form");
 
form.addEventListener("submit", (e) => {
   e.preventDefault();
 
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const phone = document.getElementById('phone').value;
   const rollnum = document.getElementById('rollnum').value;
   const groupnum = document.getElementById('groupnum').value;
   const year = document.getElementById('year').value;
 
   // Optional: Validate user input before submitting
 
   // Create a reference to the "users" collection in Firestore
   const event1 = collection(db, "event1");
 
   // Add a new document with user data
   addDoc(event1, {
     name,
     email,
     phone,
     rollnum,
     groupnum,
     year,
   })
     .then(() => {
       alert("Registration successful!");
       // Reset form or handle success scenario
     })
     .catch((error) => {
       console.error("Error adding document: ", error);
     });
});