import { SHOW__MENU } from "../type/type";

const initialState = { menu: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW__MENU:
      return {
        ...state,
        menu: action.payload
      };
    default:
      return state;
  }
}
