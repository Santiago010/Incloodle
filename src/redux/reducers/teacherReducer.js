import { types } from "../types/types";

const initialState = {
  err: null,
  message: "",
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
  datapendingExam: [],
  dataAnswerExam: [],
  dataFiltered: [],
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
    case types.teacherGetpendingExam:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        datapendingExam: action.payload.data,
      };
    case types.teacherGetAnswerExam:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        dataAnswerExam: action.payload.data,
      };
    case types.teacherFilterCourse:
      return {
        ...state,
        dataFiltered: state.dataCourses.filter((course) =>
          course.name.toLowerCase().includes(action.payload)
        ),
      };
    case types.teacherFilterMaterial:
      return {
        ...state,
        dataFiltered: state.dataDocuments.filter((document) =>
          document.name.toLowerCase().includes(action.payload)
        ),
      };
    case types.teacherFilterStudent:
      return {
        ...state,
        dataFiltered: state.dataStudentsByCourse.filter((student) =>
          student.name.toLowerCase().includes(action.payload)
        ),
      };
    case types.teacherFilterExamPending:
      return {
        ...state,
        dataFiltered: state.datapendingExam.filter((exam) =>
          exam.exam_name.toLowerCase().includes(action.payload)
        ),
      };
    case types.filtersEmptyFilter:
      return {
        ...state,
        dataFiltered: [],
      };
    default:
      return state;
  }
};
