import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Page from "./Page";

const IndexSucessResExam = ({ isOpen, handleOnClose, nameExam }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        sendDashboard();
      }, 4000);
    }
  }, [isOpen]);

  const sendDashboard = () => {
    handleOnClose();
    navigate("/");
  };

  return (
    <Page isOpen={isOpen} handleOnClose={handleOnClose} nameExam={nameExam} />
  );
};

export default IndexSucessResExam;
