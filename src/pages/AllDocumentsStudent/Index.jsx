import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "./Page";
import { StartGetAllDocuments } from "../../redux/actions/studentsActions";

const IndexAllDocumentsStudent = () => {
  const dispatch = useDispatch();
  const { jwt } = useSelector((s) => s?.authReducer);
  const { dataDocuments } = useSelector((s) => s?.studentReducer);

  const handleSeeContens = (link) => {
    window.open(link);
  };

  useEffect(() => {
    dispatch(StartGetAllDocuments(jwt));
  }, []);

  return <Page data={dataDocuments} handleSeeContens={handleSeeContens} />;
};

export default IndexAllDocumentsStudent;
