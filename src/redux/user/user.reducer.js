import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  hidden: true,
  userEditing: false,
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.TOGGLE_USER_OPTIONS:
      return {
        ...state,
        hidden: !state.hidden,
      };
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
    default:
      return state;
  }
};

export default userReducer;
