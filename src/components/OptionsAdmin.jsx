import React from "react";
import { Button } from "@mui/material";

const OptionsAdmin = () => {
  return (
    <>
      <Button>Estudiantes</Button>
      <Button>Profesores</Button>
      <Button sx={{ marginLeft: "10px" }} variant="contained">
        Cerrar Sesion
      </Button>
    </>
  );
};

export default OptionsAdmin;
