//auth.js

const { admin, db } = require("../utils/admin");

module.exports = async (request, response, next) => {
  let idToken;
  if (
    request.headers.authorization &&
    request.headers.authorization.startsWith("Bearer ")
  ) {
    idToken = request.headers.authorization.split("Bearer ")[1];
  } else {
    console.error("No token found");
    return response.status(403).json({ error: "Unauthorized" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    request.user = decodedToken;
    const userData = await db
      .collection("users")
      .where("userId", "==", request.user.uid)
      .limit(1)
      .get();
    request.user.username = userData.docs[0].data().username;
    request.user.email = userData.docs[0].data().email;
    request.user.address = userData.docs[0].data().address;
    console.log(request.user);
    return next();
  } catch (error) {
    console.log("An error occurred while verifying your token", error);
    response.status(403).json({ error });
  }
};
