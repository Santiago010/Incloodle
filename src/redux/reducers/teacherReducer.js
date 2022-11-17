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
};

export const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.teacherGetCourse:
      return {
        ...state,
        err: false,
        message: "found succesfully",
        data: action.payload,
      };
    case types.teacherChooseCourse:
      return {
        ...state,
        course: action.payload,
      };
    default:
      return state;
  }
};
