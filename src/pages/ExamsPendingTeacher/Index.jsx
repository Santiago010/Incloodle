import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  ChooseDocument,
  StartGetpendingExam,
} from "../../redux/actions/teacherActions";
import Page from "./Page";

const IndexExamspendingTeacher = () => {
  const { datapendingExam, dataFiltered } = useSelector(
    (s) => s?.teacherReducer
  );
  const { jwt } = useSelector((s) => s?.authReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(StartGetpendingExam(jwt, id));
  }, []);

  const handleExamcorrected = (data) => {
    dispatch(ChooseDocument(data));
    navigate(`/studentExam/${data.studentExam_id}`);
  };

  return (
    <Page
      data={dataFiltered.length === 0 ? datapendingExam : dataFiltered}
      handleExamcorrected={handleExamcorrected}
    />
  );
};

export default IndexExamspendingTeacher;
