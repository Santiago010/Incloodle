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
import successImg from "../../assets/undraw_done_re_oak4.svg";

const Page = ({ isOpen, handleOnClose, name }) => {
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
            Examen de {name} corregido con exito
          </Typography>
          <img src={successImg}></img>
        </Box>
      </Box>
    </Modal>
  );
};

export default Page;
