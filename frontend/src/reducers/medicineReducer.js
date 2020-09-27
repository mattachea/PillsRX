import { v4 as uuid } from "uuid";
import {
  GET_MEDICINES,
  ADD_MEDICINE,
  // DELETE_MEDICINE,
  TOGGLE_CHECKBOX,
} from "../actions/types";

const initialState = [
  {
    id: uuid(),
    name: "Advsdfhsfil",
    dosage: "2 pills",
    time: "8 am",
    completed: false,
  },
  {
    id: uuid(),
    name: "Peepeepoopoo",
    dosage: "3 pills",
    time: "8 pm",
    completed: false,
  },
  {
    id: uuid(),
    name: "Advsdfhsfil",
    dosage: "2 pills",
    time: "8 am",
    completed: false,
  },
  {
    id: uuid(),
    name: "fadsffasdfhsfil",
    dosage: "2 pills",
    time: "8 am",
    completed: false,
  },
  {
    id: uuid(),
    name: "asdfsddafsdfhsfil",
    dosage: "2 pills",
    time: "8 am",
    completed: false,
  },
  {
    id: uuid(),
    name: "Aasdfasdfasdfhsfil",
    dosage: "2 pills",
    time: "8 am",
    completed: false,
  },
  {
    id: uuid(),
    name: "Advsdfhsfil",
    dosage: "2 pills",
    time: "8 am",
    completed: false,
  },
  {
    id: uuid(),
    name: "Advsdfhsfil",
    dosage: "2 pills",
    time: "8 am",
    completed: false,
  },
];

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MEDICINES:
      return {
        ...state,
      };

    case ADD_MEDICINE:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          dosage: action.dosage,
          time: action.time,
          comppleted: action.completed,
        },
      ];

    case TOGGLE_CHECKBOX:
      return state.map((medicine) =>
        medicine.id === action.id
          ? { ...medicine, completed: !medicine.completed }
          : medicine
      );
    default:
      return state;
  }
}
