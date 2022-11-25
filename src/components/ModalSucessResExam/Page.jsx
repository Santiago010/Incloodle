import { IconButton, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  boxPrincipal,
  modalStyle,
  boxContainer,
  titleModal,
} from "../styles/stylesModals";
import CloseIcon from "@mui/icons-material/Close";

const Page = ({ isOpen, handleOnClose, nameExam }) => {
  return (
    <Modal open={isOpen} onClose={handleOnClose} sx={modalStyle}>
      <Box sx={boxPrincipal}>
        <Box sx={boxContainer}>
          <IconButton
            aria-label="delete"
            size="small"
            sx={{ alignSelf: "flex-end" }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
          <Typography
            variant="h6"
            component="h6"
            textAlign="center"
            sx={titleModal}
          >
            Examen de {nameExam} respondido con exito
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default Page;
