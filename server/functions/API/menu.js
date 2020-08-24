// menu API to fetch, create, update and delete menu items

const { db } = require("../utils/admin");

exports.getMenu = async (request, response) => {
  const snapShot = await db.collection("menuItems").get();
  const menuItems = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  response.json({ menuItems });
};
