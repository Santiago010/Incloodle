import React from "react";
import { Button } from "@mui/material";

const OptionsTeacher = () => {
  return (
    <>
      <Button>Cursos</Button>
      <Button>Estudiantes</Button>
      <Button>Contenido</Button>
      <Button>Corregir</Button>
      <Button>Instructivo</Button>
      <Button sx={{ marginLeft: "10px" }} variant="contained">
        Cerrar Sesion
      </Button>
    </>
  );
};

export default OptionsTeacher;
