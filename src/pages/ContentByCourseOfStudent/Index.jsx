import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ChoosenExam } from "../../redux/actions/studentsActions";
import { startGetDocumentsByCourse } from "../../redux/actions/studentsActions";
import Page from "./Page";

const IndexContensByCourseOfStudent = () => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const { dataDocuments } = useSelector((s) => s?.studentReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSeeContens = (link) => {
    window.open(link);
  };

  const handleTakeExam = (data) => {
    dispatch(ChoosenExam(data));
    navigate(`/takeExam/${data.exam_id}`);
  };

  useEffect(() => {
    dispatch(startGetDocumentsByCourse(jwt, id));
  }, []);

  return (
    <Page
      data={dataDocuments}
      handleSeeContens={handleSeeContens}
      handleTakeExam={handleTakeExam}
      fragmentModals={<></>}
    />
  );
};

export default IndexContensByCourseOfStudent;
