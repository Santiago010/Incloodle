import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import { StartAddProfile } from "../../redux/actions/profileActions";
import Page from "./Page";

const IndexModalCreateProfile = ({ isOpen, handleOnClose }) => {
  const [rol, setRol] = useState("");
  const { jwt } = useSelector((s) => s?.authReducer);
  const [values, handleInputChange, resetValues] = useForm({
    name: "",
    email: "",
    rut: "",
    password: "",
  });

  const dispatch = useDispatch();
  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    dispatch(StartAddProfile(jwt, values, rol));
    handleOnClose();
  };

  useEffect(() => {
    resetValues();
  }, [isOpen]);
  return (
    <Page
      isOpen={isOpen}
      handleOnClose={handleOnClose}
      handleOnSubmit={handleOnSubmit}
      values={values}
      handleInputChange={handleInputChange}
      rol={rol}
      setRol={setRol}
    />
  );
};

export default IndexModalCreateProfile;
