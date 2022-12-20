import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StartDeleteProfile } from "../../redux/actions/profileActions";
import Page from "./Page";

const IndexModalDeleteProfile = ({ isOpen, handleOnClose, profile }) => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const dispatch = useDispatch();

  const handleOnDelete = () => {
    dispatch(StartDeleteProfile(jwt, profile.id, profile.rol));
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

export default IndexModalDeleteProfile;
