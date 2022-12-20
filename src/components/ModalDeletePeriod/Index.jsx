import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "./Page";
import { StartDeletePeriod } from "../../redux/actions/profileActions";

const IndexModalDeletePeriod = ({ isOpen, handleOnClose, period }) => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const dispatch = useDispatch();

  const handleOnDelete = () => {
    dispatch(StartDeletePeriod(jwt, period.period_id));
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

export default IndexModalDeletePeriod;
