import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StartDeleteCourse } from "../../redux/actions/teacherActions";
import Page from "./Page";

const IndexModalDeleteCourse = ({ isOpen, handleOnClose, course }) => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const dispatch = useDispatch();

  const handleOnDelete = () => {
    dispatch(StartDeleteCourse(jwt, course.course_id));
    handleOnClose();
  };
  return (
    <Page
      isOpen={isOpen}
      handleOnClose={handleOnClose}
      handleOnDelete={handleOnDelete}
    />
  );
};

export default IndexModalDeleteCourse;
