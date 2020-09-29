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

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { username, email, firstname, lastname, address } = user;
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

  return getUserDocument;
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    return firestore.collection("users").doc(uid);
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};

// Initialize App
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
