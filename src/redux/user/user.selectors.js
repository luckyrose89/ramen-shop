import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectLoggedIn = createSelector(
  [selectUser],
  (user) => user.loggedIn
);

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.user
);
