import swal from "sweetalert";
import api from "../../api/api";
import { types } from "../types/types";
import { startLoginLoader, stopLoginLoader } from "../actions/uiActions";

export const StartLogin = (values) => {
  return async (dispatch) => {
    try {
      dispatch(startLoginLoader());
      const { data } = await api.post("/auth", values);
      if (data?.err) {
        swal({
          title: "Oops!",
          icon: "error",
          text: data?.message,
        });
      } else {
        localStorage.setItem("jwt", data?.jwt);
        dispatch(Login(data));
        dispatch(setIsAuth(true));
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(stopLoginLoader());
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
