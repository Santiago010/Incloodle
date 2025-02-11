import api, { BASE_URL } from "../../api/api";
import { types } from "../types/types";
import {
  closeModalChangePass,
  ResetPass,
  StartLoading,
  StopLoading,
} from "../actions/uiActions";
import { FiltersEmptyFilter } from "../../helpers/FiltersEmptyFilter";
import swal from "sweetalert";

export const StartGetCourses = (jwt) => {
  return async (dispatch) => {
    dispatch(FiltersEmptyFilter());
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
      dispatch(StartGetCourses(jwt));
    } catch (error) {
      console.error(error);
    }
  };
};

export const startGetDocumentsByCourse = (jwt, courseId) => {
  return async (dispatch) => {
    try {
      dispatch(FiltersEmptyFilter());
      dispatch(StartLoading());
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
      } else if (documentType === 1) {
        let { data } = await api.delete(`/api/exam/${documentId}`, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
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
      } else if (type === 1) {
        let { data } = await api.post("/api/exam", formData, {
          params: {
            name: values.name,
            course_id: courseId,
            num_of_questions: values.numberQuestions,
            max_score: values.maxScore,
          },
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "multipart/form-data",
          },
        });
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
      dispatch(FiltersEmptyFilter());
      dispatch(StartLoading());
      let { data } = await api.get("api/enrollment/studentByCourse", {
        params: {
          course_id: courseId,
        },
        headers: { Authorization: `Bearer ${jwt}` },
      });
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
      dispatch(StartGetStudentWithoutCourse(jwt, values.courseId));
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
      dispatch(StartGetStudentByCourse(jwt, student.course_id));
    } catch (error) {
      console.error(error);
    }
  };
};

export const StartGetpendingExam = (jwt, courseId) => {
  return async (dispatch) => {
    try {
      dispatch(FiltersEmptyFilter());
      dispatch(StartLoading());
      let { data } = await api.get(`api/answer/${courseId}/exam`, {
        params: {
          course_id: courseId,
        },
        headers: { Authorization: `Bearer ${jwt}` },
      });
      dispatch(GetpendingExam(data));
      dispatch(StopLoading());
    } catch (error) {
      console.error(error);
    }
  };
};

export const GetpendingExam = (data) => ({
  type: types.teacherGetpendingExam,
  payload: data,
});

export const StartGetAnswerExam = (jwt, studentExamId) => {
  return async (dispatch) => {
    try {
      dispatch(StartLoading());
      let { data } = await api.get(`/api/answer/${studentExamId}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      dispatch(GetAnswerExam(data));
      dispatch(StopLoading());
    } catch (error) {
      console.error(error);
    }
  };
};

const GetAnswerExam = (data) => ({
  type: types.teacherGetAnswerExam,
  payload: data,
});

export const StartEvaluatingAnswer = (
  jwt,
  question,
  answerId,
  isCorrect,
  comment,
  score
) => {
  return async (dispatch) => {
    try {
      let { data } = await api.put(
        "/api/answer/rate-answer",
        { answer_id: answerId, is_correct: isCorrect, comment, score },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      swal({
        title: `${isCorrect === 1 ? "Correcta" : "Incorrecta"}`,
        icon: "success",
        text: `¡Pregunta :${question} corregida con exito!`,
        buttons: false,
        timer: 2000,
      });
    } catch (error) {
      console.error(error);
      swal({
        title: `Atención`,
        icon: "warning",
        text: `¡Debes dejar un comentario y un puntaje!`,
        buttons: false,
        timer: 3000,
      });
    }
  };
};

export const StartQualification = (jwt, score, studentExam_id) => {
  return async () => {
    try {
      let { data } = await api.post(
        `/api/answer/rate-exam`,
        {
          score,
          studentExam_id,
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

export const StartResetPassTeacher = (jwt, values) => {
  return async (dispatch) => {
    try {
      let { data } = await api.post(
        "/api/teacher/reset-password",
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

export const StartSetFinalScore = (jwt, course_id, student_id, final_score) => {
  return async (dispatch) => {
    try {
      let { data } = await api.post(
        "/api/course/final-score",
        {
          course_id,
          student_id,
          final_score,
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

export const StartFilterCourseByName = (jwt, name) => {
  return (dispatch) => {
    if (name === "") {
      dispatch(StartGetCourses(jwt));
    } else {
      dispatch(FilterCourseByName(name));
    }
  };
};

const FilterCourseByName = (name) => ({
  type: types.teacherFilterCourse,
  payload: name,
});

export const StartFilterMaterialByName = (jwt, name, id) => {
  return (dispatch) => {
    if (name === "") {
      dispatch(startGetDocumentsByCourse(jwt, id));
    } else {
      dispatch(FilterMaterialByName(name));
    }
  };
};

const FilterMaterialByName = (name) => ({
  type: types.teacherFilterMaterial,
  payload: name,
});

export const StartFilterStudentByName = (jwt, name, id) => {
  return (dispatch) => {
    if (name === "") {
      dispatch(StartGetStudentByCourse(jwt, id));
    } else {
      dispatch(FilterStudentByName(name));
    }
  };
};

const FilterStudentByName = (name) => ({
  type: types.teacherFilterStudent,
  payload: name,
});

export const StartFilterExamByName = (jwt, name, id) => {
  return (dispatch) => {
    if (name === "") {
      dispatch(StartGetpendingExam(jwt, id));
    } else {
      dispatch(FilterExamByName(name));
    }
  };
};

const FilterExamByName = (name) => ({
  type: types.teacherFilterExamPending,
  payload: name,
});

export const StartGetReport = (jwt, student_id, course_id) => {
  return async (dispatch) => {
    try {
      window.open(
        `${BASE_URL}/api/teacher/report/?student_id=${student_id}&course_id=${course_id}`
      );
    } catch (error) {
      console.error(error);
    }
  };
};

export const StartGetStudentWithoutCourse = (jwt, course) => {
  return async (dispatch) => {
    try {
      dispatch(StartLoading());
      const { data } = await api.get(
        `/api/enrollment/${course}/without-course`,
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      dispatch(GetStudentWithoutCourse(data));
      dispatch(StopLoading());
    } catch (error) {
      console.error(error);
      dispatch(StopLoading());
    }
  };
};

const GetStudentWithoutCourse = (data) => ({
  type: types.teacherGetStudentWithoutCourse,
  payload: data,
});

export const StartGetPeriodsAndCareers = (jwt) => {
  return async (dispatch) => {
    try {
      dispatch(StartLoading());
      const reqPeriods = api.get("/api/period", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      const reqCareers = api.get("/api/career", {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      const [resPeriod, resCareer] = await Promise.all([
        reqPeriods,
        reqCareers,
      ]);
      dispatch(GetPeriods(resPeriod.data));
      dispatch(GetCareers(resCareer.data));
    } catch (error) {
      console.error(error);
    }
  };
};

const GetPeriods = (data) => ({
  type: types.teacherGetPeriods,
  payload: data,
});

const GetCareers = (data) => ({
  type: types.teacherGetCareers,
  payload: data,
});
