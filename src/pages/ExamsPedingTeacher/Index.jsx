import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  ChooseDocument,
  StartGetPedingExam,
} from "../../redux/actions/teacherActions";
import Page from "./Page";

const IndexExamsPedingTeacher = () => {
  const { dataPedingExam } = useSelector((s) => s?.teacherReducer);
  const { jwt } = useSelector((s) => s?.authReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(StartGetPedingExam(jwt, id));
  }, []);

  const handleExamcorrected = (data) => {
    console.log(data);
    dispatch(ChooseDocument(data));
    navigate(`/studentExam/${data.studentExam_id}`);
  };

  return (
    <Page data={dataPedingExam} handleExamcorrected={handleExamcorrected} />
  );
};

export default IndexExamsPedingTeacher;
