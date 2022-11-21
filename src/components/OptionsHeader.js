import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { StartGetCourses } from "../redux/actions/teacherActions";
import { StartGetMyCourses } from "../redux/actions/studentsActions";
import { StartLogout } from "../redux/actions/authActions";

export const OptionsAdmin = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        sx={{ marginLeft: "10px" }}
        variant="contained"
        onClick={() => dispatch(StartLogout())}
      >
        Cerrar Sesion
      </Button>
    </>
  );
};

export const OptionsTeacher = () => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={() => dispatch(StartGetCourses(jwt))}>Cursos</Button>
      <Button
        sx={{ marginLeft: "10px" }}
        variant="contained"
        onClick={() => dispatch(StartLogout())}
      >
        Cerrar Sesion
      </Button>
    </>
  );
};

export const OptionsStudents = () => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={() => dispatch(StartGetMyCourses(jwt))}>
        Mis Curso
      </Button>
      <Button
        sx={{ marginLeft: "10px" }}
        variant="contained"
        onClick={() => dispatch(StartLogout())}
      >
        Cerrar Sesion
      </Button>
    </>
  );
};
