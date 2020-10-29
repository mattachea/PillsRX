import { combineReducers } from "redux";
import medicineReducer from "./medicineReducer";
import userReducer from "./userReducer";

export default combineReducers({
  medicines: medicineReducer,
  users: userReducer,
});
