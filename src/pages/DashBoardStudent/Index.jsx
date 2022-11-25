import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StartGetMyCourses } from "../../redux/actions/studentsActions";
import Page from "./Page";

const IndexStudent = () => {
  const dispatch = useDispatch();
  const { jwt } = useSelector((s) => s?.authReducer);
  const { data } = useSelector((s) => s?.studentReducer);
  const navigate = useNavigate();

  const handleSeeMaterial = (data) => {
    navigate(`/courseContent/${data.course_id}`);
  };

  useEffect(() => {
    dispatch(StartGetMyCourses(jwt));
  }, []);

  return <Page data={data} handleSeeMaterial={handleSeeMaterial} />;
};

export default IndexStudent;
