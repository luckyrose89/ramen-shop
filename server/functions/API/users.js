// users.js
// user function to login users

const { db } = require("../utils/admin");
const config = require("../utils/config");

const {
  validateLoginInput,
  validateSignupInput,
} = require("../utils/validators");

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

exports.signUpUser = async (request, response) => {
  try {
    const user = {
      username: request.body.username,
      email: request.body.email,
      password: request.body.password,
      confirmPassword: request.body.confirmPassword,
    };

    const { valid, errors } = validateSignupInput(user);

    if (!valid) return response.status(400).json({ errors });

    // check if user exist in db
    let userId, token;
    let docRef = await db.doc(`users/${user.username}`).get();
    if (docRef.exists)
      return response.json({
        username: "Username is taken, Please try again!",
      });
    let newUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password);
    userId = newUser.user.uid;
    token = await newUser.user.getIdToken();
    const userDetails = {
      username: user.username,
      email: user.email,
      createdAt: new Date().toISOString(),
      userId,
    };

    await db.doc(`users/${user.username}`).set(userDetails);
    return response.status(201).json({ token });
  } catch (error) {
    console.log(error);
    if (error.code === "auth/email-already-in-use") {
      return response.status(400).json({ email: "Email already in use!" });
    }
    return response
      .status(500)
      .json({ general: "Error during signup, please try again!" });
  }
};
