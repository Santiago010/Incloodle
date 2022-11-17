import {
  Button,
  ButtonGroup,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { BoxContainer, BoxPrincipal, ModalStyle } from "./styles/stylesModals";
import CloseIcon from "@mui/icons-material/Close";
import useForm from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { StartAddDocumentsByCourse } from "../redux/actions/teacherActions";

const ModalCreateDocument = ({ isOpen, handleOnClose }) => {
  const dispatch = useDispatch();
  const [document, setDocument] = useState(null);
  const { jwt } = useSelector((s) => s?.authReducer);
  const { course } = useSelector((s) => s?.teacherReducer);
  const [values, handleInputChange, resetValues] = useForm({
    name: "",
  });
  const { name } = values;

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    const formData = new FormData();
    formData.append("document", document);
    dispatch(StartAddDocumentsByCourse(jwt, formData, name, course.course_id));
    handleOnClose();
  };

  const handleFileSelect = (ev) => {
    setDocument(ev.target.files[0]);
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
            Agregar Material
          </Typography>
          <form
            onSubmit={(ev) => handleOnSubmit(ev)}
            style={{ alignSelf: "center" }}
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
                value={name}
                onChange={handleInputChange}
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
                Archivo
              </Typography>
              <TextField
                required
                type="file"
                sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
                id="outlined-basic"
                variant="outlined"
                name="period"
                onChange={(ev) => handleFileSelect(ev)}
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

export default ModalCreateDocument;
