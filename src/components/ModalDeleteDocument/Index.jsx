import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StartDeleteDocumentByCourse } from "../../redux/actions/teacherActions";
import Page from "./Page";

const IndexModalDeleteDocument = ({ isOpen, handleOnClose }) => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const { course, conten } = useSelector((s) => s?.teacherReducer);
  const dispatch = useDispatch();

  const handleOnDelete = () => {
    dispatch(
      StartDeleteDocumentByCourse(jwt, conten.type, conten.id, course.course_id)
    );
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

export default IndexModalDeleteDocument;
