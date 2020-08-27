const functions = require("firebase-functions");
const app = require("express")();

const {
  getMenu,
  postCategory,
  postItems,
  editCategory,
  editItem,
} = require("./API/menu");

app.get("/", getMenu);
app.post("/", postCategory);
app.post("/:categoryId", postItems);
app.put("/:categoryId", editCategory);
app.put("/:categoryId/items/:itemId", editItem);
exports.api = functions.https.onRequest(app);
