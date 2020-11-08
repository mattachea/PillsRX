import {
  // GET_USERS,
  ADD_USER,
  LOGOUT_USER,
  LOGIN_USER,
  // DELETE_USER,
  AUTH_ERROR,
  LOADING_USER,
} from "../actions/types";

const initialState = {
  usersArray: [],
  user: null,
  isAuthenticated: false,
  loading: false,
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
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
        error: "",
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
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

    default:
      return state;
  }
}
