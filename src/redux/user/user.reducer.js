const INITIAL_STATE = {
  loggedIn: false,
  user: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        loggedIn: true,
        user: { ...action.payload },
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: { ...action.payload },
      };
    case "LOG_OUT":
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
