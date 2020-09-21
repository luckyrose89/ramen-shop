import axios from "axios";

const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

export const logUserOut = () => ({
  type: "LOG_OUT",
});
