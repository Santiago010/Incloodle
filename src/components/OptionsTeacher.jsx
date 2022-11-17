import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { StartGetCourses } from "../redux/actions/teacherActions";

const OptionsTeacher = () => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={() => dispatch(StartGetCourses(jwt))}>Cursos</Button>
      <Button sx={{ marginLeft: "10px" }} variant="contained">
        Cerrar Sesion
      </Button>
    </>
  );
};

export default OptionsTeacher;
