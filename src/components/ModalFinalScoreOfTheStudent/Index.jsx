import React, { useState } from "react";
import Page from "./Page";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { StartSetFinalScore } from "../../redux/actions/teacherActions";

const IndexFinalScoreOfTheStudent = ({ isOpen, handleOnClose }) => {
  const { student, course } = useSelector((s) => s?.teacherReducer);
  const { jwt } = useSelector((s) => s?.authReducer);
  const dispatch = useDispatch();
  const [values, handleInputChange, resetValues] = useForm({
    score: "",
  });
  const [finalScoreSuccess, setFinalScoreSuccess] = useState(false);

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    dispatch(
      StartSetFinalScore(
        jwt,
        course.course_id,
        student.student_id,
        `${values.score.substr(-2, 1)}.${values.score.substr(1)}`
      )
    );
    setFinalScoreSuccess(true);
    setTimeout(() => {
      resetValues();
      handleOnClose();
    }, 4000);
  };
  return (
    <Page
      isOpen={isOpen}
      handleOnClose={handleOnClose}
      state={values}
      handleOnSubmit={handleOnSubmit}
      handleChange={handleInputChange}
      finalScoreSuccess={finalScoreSuccess}
    />
  );
};

export default IndexFinalScoreOfTheStudent;
