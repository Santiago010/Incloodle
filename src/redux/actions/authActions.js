import swal from "sweetalert";
import api from "../../api/api";
import { types } from "../types/types";
import { StartLoading, StopLoading } from "../actions/uiActions";

export const StartLogin = (values) => {
  return async (dispatch) => {
    try {
      dispatch(StartLoading());
      const { data } = await api.post("/auth", values);
      if (data.err) {
        dispatch(StopLoading());
        swal({
          icon: "error",
          text: data.message,
        });
      } else {
        localStorage.setItem("jwt", `${data.jwt}`);
        dispatch(StopLoading());
        dispatch(Login(data));
      }
    } catch (error) {
      console.error(error);
    }
  };
};

const Login = (data) => ({
  type: types.authLogin,
  payload: data,
});

export const StartLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("jwt");
    dispatch(Logout());
  };
};

const Logout = () => ({
  type: types.authLogout,
});
