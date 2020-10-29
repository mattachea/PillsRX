import { set } from "mongoose";
import {
  GET_USERS,
  ADD_USER,
  LOGOUT_USER,
  LOGIN_USER,
  DELETE_USER,
  LOADING,
} from "../actions/types";

const initialState = {
  usersArray: [],
  user: null,
  isAuthenticated: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersArray: [action.payload, ...state.usersArray],
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
      };
    // case GET_USERS:
    //   return {
    //     ...state,
    //     usersArray: action.payload,
    //     loading: false,
    //   };
    // case DELETE_USER:
    //   return {
    //     ...state,
    //     usersArray: state.usersArray.filter(
    //       (user) => user._id !== action.payload
    //     ),
    //   };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
