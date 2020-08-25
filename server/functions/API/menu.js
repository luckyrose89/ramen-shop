// menu API to fetch, create, update and delete menu items

const { db } = require("../utils/admin");

// get all menu items
exports.getMenu = async (request, response) => {
  try {
    const snapShot = await db.collection("menu-types").get();
    const menuItems = snapShot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return response.json({ menuItems });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error });
  }
};

// // post request to create menu category
// exports.postCategory = async (request, response) => {
//   try {
//     if (request.body.category.trim() === "") {
//       return response.status(400).json({ category: "must not be empty" });
//     }

//     const newCategory = {
//       category: request.body.category,
//       items: [],
//     };

//     const categoryCreated = await db.collection("menuItems").add(newCategory);
//     return response.json({ categoryCreated });
//   } catch (error) {
//     console.log(error);
//     return response.status(500).json({ error: "something went wrong!" });
//   }
// };

// // post to create and items to category
// exports.postItems = async(request, response) => {
//   try {

//   }catch(error) {

//   }
// }
