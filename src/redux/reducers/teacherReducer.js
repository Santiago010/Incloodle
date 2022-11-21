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
  listShow: "Courses",
};

export const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.teacherGetCourse:
      return {
        ...state,
        err: false,
        message: "found succesfully",
        data: action.payload,
        listShow: "Courses",
      };
    case types.teacherChooseCourse:
      return {
        ...state,
        course: action.payload,
      };
    case types.teacherGetDocumentsByCourse:
      return {
        ...state,
        err: false,
        message: "found succesfully",
        data: action.payload,
        listShow: "Documents",
      };
    case types.teacherChooseDocument:
      return {
        ...state,
        document: action.payload,
      };
    case types.teacherGetStudentByCourse:
      return {
        ...state,
        err: false,
        message: "found succesfully",
        data: action.payload,
        listShow: "Students",
      };
    case types.teacherChooseStudent:
      return {
        ...state,
        student: action.payload,
      };
    default:
      return state;
  }
};
