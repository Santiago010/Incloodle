import api from "../../api/api";
import { types } from "../types/types";
import moment from "moment";
import {
  closeModalChangePass,
  ResetPass,
  StartLoading,
  StopLoading,
} from "./uiActions";

export const StartGetAllStudents = (jwt) => {
  return async (dispatch) => {
    try {
      const { data } = await api.get("/api/student", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
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
      const examByCourse = api.get(`/api/student/${courseId}/exams-pendient`, {
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

export const StartSendExamAnswers = (exam_id, answers, jwt, init_date) => {
  return async (dispatch) => {
    try {
      const { data } = await api.post(
        `api/answer`,
        {
          exam_id,
          answers,
          init_date,
        },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
};

export const StartResetPassStudent = (jwt, values) => {
  return async (dispatch) => {
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
      dispatch(ResetPass(data.message));
      setTimeout(() => {
        dispatch(closeModalChangePass());
      }, 4000);
    } catch (error) {
      dispatch(ResetPass(error.response.data.message));
    }
  };
};

export const StartGetAllDocuments = (jwt) => {
  return async (dispatch) => {
    dispatch(StartLoading());
    try {
      dispatch(StartLoading());
      let { data } = await api.get("/api/student/allDocuments", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      dispatch(GetAllDocuments(data));
      dispatch(StopLoading());
    } catch (error) {
      console.error(error);
    }
  };
};

const GetAllDocuments = (data) => ({
  type: types.studentGetAllDocuments,
  payload: data,
});

export const StartGetAllExam = (jwt) => {
  return async (dispatch) => {
    try {
      dispatch(StartLoading());
      let { data } = await api.get("/api/student/allExams", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      dispatch(GetAllExam(data));
      dispatch(StopLoading());
    } catch (error) {
      console.error(error);
    }
  };
};

const GetAllExam = (data) => ({
  type: types.studentGetAllExam,
  payload: data,
});

export const StartGetExamsCorrected = (jwt, courseId) => {
  return async (dispatch) => {
    try {
      dispatch(StartLoading());
      let { data } = await api.get(`/api/student/${courseId}/exams-rated`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      dispatch(GetExamsCorrected(data));
      dispatch(StopLoading());
    } catch (error) {
      console.error(error);
    }
  };
};

const GetExamsCorrected = (data) => ({
  type: types.studentGetExamsCorrected,
  payload: data,
});

export const StartGetAnswersCorrections = (jwt, id) => {
  return async (dispatch) => {
    try {
      dispatch(StartLoading());
      let { data } = await api.get(`/api/answer/${id}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      dispatch(StopLoading());
      dispatch(GetAnswersCorrections(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const GetAnswersCorrections = (data) => ({
  type: types.studentGetAnswersCorrections,
  payload: data,
});
