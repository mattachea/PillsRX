// import { v4 as uuid } from "uuid";
import {
  GET_MEDICINES,
  ADD_MEDICINE,
  DELETE_MEDICINE,
  LOADING,
  TOGGLE_COMPLETE,
} from "../actions/types";

const initialState = {
  medicinesArray: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MEDICINES:
      return {
        ...state,
        medicinesArray: action.payload,
        loading: false,
      };

    case ADD_MEDICINE:
      return {
        ...state,
        medicinesArray: [action.payload, ...state.medicinesArray],
      };

    case DELETE_MEDICINE:
      return {
        ...state,
        medicinesArray: state.medicinesArray.filter(
          (medicine) => medicine._id !== action._id
        ),
      };

    case TOGGLE_COMPLETE:
      return state.map((medicine) =>
        medicine.id === action.id
          ? { ...medicine, completed: !medicine.completed }
          : medicine
      );

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
