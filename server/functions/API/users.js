// users.js
// user function to login users

// const { admin, db } = require("../utils/admin");
const config = require("../utils/config");

const { validateLoginInput } = require("../utils/validators");

const firebase = require("firebase");

// initialize firebase app
firebase.initializeApp(config);

exports.loginUser = async (request, response) => {
  try {
    const user = {
      email: request.body.email,
      password: request.body.password,
    };

    const { valid, errors } = validateLoginInput(user);
    if (!valid) return response.status(400).json({ errors });

    let tokenData = await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password);
    let tokenUserId = await tokenData.user.getIdToken();

    return response.json({ tokenUserId });
  } catch (error) {
    console.log(error);
    return response
      .status(403)
      .json({ error: "Incorrect credentials, please try again!" });
  }
};

// exports.signUpUser = async (request, response) => {
//   try {
//   } catch (error) {
//     console.log(error);
//   }
// };
