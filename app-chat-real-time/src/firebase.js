// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMSDQEJYbo5yOR6i5JqK8-yjFaVjTPYdc",
  authDomain: "app-chat-real-time-f2e88.firebaseapp.com",
  projectId: "app-chat-real-time-f2e88",
  storageBucket: "app-chat-real-time-f2e88.firebasestorage.app",
  messagingSenderId: "567170668484",
  appId: "1:567170668484:web:51949cbec1fc1cb13f3691"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};