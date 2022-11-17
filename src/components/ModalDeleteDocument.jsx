import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import {
  BoxPrincipal,
  BoxContainer,
  ModalStyle,
  BoxButton,
} from "./styles/stylesModals";
import { useDispatch, useSelector } from "react-redux";
import { StartDeleteDocumentByCourse } from "../redux/actions/teacherActions";

const ModalDeleteDocument = ({ isOpen, handleOnClose, document }) => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const { course } = useSelector((s) => s?.teacherReducer);
  const dispatch = useDispatch();

  const handleOnDelete = () => {
    dispatch(
      StartDeleteDocumentByCourse(jwt, document.document_id, course.course_id)
    );
    handleOnClose();
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
            ¿Está seguro que desea eliminar el Material?
          </Typography>
          <Box sx={{ ...BoxButton, marginY: "50px" }}>
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
