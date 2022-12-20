import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StartUpdatePeriod } from "../../redux/actions/profileActions";
import Page from "./Page";

const IndexModalEditPeriod = ({ isOpen, handleOnClose }) => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const { period } = useSelector((s) => s?.profileReducer);
  const [values, setValues] = useState({
    name: "",
  });

  const dispatch = useDispatch();

  const handleOnsubmit = (ev) => {
    ev.preventDefault();
    dispatch(StartUpdatePeriod(jwt, values.name, period.period_id));
    handleOnClose();
  };

  const handleChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    setValues({ ...values, ...period });
  }, [period]);

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

export default IndexModalEditPeriod;
