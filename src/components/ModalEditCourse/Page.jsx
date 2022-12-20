import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LayoutModal from "../LayoutModal";
import { boxButton, textFields } from "../styles/stylesModals";

const Page = ({
  isOpen,
  handleOnClose,
  handleOnSubmit,
  state,
  handleChange,
}) => {
  return (
    <LayoutModal
      isOpen={isOpen}
      handleOnClose={handleOnClose}
      title="Editar Curso"
    >
      <form
        onSubmit={(ev) => handleOnSubmit(ev)}
        style={{
          alignSelf: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginY: "20px",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            textAlign="center"
            sx={{ color: "#fff" }}
          >
            Nombre Curso
          </Typography>
          <TextField
            required
            size="small"
            sx={textFields}
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            name="name"
            value={state?.name}
            onChange={handleChange}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginY: "20px",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            textAlign="center"
            sx={{ color: "#fff" }}
          >
            Periodo Curso
          </Typography>
          <TextField
            required
            name="period"
            size="small"
            sx={textFields}
            id="outlined-basic"
            label="Rut"
            variant="outlined"
            value={state?.period}
            onChange={handleChange}
          />
        </Box>
        <Box sx={boxButton}>
          <Button
            type="submit"
            sx={{ backgroundColor: "#fff", marginX: "10px" }}
            variant="outlined"
          >
            Guardar
          </Button>
          <Button
            sx={{ backgroundColor: "#fff", marginX: "10px" }}
            variant="outlined"
            onClick={handleOnClose}
          >
            Cancelar
          </Button>
        </Box>
      </form>
    </LayoutModal>
  );
};

export default Page;
