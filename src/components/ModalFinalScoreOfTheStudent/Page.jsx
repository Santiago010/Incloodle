import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import {
  boxButton,
  boxContainer,
  boxPrincipal,
  modalStyle,
  titleModal,
} from "../styles/stylesModals";
import CloseIcon from "@mui/icons-material/Close";

const Page = ({
  state,
  isOpen,
  handleOnClose,
  handleOnSubmit,
  handleChange,
  finalScoreSuccess,
}) => {
  return (
    <Modal open={isOpen} sx={modalStyle}>
      <Box sx={boxPrincipal}>
        <Box sx={boxContainer}>
          <IconButton
            aria-label="delete"
            size="small"
            sx={{ alignSelf: "flex-end" }}
            onClick={handleOnClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
          <Typography
            variant="h6"
            component="h6"
            textAlign="center"
            sx={titleModal}
          >
            Nota final del estudiante:
          </Typography>
          <form onSubmit={handleOnSubmit}>
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
                Nota
              </Typography>
              <input
                name="score"
                onChange={handleChange}
                value={state?.score}
                required
                type="number"
                min="10"
                max="50"
                variant="outlined"
                size="small"
                placeholder="Ingresar Nota Final"
                id="standard-basic"
                style={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderColor: "#fff",
                  minWidth: 230,
                }}
              />
            </Box>
            <Box mt={5} sx={boxButton}>
              <Button
                type="submit"
                sx={{ backgroundColor: "#fff", marginX: "10px" }}
                variant="outlined"
              >
                Enviar
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
          {finalScoreSuccess && (
            <Typography align="center" variant="h5" component="h5">
              Nota Final puesta con exito
            </Typography>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default Page;
