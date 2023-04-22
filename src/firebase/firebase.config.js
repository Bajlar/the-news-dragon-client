// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsnles596-cpsuVicjuZki6mVB69fdP_8",
  authDomain: "the-news-dragon-client-9bc37.firebaseapp.com",
  projectId: "the-news-dragon-client-9bc37",
  storageBucket: "the-news-dragon-client-9bc37.appspot.com",
  messagingSenderId: "215214104924",
  appId: "1:215214104924:web:a4e5566b3611dc61fd6199"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;