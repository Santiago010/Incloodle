import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { StartGetMyCourses } from "../../redux/actions/studentsActions";
import { closeModalSearchExamCorrected } from "../../redux/actions/uiActions";
import Page from "./Page";

const IndexSearchExamCorrected = ({ isOpen }) => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const { dataCourses } = useSelector((s) => s?.studentReducer);
  const [values, handleInputChange, resetValues] = useForm({
    course: 0,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    dispatch(closeModalSearchExamCorrected());
    navigate(`/examCorrected/${values.course}`);
  };

  useEffect(() => {
    dispatch(StartGetMyCourses(jwt));
  }, []);
  return (
    <Page
      isOpen={isOpen}
      courses={dataCourses}
      state={values}
      handleChange={handleInputChange}
      handleOnClose={() => dispatch(closeModalSearchExamCorrected())}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

export default IndexSearchExamCorrected;
