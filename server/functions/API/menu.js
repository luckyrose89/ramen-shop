// menu functions to fetch, create, update and delete menu items

const { db } = require("../utils/admin");

exports.getMenu = async (request, response) => {
  try {
    const menuSnapShot = await db.collection("menu-items").get();
    const menu = [];

    menuSnapShot.docs.forEach((doc) => {
      menu.push({ id: doc.id, ...doc.data() });
    });
    response.json({ menu });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error });
  }
};
