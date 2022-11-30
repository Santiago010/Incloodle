import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  StartGetExamsCorrected,
  ChoosenExam,
} from "../../redux/actions/studentsActions";
import Page from "./Page";

const IndexExamsCorrected = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { jwt } = useSelector((s) => s?.authReducer);
  const { dataExam } = useSelector((s) => s?.studentReducer);

  const handleSeeCorrections = (data) => {
    dispatch(ChoosenExam(data));
    navigate(`/seeCorrections/${data.studentExam_id}`);
  };

  useEffect(() => {
    dispatch(StartGetExamsCorrected(jwt, id));
  }, []);

  return <Page data={dataExam} handleSeeCorrections={handleSeeCorrections} />;
};

export default IndexExamsCorrected;
