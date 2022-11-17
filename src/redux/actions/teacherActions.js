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
