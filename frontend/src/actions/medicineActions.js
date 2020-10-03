import axios from "axios";

import {
  GET_MEDICINES,
  ADD_MEDICINE,
  DELETE_MEDICINE,
  TOGGLE_COMPLETED,
  LOADING,
} from "./types";

export const getMedicines = () => (dispatch) => {
  dispatch(setLoading());
  axios.get("/api/medicines").then((res) => {
    dispatch({
      type: GET_MEDICINES,
      payload: res.data,
    });
  });
};

export const addMedicine = (newMedicine) => (dispatch) => {
  axios.post("/api/medicines", newMedicine).then((res) =>
    dispatch({
      type: ADD_MEDICINE,
      payload: res.data,
    })
  );
};

export const deleteMedicine = (id) => (dispatch) => {
  axios.delete(`/api/medicines/${id}`).then((res) =>
    dispatch({
      type: DELETE_MEDICINE,
      payload: id,
    })
  );
};

export const toggleCompleted = (id, completed) => (dispatch) => {
  axios
    .post(`api/medicines/completed/${id}`, { completed: completed })
    .then((res) => {
      dispatch({
        type: TOGGLE_COMPLETED,
        payload: { id: id, completed: completed },
      });
    });
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
