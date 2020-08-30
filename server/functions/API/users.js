// users.js
// user function to login users

const { admin, db } = require("../utils/admin");
const config = require("../utils/config");

const firebase = require("firebase");

firebase.initializeApp(config);

exports.loginUser = async (request, response) => {
  try {
  } catch (error) {
    console.log(error);
    return response.status(403).json({ error });
  }
};

exports.signUpUser = async (request, response) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
