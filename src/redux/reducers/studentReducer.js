import { types } from "../types/types";

const initialState = {
  err: false,
  message: "",
  studentsAll: [],
  data: [],
  listShow: "Courses",
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
    case types.studentGetMyCourses:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        data: action.payload.data,
        listShow: "Courses",
      };
    case types.studentGetDocumentsByCourse:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        data: action.payload.data,
        listShow: "Documents",
      };
    default:
      return state;
  }
};
