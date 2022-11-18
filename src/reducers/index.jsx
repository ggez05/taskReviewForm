import { combineReducers } from "redux";
import UserReducer from "./userReducer.js";

const rootReducer = combineReducers({
  user: UserReducer, // the UserReducer as user
});
export default rootReducer;
