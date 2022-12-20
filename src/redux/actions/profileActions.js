import api from "../../api/api";
import { types } from "../types/types";
import { StartLoading, StopLoading } from "../actions/uiActions";
import { FiltersEmptyFilter } from "../../helpers/FiltersEmptyFilter";

export const StartGetProfile = (jwt) => {
  return async (dispatch) => {
    try {
      dispatch(FiltersEmptyFilter());
      dispatch(StartLoading());
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

      dispatch(
        GetProfile({
          err: false,
          message: "Teachers and Students found succesfully",
          data: [...newStudents, ...newTeachers],
        })
      );
      dispatch(StopLoading());
    } catch (err) {}
  };
};

const GetProfile = (data) => ({
  type: types.profileGet,
  payload: data,
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
        dispatch(StartGetProfile(jwt));
      } else if (rol === 2) {
        let { data } = await api.post("/api/student", values, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
        dispatch(StartGetProfile(jwt));
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
        dispatch(StartGetProfile(jwt));
      } else if (rol === 2) {
        let { data } = await api.delete(`/api/student/${id}`, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
        dispatch(StartGetProfile(jwt));
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const StartFilterProfileByRol = (jwt, rol) => {
  return (dispatch) => {
    if (rol === "") {
      dispatch(FiltersEmptyFilter());
      dispatch(StartGetProfile(jwt));
    } else {
      dispatch(FilterProfileByRol(rol));
    }
  };
};

const FilterProfileByRol = (rol) => ({
  type: types.profileFilterByRol,
  payload: rol,
});

export const StartFilterProfileByName = (jwt, name) => {
  return (dispatch) => {
    if (name === "") {
      dispatch(StartGetProfile(jwt));
    } else {
      dispatch(FilterProfileByName(name));
    }
  };
};

const FilterProfileByName = (name) => ({
  type: types.profileFilterByName,
  payload: name,
});

export const StartGetPeriods = (jwt) => {
  return async (dispatch) => {
    dispatch(StartLoading());
    try {
      const { data } = await api.get("/api/period", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      dispatch(GetPeriods(data));
      dispatch(StopLoading());
    } catch (error) {
      console.error(error);
    }
  };
};

const GetPeriods = (data) => ({
  type: types.profileGetPeriods,
  payload: data,
});

export const StartDeletePeriod = (jwt, id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.delete(`/api/period/${id}`);
      dispatch(StartGetPeriods());
    } catch (error) {}
  };
};

export const StartAddPeriod = (jwt, name) => {
  return async (dispatch) => {
    try {
      const { data } = await api.post(
        "/api/period/",
        {
          name,
        },
        { headers: { Authorization: `Bearer ${jwt}` } }
      );
      dispatch(StartGetPeriods());
    } catch (error) {
      dispatch(StopLoading());
      console.error(error);
    }
  };
};

export const StartUpdatePeriod = (jwt, name, id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.put(
        `/api/period/${id}`,
        {
          name,
        },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );

      dispatch(StartGetPeriods());
    } catch (error) {}
  };
};

export const StartGetCareers = (jwt) => {
  return async (dispatch) => {
    try {
      const { data } = await api.get("/api/career", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      dispatch(GetCareers(data));
      dispatch(StopLoading());
    } catch (error) {
      console.error(error);
    }
  };
};

const GetCareers = (data) => ({
  type: types.profileGetCareers,
  payload: data,
});

export const StartDeleteCareer = (jwt, id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.delete(`/api/career/${id}`);
      dispatch(StartGetPeriods());
      dispatch(StartGetCareers());
    } catch (error) {}
  };
};

export const StartUpdateCareer = (jwt, name, id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.put(
        `/api/career/${id}`,
        {
          name,
        },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );

      dispatch(StartGetCareers());
    } catch (error) {}
  };
};

export const ChoosenPeriod = (data) => ({
  type: types.profileChoosenPeriod,
  payload: data,
});
export const ChoosenCareer = (data) => ({
  type: types.profileChoosenCareer,
  payload: data,
});

export const StartAddCareer = (jwt, name) => {
  return async (dispatch) => {
    try {
      const { data } = await api.post(
        "/api/career/",
        {
          name,
        },
        { headers: { Authorization: `Bearer ${jwt}` } }
      );
      dispatch(StartGetCareers());
    } catch (error) {
      dispatch(StopLoading());
      console.error(error);
    }
  };
};
