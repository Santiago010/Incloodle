import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "./Page";
import { StartDeleteCareer } from "../../redux/actions/profileActions";

const IndexModalDeleteCareer = ({ isOpen, handleOnClose, career }) => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const dispatch = useDispatch();

  const handleOnDelete = () => {
    dispatch(StartDeleteCareer(jwt, career.career_id));
    handleOnClose();
  };

  return (
    <Page
      isOpen={isOpen}
      handleOnClose={handleOnClose}
      handleOnDelete={handleOnDelete}
    />
  );
};

export default IndexModalDeleteCareer;
