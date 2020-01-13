import { combineReducers } from "redux";

import menuReducers from "./menuReducers";
import backgroundReducer from "./backgroundReducer";

export default combineReducers({
  menu: menuReducers,
  background: backgroundReducer
});
