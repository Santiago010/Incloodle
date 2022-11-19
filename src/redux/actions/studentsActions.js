import api from "../../api/api";
import { types } from "../types/types";

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
