import axios from "../api/api";

export const verifyTokenService = () => {
  const token = localStorage.getItem("jwt");
  const URL = "/auth/verify-token";
  return axios.post(URL, { token });
};
