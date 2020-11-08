import axios from "axios";

import {
  ADD_USER,
  LOGOUT_USER,
  LOGIN_USER,
  LOADING_USER,
  AUTH_ERROR,
  // GET_USERS,
  // DELETE_USER,
} from "../actions/types";

export const login = (user, cb) => (dispatch) => {
  dispatch(setLoading());
  axios
    .get("/api/users/login", { params: user, withCredentials: true })
    .then((res) => {
      console.log(res);
      dispatch({
        type: LOGIN_USER,
        payload: res.data,
      });
      cb();
    })
    .catch((err) => {
      console.log("Login error: " + err);
      dispatch(setError("Invalid login"));
    });
};

export const logout = () => (dispatch) => {
  console.log("logging out");
  dispatch(setLoading());
  axios
    .get("/api/users/logout", { withCredentials: true })
    .then((res) => {
      console.log(res);
      dispatch({
        type: LOGOUT_USER,
      });
    })
    .catch((err) => {
      console.log("Logout error: " + err);
      dispatch(setError("Unable to logout"));
    });
};

export const addUser = (newUser) => (dispatch) => {
  dispatch(setLoading());
  axios
    .post("/api/users/register", newUser)
    .then((res) => {
      dispatch({
        type: ADD_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("AddUser error: " + err);
      dispatch(setError("Unable to add user"));
    });
};
export const setLoading = () => {
  return {
    type: LOADING_USER,
  };
};
export const setError = (message) => {
  return {
    type: AUTH_ERROR,
    payload: message,
  };
};
// export const getUsers = () => (dispatch) => {
//   axios
//     .get("/api/users")
//     .then((res) => {
//       dispatch({
//         type: GET_USERS,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       console.log("getUsers error: " + err);
//       dispatch(setError("Unable to get users"));
//     });
// };
// export const deleteUser = (id) => (dispatch) => {
//   axios
//     .delete(`/api/users/${id}`)
//     .then((res) => {
//       dispatch({
//         type: DELETE_USER,
//         payload: id,
//       });
//     })
//     .catch((err) => {
//       console.log("deleteUsers error: " + err);
//       dispatch(setError("Unable to delete user"));
//     });
// };
