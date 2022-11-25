import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { StartLogout } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import {
  openModalSearchContens,
  openModalSearchStudent,
  openModalSearchExamPeding,
} from "../redux/actions/uiActions";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { course } = useSelector((s) => s?.teacherReducer);

  return (
    <>
      <Button onClick={() => navigate("/")}>Cursos</Button>
      <Button onClick={() => dispatch(openModalSearchStudent())}>
        Estudiantes
      </Button>
      <Button onClick={() => dispatch(openModalSearchContens())}>
        Contenido
      </Button>
      <Button onClick={() => dispatch(openModalSearchExamPeding())}>
        Corregir
      </Button>
      <Button onClick={() => {}}>Instructivo</Button>
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
  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={() => {}}>Material</Button>
      <Button onClick={() => {}}>Evaluación</Button>
      <Button onClick={() => {}}>Correción</Button>
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
