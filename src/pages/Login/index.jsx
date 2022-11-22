import React from "react";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { StartLogin } from "../../redux/actions/authActions";
import Page from "./page";

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((s) => s?.uiReducer);
  const [values, handleInputChange] = useForm({
    email: "",
    password: "",
    checked: 0,
  });

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    dispatch(StartLogin(values));
  };

  return (
    <Page
      values={values}
      loading={loading}
      handleOnSubmit={handleOnSubmit}
      handleInputChange={handleInputChange}
    />
  );
};

export default Login;
