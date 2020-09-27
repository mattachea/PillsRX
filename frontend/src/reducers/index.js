import { combineReducers } from "redux";
import medicineReducer from "./medicineReducer";

export default combineReducers({
  medicines: medicineReducer,
});
