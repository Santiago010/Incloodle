import swal from "sweetalert";
import api from "../../api/api";
import { types } from "../types/types";
import { StartLoading, StopLoading } from "../actions/uiActions";

export const StartLogin = (values) => {
  return async (dispatch) => {
    try {
      dispatch(StartLoading());
      const { data } = await api.post("/auth", values);
      if (data?.err) {
        swal({
          title: "Atención",
          icon: "error",
          text: data?.message,
          buttons: false,
          timer: 3000,
        });
      } else {
        localStorage.setItem("jwt", data?.jwt);
        dispatch(Login(data));
        dispatch(setIsAuth(true));
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(StopLoading());
    }
  };
};

export const Login = (data) => ({
  type: types.authLogin,
  payload: data,
});

export const StartLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("jwt");
    dispatch(Logout());
    dispatch(setIsAuth(false));
  };
};

const Logout = () => ({
  type: types.authLogout,
});

export const setIsAuth = (isAuth) => ({
  type: types.isAuth,
  isAuth,
});
