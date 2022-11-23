import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsAuth, Login } from "../redux/actions/authActions";
import { verifyTokenService } from "../services/verifyTokenService";

export const useIsLogged = () => {
  const dispatch = useDispatch();

  const verifyToken = async () => {
    try {
      const resp = await verifyTokenService();
      if (resp?.data?.isAuth) {
        dispatch(setIsAuth(true));
        dispatch(
          Login({
            ...resp.data,
            jwt: localStorage.getItem("jwt"),
          })
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) return;
    verifyToken();
  }, []);
};
