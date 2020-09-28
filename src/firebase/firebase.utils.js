import firebase from "firebase/app";
import "firebase/firestore"; // for the db
import "firebase/auth"; // for the auth

const config = {
  apiKey: "AIzaSyDMlABi03xttVVDnloOssaYqtQdi4Jn_BQ",
  authDomain: "ramen-shop.firebaseapp.com",
  databaseURL: "https://ramen-shop.firebaseio.com",
  projectId: "ramen-shop",
  storageBucket: "ramen-shop.appspot.com",
  messagingSenderId: "8730144848",
  appId: "1:8730144848:web:1230e062da0050254c6155",
  measurementId: "G-KX7HCG2W2F",
};

// Initialize App
firebase.initializeApp(config);
