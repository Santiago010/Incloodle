import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import {
  StartAddCourse,
  StartGetPeriodsAndCareers,
} from "../../redux/actions/teacherActions";
import Page from "./Page";

const IndexModalCreateCourse = ({ isOpen, handleOnClose, teacher }) => {
  const dispatch = useDispatch();
  const { jwt } = useSelector((s) => s?.authReducer);
  const { periods, careers } = useSelector((s) => s?.teacherReducer);
  const [values, handleInputChange, resetValues] = useForm({
    name: "",
    period: "",
    career: "",
  });

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    dispatch(StartAddCourse(jwt, values, teacher.teacher_id));
    handleOnClose();
    resetValues();
  };

  useEffect(() => {
    dispatch(StartGetPeriodsAndCareers(jwt));
  }, []);

  return (
    <Page
      isOpen={isOpen}
      handleOnClose={handleOnClose}
      handleInputChange={handleInputChange}
      handleOnSubmit={handleOnSubmit}
      values={values}
      periods={periods}
      careers={careers}
    />
  );
};

export default IndexModalCreateCourse;
