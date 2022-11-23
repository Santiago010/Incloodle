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
import { StartDeleteCourse } from "../redux/actions/teacherActions";

const ModalDeleteCourse = ({ isOpen, handleOnClose, course }) => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const dispatch = useDispatch();

  const handleOnDelete = () => {
    dispatch(StartDeleteCourse(jwt, course.course_id));
    console.log(course);
    handleOnClose();
  };
  return (
    <Modal open={isOpen} onClose={handleOnClose} sx={modalStyle}>
      <Box sx={{ ...boxPrincipal, width: "720px" }}>
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
            variant="h5"
            component="span"
            textAlign="center"
            sx={titleModal}
          >
            ¿Está seguro que desea eliminar el Curso?
          </Typography>
          <Box mt={4} mb={3} sx={boxButton}>
            <Button
              sx={{ backgroundColor: "#fff" }}
              variant="outlined"
              onClick={handleOnDelete}
            >
              Confirmar
            </Button>
            <Button
              sx={{ backgroundColor: "#fff" }}
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

export default ModalDeleteCourse;
