import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectUserDropdown = createSelector(
  [selectUser],
  (user) => user.hidden
);

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectUserInfoEditForm = createSelector(
  [selectUser],
  (user) => user.userEditing
);

export const selectAdminMode = createSelector(
  [selectUser],
  (user) => user.adminMode
);
