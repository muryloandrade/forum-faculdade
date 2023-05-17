// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVqNruVYQS6Gvw2ddEcLngJ8guG8XUvnk",
  authDomain: "study-share-53fea.firebaseapp.com",
  projectId: "study-share-53fea",
  storageBucket: "study-share-53fea.appspot.com",
  messagingSenderId: "102578060954",
  appId: "1:102578060954:web:4ef0aa13fa4d2e4a8ca923",
  meassurentId: "1:102578060954:web:4ef0aa13fa4d2e4a8ca923",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
