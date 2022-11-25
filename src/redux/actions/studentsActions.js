import api from "../../api/api";
import { types } from "../types/types";
import { StartLoading, StopLoading } from "./uiActions";

export const StartGetAllStudents = (jwt) => {
  return async (dispatch) => {
    try {
      const { data } = await api.get("/api/student", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log(data);
      dispatch(GetAllStudents(data.data));
    } catch (error) {
      console.error(error);
    }
  };
};

const GetAllStudents = (students) => ({
  type: types.studentGetAllStudents,
  payload: students,
});

export const StartGetMyCourses = (jwt) => {
  return async (dispatch) => {
    try {
      dispatch(StartLoading());
      const { data } = await api.get("/api/student/courseByStudent", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      dispatch(GetMyCourses(data));
      dispatch(StopLoading());
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
};

const GetMyCourses = (data) => ({
  type: types.studentGetMyCourses,
  payload: data,
});

export const startGetDocumentsByCourse = (jwt, courseId) => {
  return async (dispatch) => {
    dispatch(StartLoading());
    try {
      const documentsByCourse = api.get(`/api/document/${courseId}/course`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      const examByCourse = api.get(`/api/exam/${courseId}/course`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      const [documentsByCourseRes, examByCourseRes] = await Promise.all([
        documentsByCourse,
        examByCourse,
      ]);

      const newDocumentsByCourse = documentsByCourseRes.data.data.map((el) => ({
        id: el.document_id,
        ...el,
      }));
      const newExamByCourse = examByCourseRes.data.data.map((el) => ({
        id: el.exam_id,
        ...el,
      }));
      dispatch(
        GetDocumentsByCourse({
          err: false,
          message: "Documents and Exam found succesfully!",
          data: [...newDocumentsByCourse, ...newExamByCourse],
        })
      );
      dispatch(StopLoading());
    } catch (error) {
      console.error(error);
    }
  };
};

const GetDocumentsByCourse = (data) => ({
  type: types.studentGetDocumentsByCourse,
  payload: data,
});

export const ChoosenExam = (data) => ({
  type: types.studentChooseExam,
  payload: data,
});

export const StartSendExamAnswers = (exam_id, answers, jwt) => {
  return async (dispatch) => {
    try {
      const { data } = await api.post(
        `api/answer`,
        {
          exam_id,
          answers,
        },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
};

export const StartResetPassStudent = (jwt, values) => {
  return async () => {
    try {
      let { data } = await api.post(
        "/api/student/reset-password",
        {
          currentPassword: values.passCurrent,
          newPassword: values.passNew,
        },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
};
