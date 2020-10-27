import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import menuReducer from "./menu/menu.reducer";

const persistConfig = {
  key: "root", //at what do we want to start storing
  storage,
  whitelist: ["cart", "user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  menu: menuReducer,
});

export default persistReducer(persistConfig, rootReducer);
