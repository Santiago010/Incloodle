import api from "../../api/api";
import { types } from "../types/types";

export const StartGetProfile = (jwt) => {
  return async (dispatch) => {
    try {
      const profilesTeachers = api.get("/api/teacher", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      const profilesStudents = api.get("/api/student", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      const [profilesTeachersRes, profilesStudentsRes] = await Promise.all([
        profilesTeachers,
        profilesStudents,
      ]);

      const newStudents = profilesStudentsRes.data.data.map((el) => ({
        id: el.student_id,
        ...el,
      }));
      const newTeachers = profilesTeachersRes.data.data.map((el) => ({
        id: el.teacher_id,
        ...el,
      }));

      dispatch(GetProfile([...newStudents, ...newTeachers]));
    } catch (err) {}
  };
};

const GetProfile = (profiles) => ({
  type: types.profileGet,
  payload: profiles,
});

export const ChosenProfile = (profile) => ({
  type: types.profileChoose,
  payload: profile,
});

export const StartAddProfile = (jwt, values, rol) => {
  return async (dispatch) => {
    try {
      if (rol === 1) {
        let { data } = await api.post("/api/teacher", values, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
        console.log(data);
        dispatch(AddProfile(data.err, data.message, values));
      } else if (rol === 2) {
        let { data } = await api.post("/api/student", values, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
        console.log(data);
        dispatch(AddProfile(data.err, data.message, values));
      }
    } catch (error) {
      console.error(error);
    }
  };
};

const AddProfile = (err, message, values) => ({
  type: types.profilesAdd,
  payload: { err, message, values },
});

export const StartEditProfile = (jwt, values, rol, id) => {
  return async (dispatch) => {
    try {
      if (rol === 1) {
        let { data } = await api.post(`/api/teacher/${id}`, values, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
        console.log(data);
        // dispatch(EditProfile(data.err, data.message, values));
      } else if (rol === 2) {
        let { data } = await api.post(`/api/student/${id}`, values, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
        console.log(data);
        // dispatch(EditProfile(data.err, data.message, values));
      }
    } catch (error) {}
  };
};

// const EditProfile = (err, message, values) => ({
//   type: types.profileEdit,
//   payload: { err, message, values },
// });

export const StartDeleteProfile = (jwt, id, rol, rut) => {
  return async (dispatch) => {
    try {
      if (rol === 1) {
        let { data } = await api.delete(`/api/teacher/${id}`, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
        console.log(data);
        dispatch(DeleteProfile(rut));
      } else if (rol === 2) {
        let { data } = await api.delete(`/api/student/${id}`, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
        dispatch(DeleteProfile(rut));
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
};

const DeleteProfile = (rut) => ({
  type: types.profileDelete,
  payload: rut,
});
