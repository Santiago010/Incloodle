import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import {
  ChoosenCourse,
  StartGetCourses,
} from "../../redux/actions/teacherActions";
import { closeModalSearchExampending } from "../../redux/actions/uiActions";
import Page from "./Page";

const IndexSearchExampending = ({ isOpen }) => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const { dataCourses } = useSelector((s) => s?.teacherReducer);
  const [values, handleInputChange, resetValues] = useForm({
    course: 0,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    dispatch(closeModalSearchExampending());
    let chosenCourse = dataCourses.filter(
      (data) => data.course_id === values.course
    );
    dispatch(ChoosenCourse(chosenCourse[0]));
    navigate(`/pendingExam/${values.course}`);
  };

  useEffect(() => {
    dispatch(StartGetCourses(jwt));
  }, []);

  return (
    <Page
      isOpen={isOpen}
      courses={dataCourses}
      state={values}
      handleChange={handleInputChange}
      handleOnClose={() => dispatch(closeModalSearchExampending())}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

export default IndexSearchExampending;
