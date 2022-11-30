import { types } from "../types/types";

const initialState = {
  err: false,
  message: "",
  studentsAll: [],
  exam: {},
  dataCourses: [],
  dataDocuments: [],
  dataExam: [],
  dataAnswers: [],
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
        dataCourses: action.payload.data,
      };
    case types.studentGetDocumentsByCourse:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        dataDocuments: action.payload.data,
      };
    case types.studentChooseExam:
      return {
        ...state,
        exam: action.payload,
      };
    case types.studentGetAllDocuments:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        dataDocuments: action.payload.data,
      };
    case types.studentGetAllExam:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        dataExam: action.payload.data,
      };
    case types.studentGetExamsCorrected:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        dataExam: action.payload.data,
      };
    case types.studentGetAnswersCorrections:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        dataAnswers: action.payload.data,
      };
    default:
      return state;
  }
};
