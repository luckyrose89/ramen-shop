const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: true }));

const { getMenu, postItem, editItem, deleteItem } = require("./API/menu");

const { loginUser, signUpUser, getUserInfo } = require("./API/users");

// menu item routes

app.get("/", getMenu);
app.post("/", postItem);
app.put("/:itemId", editItem);
app.delete("/:itemId", deleteItem);

// user routes
app.post("/auth/login", loginUser);
app.post("/auth/signup", signUpUser);
app.get("/auth/user", getUserInfo);

exports.api = functions.https.onRequest(app);
