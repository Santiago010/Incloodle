import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import {
  modalStyle,
  boxPrincipal,
  boxContainer,
  titleModal,
  textFields,
  boxButton,
} from "../styles/stylesModals";
const Page = ({
  values,
  isOpen,
  handleOnClose,
  handleOnSubmit,
  handleChange,
  changeSuccess,
}) => {
  return (
    <Modal open={isOpen} onClose={handleOnClose} sx={modalStyle}>
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
            Cambiar Contraseña
          </Typography>
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
                Contraseña Actual
              </Typography>
              <TextField
                type="password"
                required
                size="small"
                sx={textFields}
                id="outlined-basic"
                label="Contraseña Actual"
                variant="outlined"
                name="passCurrent"
                value={values?.passCurrent}
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
                Contraseña Nueva
              </Typography>
              <TextField
                type="password"
                required
                name="passNew"
                size="small"
                sx={textFields}
                id="outlined-basic"
                label="Contraseña Nueva"
                variant="outlined"
                value={values?.passNew}
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
          {changeSuccess && (
            <Typography variant="h4" component="h4">
              ¡Contraseña cambiada con exito!
            </Typography>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default Page;
