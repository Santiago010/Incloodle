import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import {
  ChoosenCourse,
  StartGetCourses,
} from "../../redux/actions/teacherActions";
import { closeModalSearchContens } from "../../redux/actions/uiActions";
import Page from "./Page";

const IndexSearchExamPeding = ({ isOpen }) => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const { data } = useSelector((s) => s?.teacherReducer);
  const [values, handleInputChange, resetValues] = useForm({
    course: 0,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    dispatch(closeModalSearchContens());
    let chosenCourse = data.filter((data) => data.course_id === values.course);
    dispatch(ChoosenCourse(chosenCourse[0]));
    console.log(chosenCourse);
    navigate(`/pedingExam/${values.course}`);
  };

  useEffect(() => {
    dispatch(StartGetCourses(jwt));
  }, []);

  return (
    <Page
      isOpen={isOpen}
      courses={data}
      state={values}
      handleChange={handleInputChange}
      handleOnClose={() => dispatch(closeModalSearchContens())}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

export default IndexSearchExamPeding;
