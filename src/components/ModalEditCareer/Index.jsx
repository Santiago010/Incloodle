import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import { StartUpdateCareer } from "../../redux/actions/profileActions";
import Page from "./Page";

const IndexModalEditCareer = ({ isOpen, handleOnClose }) => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const { career } = useSelector((s) => s?.profileReducer);
  const [values, setValues] = useState({
    name: "",
  });

  const dispatch = useDispatch();

  const handleOnsubmit = (ev) => {
    ev.preventDefault();
    dispatch(StartUpdateCareer(jwt, values.name, career.career_id));
    handleOnClose();
  };

  const handleChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    setValues({ ...values, ...career });
  }, [career]);

  return (
    <Page
      isOpen={isOpen}
      handleOnClose={handleOnClose}
      handleOnSubmit={handleOnsubmit}
      handleInputChange={handleChange}
      values={values}
    />
  );
};

export default IndexModalEditCareer;
