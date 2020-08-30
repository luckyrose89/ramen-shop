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

app.get("/", getMenu);
app.post("/", postCategory);
app.post("/:categoryId", postItems);
app.put("/:categoryId", editCategory);
app.put("/:categoryId/items/:itemId", editItem);
app.delete("/:categoryId", deleteCategory);
app.delete("/:categoryId/items/:itemId", deleteItem);

exports.api = functions.https.onRequest(app);
