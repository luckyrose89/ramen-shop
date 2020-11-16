// create admin users

const admin = require("firebase-admin");

exports.makeAdminUser = async (request, response) => {
  const { userEmail } = request.body;
  try {
    const user = await admin.auth().getUserByEmail(userEmail);
    if (user.emailVerified) {
      await admin.auth().setCustomUserClaims(user.uid, { admin: true });
      return response.json({ message: "Successfully set as admin!" });
    }
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error });
  }
};
