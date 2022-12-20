import { Box, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import {
  modalStyle,
  boxPrincipal,
  boxContainer,
  titleModal,
} from "./styles/stylesModals";
const LayoutModal = ({ isOpen, handleOnClose, title, children }) => {
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
            {title}
          </Typography>
          {children}
        </Box>
      </Box>
    </Modal>
  );
};

export default LayoutModal;
