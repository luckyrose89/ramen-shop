// create admin users

const admin = require("firebase-admin");

exports.makeAdminUser = async (request, response) => {
  const { userId } = request.body;
  try {
    await admin.auth().setCustomUserClaims(userId, { admin: true });
    return response.json({ message: "Successfully set as admin!" });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error });
  }
};
