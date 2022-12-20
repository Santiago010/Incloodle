import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import { StartAddDocumentsByCourse } from "../../redux/actions/teacherActions";
import Page from "./Page";

const IndexModalCreateDocument = ({ isOpen, handleOnClose }) => {
  const dispatch = useDispatch();
  const [type, setType] = useState(0);
  const [document, setDocument] = useState(null);
  const { jwt } = useSelector((s) => s?.authReducer);
  const { course } = useSelector((s) => s?.teacherReducer);
  const [values, handleInputChange, resetValues] = useForm({
    name: "",
    numberQuestions: 0,
    maxScore: 0,
  });

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    const formData = new FormData();
    if (type === 0) {
      formData.append("document", document);
    } else if (type === 1) {
      formData.append("exam", document);
    }
    dispatch(
      StartAddDocumentsByCourse(jwt, formData, type, values, course.course_id)
    );
    handleOnClose();
    resetValues();
    setDocument(null);
    setType(0);
  };

  const handleFileSelect = (ev) => {
    setDocument(ev.target.files[0]);
  };
  return (
    <Page
      isOpen={isOpen}
      handleOnClose={handleOnClose}
      handleOnSubmit={handleOnSubmit}
      values={values}
      handleInputChange={handleInputChange}
      type={type}
      setType={setType}
      handleFileSelect={handleFileSelect}
      document={document}
    />
  );
};

export default IndexModalCreateDocument;
