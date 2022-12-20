import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StartEditCourse } from "../../redux/actions/teacherActions";
import Page from "./Page";

const IndexModalEditCourse = ({ isOpen, handleOnClose }) => {
  const dispatch = useDispatch();
  const { jwt } = useSelector((s) => s?.authReducer);
  const { course } = useSelector((s) => s?.teacherReducer);

  useEffect(() => {
    setState({ ...state, ...course });
  }, [course]);

  useEffect(() => {
    if (!isOpen) {
      setState({
        name: "",
        period: "",
      });
    }
  }, [isOpen]);

  const [state, setState] = useState({
    name: "",
    period: "",
  });

  const handleChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    dispatch(StartEditCourse(jwt, state));
    handleOnClose();
  };

  return (
    <Page
      isOpen={isOpen}
      handleOnClose={handleOnClose}
      handleOnSubmit={handleOnSubmit}
      state={state}
      handleChange={handleChange}
    />
  );
};

export default IndexModalEditCourse;
