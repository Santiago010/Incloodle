import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "./Page";
import { StartGetAllExam } from "../../redux/actions/studentsActions";

const IndexAllExams = () => {
  const dispatch = useDispatch();
  const { jwt } = useSelector((s) => s?.authReducer);
  const { dataExam } = useSelector((s) => s?.studentReducer);

  const handleSeeContens = (link) => {
    window.open(link);
  };

  useEffect(() => {
    dispatch(StartGetAllExam(jwt));
  }, []);

  return <Page data={dataExam} handleSeeContens={handleSeeContens} />;
};

export default IndexAllExams;
