import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import {
  ChoosenCourse,
  StartGetCourses,
} from "../../redux/actions/teacherActions";
import { closeModalSearchStudent } from "../../redux/actions/uiActions";
import Page from "./Page";

const IndexSearchStudents = ({ isOpen }) => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const { data } = useSelector((s) => s?.teacherReducer);
  const [values, handleInputChange, resetValues] = useForm({
    course: 0,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    dispatch(closeModalSearchStudent());
    let chosenCourse = data.filter((data) => data.course_id === values.course);
    dispatch(ChoosenCourse(chosenCourse[0]));
    navigate(`/students/${values.course}`);
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
      handleOnClose={() => dispatch(closeModalSearchStudent())}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

export default IndexSearchStudents;
