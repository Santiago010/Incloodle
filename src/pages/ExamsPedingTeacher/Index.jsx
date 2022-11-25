import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { StartGetPedingExam } from "../../redux/actions/teacherActions";
import Page from "./Page";

const IndexExamsPedingTeacher = () => {
  const { data } = useSelector((s) => s?.teacherReducer);
  const { jwt } = useSelector((s) => s?.authReducer);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(StartGetPedingExam(jwt, id));
  }, []);

  const handleExamcorrected = (data) => {
    console.log(data);
  };

  return <Page data={data} handleExamcorrected={handleExamcorrected} />;
};

export default IndexExamsPedingTeacher;
