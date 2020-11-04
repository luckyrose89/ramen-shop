import MenuActionTypes from "./menu.types";
import axios from "axios";

export const fetchMenuItemsStart = () => ({
  type: MenuActionTypes.FETCH_MENU_START,
});

export const fetchMenuItemsSuccess = (items) => ({
  type: MenuActionTypes.FETCH_MENU_SUCCESS,
  payload: items,
});

export const fetchMenuItemsFailure = (errorMessage) => ({
  type: MenuActionTypes.FETCH_MENU_FAILURE,
  payload: errorMessage,
});

export const getMenuItems = () => async (dispatch) => {
  try {
    dispatch(fetchMenuItemsStart());
    const itemsResult = await axios.get(
      "https://us-central1-ramen-shop.cloudfunctions.net/api"
    );
    dispatch(fetchMenuItemsSuccess(itemsResult.data.menu));
  } catch (error) {
    console.log(error);
    dispatch(fetchMenuItemsFailure(error.message));
  }
};
