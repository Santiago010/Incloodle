import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import {
  boxPrincipal,
  boxContainer,
  modalStyle,
  boxButton,
  titleModal,
} from "./styles/stylesModals";
import { useDispatch, useSelector } from "react-redux";
import { StartDeleteProfile } from "../redux/actions/profileActions";

const ModalDeleteProfile = ({ isOpen, handleOnClose, profile }) => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const dispatch = useDispatch();

  const handleOnDelete = () => {
    dispatch(StartDeleteProfile(jwt, profile.id, profile.rol));
    handleOnClose();
  };
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
            ¿Está seguro que desea eliminar el usuario?
          </Typography>
          <Box sx={{ ...boxButton, marginY: "50px" }}>
            <Button
              sx={{ marginX: "10px", backgroundColor: "#fff" }}
              variant="outlined"
              onClick={handleOnDelete}
            >
              Confirmar
            </Button>
            <Button
              sx={{ marginX: "10px", backgroundColor: "#fff" }}
              variant="outlined"
              onClick={handleOnClose}
            >
              Cancelar
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalDeleteProfile;
