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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { username, email, firstname, lastname, address } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        username,
        email,
        firstname,
        lastname,
        address,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

// Initialize App
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
