import {
  GET_MEDICINES,
  ADD_MEDICINE,
  // DELETE_MEDICINE,
  TOGGLE_CHECKBOX,
} from "./types";

export const getMedicines = () => {
  return {
    type: GET_MEDICINES,
  };
};

export const addMedicine = () => {
  return {
    type: ADD_MEDICINE,
  };
};

export const toggleCheckbox = (id) => {
  return {
    type: TOGGLE_CHECKBOX,
    id,
  };
};
