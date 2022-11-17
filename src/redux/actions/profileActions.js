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

export const ChoosenProfile = (profile) => ({
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
        dispatch(StartGetProfile(jwt));
      } else if (rol === 2) {
        let { data } = await api.post("/api/student", values, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
        dispatch(StartGetProfile(jwt));
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const StartEditProfile = (jwt, values) => {
  return async (dispatch) => {
    try {
      if (values.rol === 1) {
        let { data } = await api.put(
          `/api/teacher/${values.id}`,
          {
            name: values.name,
            rut: values.rut,
            password: values.password,
          },
          {
            headers: { Authorization: `Bearer ${jwt}` },
          }
        );
        console.log(data);
        dispatch(StartGetProfile(jwt));
      } else if (values.rol === 2) {
        let { data } = await api.put(
          `/api/student/${values.id}`,
          {
            name: values.name,
            rut: values.rut,
            password: values.password,
          },
          {
            headers: { Authorization: `Bearer ${jwt}` },
          }
        );
        console.log(data);
        dispatch(StartGetProfile(jwt));
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const StartDeleteProfile = (jwt, id, rol) => {
  return async (dispatch) => {
    try {
      if (rol === 1) {
        let { data } = await api.delete(`/api/teacher/${id}`, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
        console.log(data);
        dispatch(StartGetProfile(jwt));
      } else if (rol === 2) {
        let { data } = await api.delete(`/api/student/${id}`, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
        console.log(data);
        dispatch(StartGetProfile(jwt));
      }
    } catch (error) {
      console.error(error);
    }
  };
};
