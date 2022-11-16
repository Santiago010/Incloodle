import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
  MenuItem,
  Select,
  ButtonGroup,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { BoxContainer, BoxPrincipal, ModalStyle } from "./styles/stylesModals";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../hooks/useForm";
import {
  ChosenProfile,
  StartEditProfile,
} from "../redux/actions/profileActions";

const ModalEditProfile = ({ isOpen, handleOnClose, profile }) => {
  // console.log(profile);
  const { jwt } = useSelector((s) => s?.authReducer);
  const [values, setValues] = useState({ password: "", ...profile });
  // const [values, handleInputChange] = useForm(profile);

  const dispatch = useDispatch();

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    // dispatch(StartEditProfile(jwt, values));
  };

  return (
    <Modal open={isOpen} onClose={handleOnClose} sx={ModalStyle}>
      <Box sx={BoxPrincipal}>
        <Box sx={BoxContainer}>
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
            sx={{ color: "#fff" }}
          >
            Editar Perfil
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
                Nombre
              </Typography>
              <TextField
                required
                sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
                name="name"
                value={values.name}
                onChange={({ target }) =>
                  setValues({ ...values, [target.name]: target.value })
                }
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
                sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
                id="outlined-basic"
                label="Rut"
                variant="outlined"
                value={values.rut}
                onChange={({ target }) =>
                  setValues({ ...values, [target.name]: target.value })
                }
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
                name="password"
                sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                value={values.password}
                onChange={({ target }) =>
                  setValues({ ...values, [target.name]: target.value })
                }
              />
            </Box>
            <ButtonGroup
              sx={{
                alignSelf: "center",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
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
            </ButtonGroup>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalEditProfile;
