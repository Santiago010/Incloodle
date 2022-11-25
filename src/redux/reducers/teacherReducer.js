import { types } from "../types/types";

const initialState = {
  err: null,
  message: null,
  course: {
    course_id: 0,
    name: "",
    period: "",
    final_score: null,
    teacher_id: 0,
    createdAt: "",
    updatedAt: null,
  },
  student: {
    enrollment_id: null,
    course_id: null,
    student_id: null,
    name: "",
    period: "",
    final_score: null,
    teacher_id: null,
    createdAt: "",
    updatedAt: null,
  },
  conten: {},
  dataCourses: [],
  dataDocuments: [],
  dataStudentsByCourse: [],
  dataPedingExam: [],
  dataAnswerExam: [],
};

export const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.teacherGetCourse:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        dataCourses: action.payload.data,
      };
    case types.teacherChooseCourse:
      return {
        ...state,
        course: action.payload,
      };
    case types.teacherGetDocumentsByCourse:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        dataDocuments: action.payload.data,
      };
    case types.teacherChooseDocument:
      return {
        ...state,
        conten: action.payload,
      };
    case types.teacherGetStudentByCourse:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        dataStudentsByCourse: action.payload.data,
      };
    case types.teacherChooseStudent:
      return {
        ...state,
        student: action.payload,
      };
    case types.teacherFilterCourse:
      return {
        ...state,
        dataCourses: state.dataCourses.filter((course) =>
          course.name.includes(action.payload)
        ),
      };
    case types.teacherGetPedingExam:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        dataPedingExam: action.payload.data,
      };
    case types.teacherGetAnswerExam:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        dataAnswerExam: action.payload.data,
      };
    default:
      return state;
  }
};
