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
    const { email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

// add new doc to orderHistory collection
export const createOrderHistoryDocument = async (userId, cartItems) => {
  const userDocRef = firestore.doc(`users/${userId}`);
  const orderHistoryCollectionRef = userDocRef.collection("/orderHistory");
  const createdAt = new Date();
  try {
    await orderHistoryCollectionRef.add({
      cartItems: cartItems,
      createdAt,
    });
  } catch (error) {
    console.log("Error logging order history", error.message);
  }
};

// retrieve docs of user from orderHistory by userId
export const getOrderHistoryDocuments = async (userId) => {
  try {
    const orderHistoryDocsSnapshot = await firestore
      .collection(`users/${userId}/orderHistory`)
      .orderBy("createdAt", "desc")
      .get();
    return orderHistoryDocsSnapshot;
  } catch (error) {
    console.log("Error fetching requested documents ", error.message);
  }
};

// update user document
export const updateUserDocument = async (id, additionalData) => {
  const { username, firstname, lastname, address, email } = additionalData;
  try {
    const userRef = firestore.doc(`users/${id}`);
    await userRef.set({
      email,
      username,
      firstname,
      lastname,
      address,
    });
  } catch (error) {
    console.log("Error updating user document", error.message);
  }
};

// add new menu item
export const addMenuItemDocument = async (data) => {
  try {
    const result = await firestore.collection("menu-items").add(data);
    console.log("Menu item added! ", result);
  } catch (error) {
    console.log("Error adding item to the list ", error.message);
  }
};

// Initialize App
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
