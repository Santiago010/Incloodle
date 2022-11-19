import { types } from "../types/types";

const initialState = {
  err: null,
  message: null,
  studentsAll: [],
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.studentGetAllStudents:
      return {
        ...state,
        err: false,
        message: "found succesfully",
        studentsAll: action.payload,
      };

    default:
      return state;
  }
};
