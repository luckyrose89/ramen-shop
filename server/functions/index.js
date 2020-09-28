const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: true }));

const { getMenu, postItem, editItem, deleteItem } = require("./API/menu");

// menu item routes

app.get("/", getMenu);
app.post("/", postItem);
app.put("/:itemId", editItem);
app.delete("/:itemId", deleteItem);

exports.api = functions.https.onRequest(app);
