import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import { StartResetPassStudent } from "../../redux/actions/studentsActions";
import { StartResetPassTeacher } from "../../redux/actions/teacherActions";
import { closeModalChangePass } from "../../redux/actions/uiActions";
import { jwtToObject } from "../../utils/jwt";
import Page from "./Page";

const IndexChangePass = ({ isOpen }) => {
  const jwtPayload = jwtToObject();
  const { jwt } = useSelector((s) => s?.authReducer);
  const dispatch = useDispatch();
  const [values, handleInputChange] = useForm({
    passCurrent: "",
    passNew: "",
  });
  const [changeSuccess, setChangeSuccess] = useState(false);
  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    if (jwtPayload.rol === 1) {
      dispatch(StartResetPassTeacher(jwt, values));
    } else if (jwtPayload.rol === 2) {
      dispatch(StartResetPassStudent(jwt, values));
    }
    setChangeSuccess(true);
    setTimeout(() => {
      dispatch(closeModalChangePass());
    }, 4000);
  };

  return (
    <Page
      values={values}
      isOpen={isOpen}
      handleOnClose={() => dispatch(closeModalChangePass())}
      handleOnSubmit={handleOnSubmit}
      handleChange={handleInputChange}
      changeSuccess={changeSuccess}
    />
  );
};

export default IndexChangePass;
