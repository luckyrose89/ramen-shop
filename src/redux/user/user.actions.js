import axios from "axios";
import { UserActionTypes } from "./user.types";

// Action Creators

const loginUser = () => ({
  type: UserActionTypes.LOGIN_USER,
});

const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const logUserOut = () => ({
  type: UserActionTypes.LOG_OUT,
});

// Methods

export const fetchLoginUser = (userInfo) => async (dispatch) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/ramen-shop/us-central1/api/login",
      userInfo
    );
    localStorage.setItem("AuthToken", `Bearer ${response.data.tokenUserId}`);
    dispatch(loginUser());
  } catch (error) {
    console.log(error);
  }
};

export const fetchUser = () => async (dispatch) => {
  try {
    const authToken = localStorage.getItem("AuthToken");
    axios.defaults.headers.common = { Authorization: `${authToken}` };
    let response = await axios.get(
      "http://localhost:5000/ramen-shop/us-central1/api/user"
    );
    dispatch(setCurrentUser(response.data.userCredentials));
  } catch (error) {
    console.log(error);
  }
};
