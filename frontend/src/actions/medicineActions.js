import axios from "axios";

import {
  GET_MEDICINES,
  ADD_MEDICINE,
  DELETE_MEDICINE,
  TOGGLE_COMPLETE,
  LOADING,
} from "./types";

export const getMedicines = () => (dispatch) => {
  dispatch(setLoading());
  axios.get("/api/medicines").then((res) =>
    dispatch({
      type: GET_MEDICINES,
      payload: res.data,
    })
  );
};

export const addMedicine = (payload) => {
  return {
    type: ADD_MEDICINE,
    payload,
  };
};

export const toggleComplete = (_id) => {
  return {
    type: TOGGLE_COMPLETE,
    _id,
  };
};

export const deleteMedicine = (_id) => {
  return {
    type: DELETE_MEDICINE,
    _id,
  };
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
