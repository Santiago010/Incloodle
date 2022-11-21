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
import { StartDeleteStudentFromACourse } from "../redux/actions/teacherActions";

const ModalDeleteStudentFromACourse = ({ isOpen, handleOnClose }) => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const { student } = useSelector((s) => s?.teacherReducer);
  const dispatch = useDispatch();

  const handleOnDelete = () => {
    handleOnClose();
    console.log({ jwt });
    dispatch(StartDeleteStudentFromACourse(jwt, student));
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
            ¿Está seguro que desea eliminar el Studiante del curso?
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

export default ModalDeleteStudentFromACourse;
