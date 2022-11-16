import swal from "sweetalert";
import api from "../../api/api";
import { types } from "../types/types";

export const StartLogin = (values) => {
  return async (dispatch) => {
    try {
      const { data } = await api.post("/auth", values);
      if (data.err) {
        swal({
          icon: "error",
          text: data.message,
        });
      } else {
        localStorage.setItem("jwt", `${data.jwt}`);
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
