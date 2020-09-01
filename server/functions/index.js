const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: true }));

const {
  getMenu,
  postCategory,
  postItems,
  editCategory,
  editItem,
  deleteCategory,
  deleteItem,
} = require("./API/menu");

const { loginUser, signUpUser } = require("./API/users");

// menu item routes

app.get("/", getMenu);
app.post("/", postCategory);
app.post("/:categoryId", postItems);
app.put("/:categoryId", editCategory);
app.put("/:categoryId/items/:itemId", editItem);
app.delete("/:categoryId", deleteCategory);
app.delete("/:categoryId/items/:itemId", deleteItem);

// user routes
app.post("/auth/login", loginUser);
app.post("/auth/signup", signUpUser);

exports.api = functions.https.onRequest(app);
