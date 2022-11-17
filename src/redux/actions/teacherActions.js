import api from "../../api/api";
import { types } from "../types/types";

export const StartGetCourses = (jwt) => {
  return async (dispatch) => {
    try {
      const { data } = await api.get("/api/course", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log(data);
      dispatch(GetCourses(data.data));
    } catch (error) {
      console.error(error);
    }
  };
};

const GetCourses = (courses) => ({
  type: types.teacherGetCourse,
  payload: courses,
});

export const ChoosenCourse = (course) => ({
  type: types.teacherChooseCourse,
  payload: course,
});

export const StartAddCourse = (jwt, values, idTeacher) => {
  return async (dispatch) => {
    try {
      const { data } = await api.post(
        "api/course",
        { ...values, teacher_id: idTeacher },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      console.log(data);
      dispatch(StartGetCourses(jwt));
    } catch (error) {
      console.error(error);
    }
  };
};

export const StartEditCourse = (jwt, values) => {
  return async (dispatch) => {
    try {
      let { data } = await api.put(
        `/api/course/${values.course_id}`,
        {
          name: values.name,
          period: values.period,
        },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      console.log(data);
      dispatch(StartGetCourses(jwt));
    } catch (error) {
      console.error(error);
    }
  };
};

export const StartDeleteCourse = (jwt, idCourse) => {
  return async (dispatch) => {
    try {
      let { data } = await api.delete(`/api/course/${idCourse}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log(data);
      dispatch(StartGetCourses(jwt));
    } catch (error) {
      console.error(error);
    }
  };
};

export const startGetDocumentsByCourse = (jwt, courseId) => {
  return async (dispatch) => {
    try {
      let { data } = await api.get(`/api/document/${courseId}/course`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log(data);
      dispatch(GetDocumentsByCourse(data.data));
    } catch (error) {
      console.error(error);
    }
  };
};

const GetDocumentsByCourse = (documents) => ({
  type: types.teacherGetDocumentsByCourse,
  payload: documents,
});

export const ChooseDocument = (document) => ({
  type: types.teacherChooseDocument,
  payload: document,
});

export const StartDeleteDocumentByCourse = (jwt, documentId, courseId) => {
  return async (dispatch) => {
    try {
      let { data } = await api.delete(`/api/document/${documentId}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log(data);
      dispatch(startGetDocumentsByCourse(jwt, courseId));
    } catch (error) {
      console.error(error);
    }
  };
};

export const StartAddDocumentsByCourse = (
  jwt,
  formData,
  nameNewDocument,
  courseId
) => {
  return async (dispatch) => {
    try {
      let { data } = await api.post("/api/document", formData, {
        params: {
          name: nameNewDocument,
          course_id: courseId,
        },
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(data);
      dispatch(startGetDocumentsByCourse(jwt, courseId));
    } catch (error) {
      console.error(error);
    }
  };
};
