import { Button } from "@mui/material";
import React from "react";

const OptionsStudents = () => {
  return (
    <>
      <Button>Mis Curso</Button>
      <Button sx={{ marginLeft: "10px" }} variant="contained">
        Cerrar Sesion
      </Button>
    </>
  );
};

export default OptionsStudents;
