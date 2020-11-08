import {
  GET_MEDICINES,
  ADD_MEDICINE,
  DELETE_MEDICINE,
  LOADING_MEDICINE,
  TOGGLE_COMPLETED,
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
          (medicine) => medicine._id !== action.payload
        ),
      };

    case TOGGLE_COMPLETED:
      return {
        ...state,
        medicinesArray: state.medicinesArray.map((medicine) =>
          medicine._id === action.payload.id
            ? { ...medicine, completed: !action.payload.completed }
            : medicine
        ),
      };

    case LOADING_MEDICINE:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
