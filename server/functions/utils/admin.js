//admin.js

const admin = require("firebase-admin");
const serviceAccount = require("../ramen-shop-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ramen-shop.firebaseio.com",
});

const db = admin.firestore();

module.exports = { admin, db };
