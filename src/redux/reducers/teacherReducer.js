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
  document: {
    document_id: 0,
    name: "",
    link: "",
  },
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
    default:
      return state;
  }
};
