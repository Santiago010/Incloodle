import React from "react";
import { useSelector } from "react-redux";
import Page from "./Page";

const IndexReportStudent = ({ isOpen, handleOnClose }) => {
  const { student, dataReport } = useSelector((s) => s?.teacherReducer);

  return (
    <Page
      isOpen={isOpen}
      report={dataReport}
      handleOnClose={handleOnClose}
      student={student}
    />
  );
};

export default IndexReportStudent;
