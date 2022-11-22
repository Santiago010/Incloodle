import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StartEditProfile } from "../../redux/actions/profileActions";
import Page from "./page";

const ModalEditProfile = ({ isOpen, handleOnClose }) => {
  const dispatch = useDispatch();
  const { jwt } = useSelector((s) => s?.authReducer);
  const { profile } = useSelector((s) => s?.profileReducer);

  const [state, setState] = useState({
    id: "",
    email: "",
    name: "",
    rol: "",
    rut: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    dispatch(StartEditProfile(jwt, state));
    handleOnClose();
  };

  useEffect(() => {
    setState({ ...state, ...profile });
  }, [profile]);

  useEffect(() => {
    if (!isOpen) {
      setState({
        id: "",
        email: "",
        name: "",
        rol: "",
        rut: "",
        password: "",
      });
    }
  }, [isOpen]);

  return (
    <Page
      state={state}
      isOpen={isOpen}
      handleChange={handleChange}
      handleOnClose={handleOnClose}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

export default ModalEditProfile;
