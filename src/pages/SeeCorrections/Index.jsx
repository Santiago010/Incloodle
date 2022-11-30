import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { StartGetAnswersCorrections } from "../../redux/actions/studentsActions";
import Page from "./Page";

const IndexSeeCorrections = () => {
  const { id } = useParams();
  const { jwt } = useSelector((s) => s?.authReducer);
  const { dataAnswers, exam } = useSelector((s) => s?.studentReducer);
  const dispatch = useDispatch();

  const handleSeeExam = () => {
    window.open(exam.link);
  };

  useEffect(() => {
    dispatch(StartGetAnswersCorrections(jwt, id));
  }, []);

  return (
    <Page
      data={dataAnswers}
      exam={exam.link}
      score={exam.score}
      handleSeeExam={handleSeeExam}
    />
  );
};

export default IndexSeeCorrections;
