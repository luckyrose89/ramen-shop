const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: true }));

const { getMenu } = require("./API/menu");
const { makeAdminUser } = require("./API/admin");

// menu item routes

app.get("/", getMenu);
app.put("/auth", makeAdminUser);

exports.api = functions.https.onRequest(app);
