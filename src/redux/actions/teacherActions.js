import api from "../../api/api";
import { types } from "../types/types";
import { StartLoading, StopLoading } from "../actions/uiActions";

export const StartGetCourses = (jwt) => {
  return async (dispatch) => {
    dispatch(StartLoading());
    let dataJwt = JSON.parse(atob(jwt.split(".")[1]));
    try {
      const { data } = await api.get(
        `/api/course/${dataJwt.teacher_id}/teacher`,
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      dispatch(GetCourses(data));
      dispatch(StopLoading());
    } catch (error) {
      console.error(error);
    }
  };
};

const GetCourses = (data) => ({
  type: types.teacherGetCourse,
  payload: data,
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
  type: types.teacherGetDocumentsByCourse,
  payload: data,
});

export const ChooseDocument = (document) => ({
  type: types.teacherChooseDocument,
  payload: document,
});

export const StartDeleteDocumentByCourse = (
  jwt,
  documentType,
  documentId,
  courseId
) => {
  return async (dispatch) => {
    try {
      if (documentType === 0) {
        let { data } = await api.delete(`/api/document/${documentId}`, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
        console.log(data);
      } else if (documentType === 1) {
        let { data } = await api.delete(`/api/exam/${documentId}`, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
        console.log(data);
      }
      dispatch(startGetDocumentsByCourse(jwt, courseId));
    } catch (error) {
      console.error(error);
    }
  };
};

export const StartAddDocumentsByCourse = (
  jwt,
  formData,
  type,
  values,
  courseId
) => {
  return async (dispatch) => {
    try {
      if (type === 0) {
        let { data } = await api.post("/api/document", formData, {
          params: {
            name: values.name,
            course_id: courseId,
          },
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(data);
      } else if (type === 1) {
        let { data } = await api.post("/api/exam", formData, {
          params: {
            name: values.name,
            course_id: courseId,
            num_of_questions: values.numberQuestions,
          },
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(data);
      }
      dispatch(startGetDocumentsByCourse(jwt, courseId));
    } catch (error) {
      console.error(error);
    }
  };
};

export const StartGetStudentByCourse = (jwt, courseId) => {
  return async (dispatch) => {
    try {
      dispatch(StartLoading());
      let { data } = await api.get("api/enrollment/studentByCourse", {
        params: {
          course_id: courseId,
        },
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log(data);
      dispatch(GetStudentByCourse(data));
      dispatch(StopLoading());
    } catch (error) {}
  };
};

const GetStudentByCourse = (data) => ({
  type: types.teacherGetStudentByCourse,
  payload: data,
});

export const ChooseStudent = (student) => ({
  type: types.teacherChooseStudent,
  payload: student,
});

export const StartAddStudentToACourse = (jwt, values) => {
  return async (dispatch) => {
    try {
      const { data } = await api.post(
        "/api/enrollment",
        {
          course_id: values.courseId,
          student_id: values.studentId,
        },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      console.log(data);
      dispatch(StartGetStudentByCourse(jwt, values.courseId));
    } catch (error) {
      console.error(error);
    }
  };
};

export const StartDeleteStudentFromACourse = (jwt, student) => {
  return async (dispatch) => {
    try {
      const { data } = await api.delete("/api/enrollment", {
        params: {
          course_id: student.course_id,
          student_id: student.student_id,
        },
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log(data);
      dispatch(StartGetStudentByCourse(jwt, student.course_id));
    } catch (error) {
      console.error(error);
    }
  };
};

export const StartFilterCourse = (jwt, name) => {
  return (dispatch) => {
    if (name === "") {
      dispatch(StartGetCourses(jwt));
    } else {
      dispatch(FilterCourse(name));
    }
  };
};
const FilterCourse = (name) => ({
  type: types.teacherFilterCourse,
  payload: name,
});
