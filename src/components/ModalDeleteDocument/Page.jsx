import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LayoutModal from "../LayoutModal";
import { boxButton } from "../styles/stylesModals";

const Page = ({ isOpen, handleOnClose, handleOnDelete }) => {
  return (
    <LayoutModal
      isOpen={isOpen}
      handleOnClose={handleOnClose}
      title="¿Está seguro que desea eliminar el Material?"
    >
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
    </LayoutModal>
  );
};

export default Page;
