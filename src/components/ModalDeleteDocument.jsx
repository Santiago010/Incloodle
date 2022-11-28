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
import { StartDeleteDocumentByCourse } from "../redux/actions/teacherActions";

const ModalDeleteDocument = ({ isOpen, handleOnClose }) => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const { course, conten } = useSelector((s) => s?.teacherReducer);
  const dispatch = useDispatch();

  const handleOnDelete = () => {
    dispatch(
      StartDeleteDocumentByCourse(jwt, conten.type, conten.id, course.course_id)
    );
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
            ¿Está seguro que desea eliminar el Material?
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

export default ModalDeleteDocument;
