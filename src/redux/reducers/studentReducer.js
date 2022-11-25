import { types } from "../types/types";

const initialState = {
  err: false,
  message: "",
  studentsAll: [],
  data: [],
  exam: {
    course_id: 0,
    createdAt: "",
    exam_id: 0,
    finish_date: null,
    id: 0,
    init_date: null,
    is_pendient: 0,
    link: "",
    name: "",
    num_of_questions: 0,
    score: null,
    type: 0,
    updatedAt: null,
  },
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
      };
    case types.studentGetDocumentsByCourse:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        data: action.payload.data,
      };
    case types.studentChooseExam:
      return {
        ...state,
        exam: action.payload,
      };
    default:
      return state;
  }
};
