import axios from "axios";
import { GET_USERS, ADD_USER, DELETE_USER } from "./types";

export const getUsers = () => (dispatch) => {
  axios
    .get("/api/users")
    .then((res) => {
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const addUser = (newUser) => (dispatch) => {
  axios
    .post("/api/users", newUser)
    .then((res) => {
      dispatch({
        type: ADD_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("there was an error");
      console.log(err);
    });
};

export const deleteUser = (id) => (dispatch) => {
  axios
    .delete(`/api/users/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_USER,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
