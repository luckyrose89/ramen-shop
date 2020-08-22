const functions = require("firebase-functions");
const app = require("express")();

const { getMenu } = require("./API/menu");

app.get("/", getMenu);
exports.api = functions.https.onRequest(app);
