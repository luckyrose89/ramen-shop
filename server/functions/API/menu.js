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

exports.postItem = async (request, response) => {
  try {
    const menuItemsRef = db.collection("menu-items");
    const itemCreated = await menuItemsRef.add({
      name: request.body.name,
      price: request.body.price,
      imageURL: request.body.imageURL,
      description: request.body.description,
      category: request.body.category,
    });
    return response.json({ itemCreated });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "something went wrong!" });
  }
};

exports.editItem = async (request, response) => {
  try {
    const itemRef = db.doc(`menu-items/${request.params.itemId}`);
    const editedItem = await itemRef.update(request.body);
    response.json({ editedItem });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "something went wrong!" });
  }
};

exports.deleteItem = async (request, response) => {
  try {
    const itemRef = db.collection("menu-items").doc(request.params.itemId);
    const itemDeleted = await itemRef.delete();
    response.json({ itemDeleted });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "something went wrong!" });
  }
};
