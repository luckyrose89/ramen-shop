import { createSelector } from "reselect";

const selectMenu = (state) => state.menu;

export const selectMenuItems = createSelector(
  [selectMenu],
  (menu) => menu.menuItems
);

export const selectIsFetching = createSelector(
  [selectMenu],
  (menu) => menu.isFetching
);
