import { types } from "../types/types";

const initialState = {
  err: null,
  message: null,
  data: [],
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
  document: {},
};

export const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.teacherGetCourse:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        data: action.payload.data,
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
        data: action.payload.data,
      };
    case types.teacherChooseDocument:
      return {
        ...state,
        document: action.payload,
      };
    case types.teacherGetStudentByCourse:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        data: action.payload.data,
      };
    case types.teacherChooseStudent:
      return {
        ...state,
        student: action.payload,
      };
    case types.teacherFilterCourse:
      return {
        ...state,
        data: state.data.filter((course) =>
          course.name.includes(action.payload)
        ),
      };
    case types.teacherGetPedingExam:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        data: action.payload.data,
      };
    default:
      return state;
  }
};
