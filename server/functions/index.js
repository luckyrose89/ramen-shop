const functions = require("firebase-functions");
const app = require("express")();

const { getMenu, postCategory, postItems } = require("./API/menu");

app.get("/", getMenu);
app.post("/", postCategory);
// app.post("/:categoryId", postItems);
exports.api = functions.https.onRequest(app);
