import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  userEditing: false,
  adminMode: false,
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.USER_EDITING_SELF_INFO:
      return {
        ...state,
        userEditing: !state.userEditing,
      };
    case UserActionTypes.ADMIN_MODE_ON:
      return {
        ...state,
        adminMode: true,
      };
    case UserActionTypes.ADMIN_MODE_OFF:
      return {
        ...state,
        adminMode: false,
      };
    default:
      return state;
  }
};

export default userReducer;
