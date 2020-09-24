import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  loggedIn: false,
  loading: true,
  user: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN_USER:
      return {
        ...state,
        loggedIn: true,
      };
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: { ...action.payload },
        loading: false,
      };
    case UserActionTypes.UPDATE_USER:
      return {
        ...state,
        user: { ...action.payload },
      };
    case UserActionTypes.LOG_OUT:
      localStorage.clear();
      return {
        loggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export default userReducer;
