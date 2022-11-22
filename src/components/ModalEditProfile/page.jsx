import React from "react";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  boxButton,
  boxContainer,
  boxPrincipal,
  modalStyle,
  titleModal,
  textFields,
} from "../styles/stylesModals";

const Page = ({
  state,
  isOpen,
  handleChange,
  handleOnClose,
  handleOnSubmit,
}) => (
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
          Editar Perfil
        </Typography>
        <form
          onSubmit={handleOnSubmit}
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
              Nombre
            </Typography>
            <TextField
              size="small"
              required
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
              Rut
            </Typography>
            <TextField
              required
              name="rut"
              size="small"
              sx={textFields}
              id="outlined-basic"
              label="Rut"
              variant="outlined"
              value={state?.rut}
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
              Contraseña
            </Typography>
            <TextField
              required
              size="small"
              name="password"
              sx={textFields}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              value={state?.password}
              onChange={handleChange}
            />
          </Box>
          <Box mt={5} sx={boxButton}>
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
      </Box>
    </Box>
  </Modal>
);

export default Page;
