import { UserActionTypes } from "./user.types";

export const toggleUserOptions = () => ({
  type: UserActionTypes.TOGGLE_USER_OPTIONS,
});

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
