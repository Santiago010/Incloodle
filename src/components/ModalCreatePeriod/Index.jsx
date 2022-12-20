import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import { StartAddPeriod } from "../../redux/actions/profileActions";
import Page from "./Page";

const IndexModalCreatePeriod = ({ isOpen, handleOnClose }) => {
  const { jwt } = useSelector((s) => s?.authReducer);

  const [values, handleInputChange] = useForm({
    name: "",
  });
  const dispatch = useDispatch();

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    dispatch(StartAddPeriod(jwt, values.name));
    handleOnClose();
  };
  return (
    <Page
      isOpen={isOpen}
      handleOnClose={handleOnClose}
      values={values}
      handleChange={handleInputChange}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

export default IndexModalCreatePeriod;
