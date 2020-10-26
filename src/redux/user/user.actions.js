import { UserActionTypes } from "./user.types";

export const toggleUserOptions = () => ({
  type: UserActionTypes.TOGGLE_USER_OPTIONS,
});

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const userEditMode = () => ({
  type: UserActionTypes.USER_EDITING_SELF_INFO,
});

export const adminModeOn = () => ({
  type: UserActionTypes.ADMIN_MODE_ON,
});

export const adminModeOff = () => ({
  type: UserActionTypes.ADMIN_MODE_OFF,
});
