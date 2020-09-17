const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();

const auth = require("./utils/auth");

app.use(cors({ origin: true }));

const { getMenu, postItem, editItem, deleteItem } = require("./API/menu");

const {
  loginUser,
  signUpUser,
  getUserInfo,
  updateUserInfo,
} = require("./API/users");

// menu item routes

app.get("/", getMenu);
app.post("/", postItem);
app.put("/:itemId", editItem);
app.delete("/:itemId", deleteItem);

// user routes

app.post("/login", loginUser);
app.post("/signup", signUpUser);
app.get("/user", auth, getUserInfo);
app.put("/user", auth, updateUserInfo);

exports.api = functions.https.onRequest(app);
