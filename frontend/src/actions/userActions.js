import axios from "axios";
import {
  GET_USERS,
  ADD_USER,
  LOGOUT_USER,
  LOGIN_USER,
  DELETE_USER,
  LOADING,
} from "../actions/types";

export const login = (user) => (dispatch) => {
  dispatch(setLoading());
  console.log(user);
  axios
    .post("/api/users/login", user)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: LOGIN_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err + ": failed login"));
};

// export const logout = () => (dispatch) => {
//   dispatch(setLoading());
//   axios
//     .post("/api/users/logout")
//     .then((res) => {
//       dispatch({
//         type: LOGOUT_USER,
//         payload: res.data,
//       });
//     })
//     .catch((err) => console.log(err));
// };

export const addUser = (newUser) => (dispatch) => {
  axios
    .post("/api/users/register", newUser)
    .then((res) => {
      dispatch({
        type: ADD_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("AddUser error");
      console.log(err);
      throw err;
    });
};
export const setLoading = () => {
  return {
    type: LOADING,
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
//     .catch((err) => console.log(err));
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
//     .catch((err) => console.log(err));
// };
