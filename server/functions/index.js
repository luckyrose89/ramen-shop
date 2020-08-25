const functions = require("firebase-functions");
const app = require("express")();

const { getMenu, postCategory } = require("./API/menu");

app.get("/", getMenu);
// app.post("/", postCategory);
exports.api = functions.https.onRequest(app);
