// menu API to fetch, create, update and delete menu items

const { db } = require("../utils/admin");

exports.getMenu = async (request, response) => {
  try {
    const menuSnapShot = await db.collection("menu-types").get();
    const menu = [];

    for (const menuTypeObj of menuSnapShot.docs) {
      let menuCategory = menuTypeObj.data();
      menuCategory.id = menuTypeObj.id;
      menuCategory["items"] = [];

      let menuItemsSnapshot = await menuTypeObj.ref
        .collection("menu-items")
        .get();
      menuItemsSnapshot.forEach((doc) => {
        menuCategory["items"].push({ id: doc.id, ...doc.data() });
      });
      menu.push(menuCategory);
    }

    response.json({ menu });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error });
  }
};

exports.postCategory = async (request, response) => {
  try {
    if (request.body.category.trim() === "") {
      return response.status(400).json({ category: "must not be empty" });
    }
    const categoryCreated = await db.collection("menu-types").add({
      category: request.body.category,
    });
    return response.json({ categoryCreated });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "something went wrong!" });
  }
};

exports.postItems = async (request, response) => {
  try {
    const menuItemsRef = db
      .doc(`menu-types/${request.params.categoryId}`)
      .collection("menu-items");
    const itemCreated = await menuItemsRef.add({
      name: request.body.name,
      price: request.body.price,
      imageURL: request.body.imageURL,
      description: request.body.description,
    });

    return response.json({ itemCreated });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "something went wrong!" });
  }
};

exports.editCategory = async (request, response) => {
  try {
    if (request.body.category.trim() === "") {
      return response.status(400).json({ category: "must not be empty" });
    }
    const categoryRef = db
      .collection("menu-types")
      .doc(request.params.categoryId);
    const editedCategory = await categoryRef.update({
      category: request.body.category,
    });

    response.json({ editedCategory });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "something went wrong!" });
  }
};

exports.editItem = async (request, response) => {
  try {
    const itemRef = db.doc(
      `menu-types/${request.params.categoryId}/menu-items/${request.params.itemId}`
    );
    const editedItem = await itemRef.update(request.body);
    response.json({ editedItem });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "something went wrong!" });
  }
};
