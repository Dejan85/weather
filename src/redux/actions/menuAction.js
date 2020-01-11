import { SHOW__MENU } from "../type/type";

export const showMenu = payload => dispatch => {
  dispatch({
    type: SHOW__MENU,
    payload
  });
};
