import { combineReducers } from "redux";

import menuReducers from "./menuReducers";

export default combineReducers({
  menu: menuReducers
});
