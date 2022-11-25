import {
  Button,
  IconButton,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import {
  boxButton,
  boxContainer,
  boxPrincipal,
  modalStyle,
  titleModal,
  textFields,
} from "./styles/stylesModals";
import CloseIcon from "@mui/icons-material/Close";
import useForm from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { StartAddDocumentsByCourse } from "../redux/actions/teacherActions";

const ModalCreateDocument = ({ isOpen, handleOnClose }) => {
  const dispatch = useDispatch();
  const [type, setType] = useState(0);
  const [document, setDocument] = useState(null);
  const { jwt } = useSelector((s) => s?.authReducer);
  const { course } = useSelector((s) => s?.teacherReducer);
  const [values, handleInputChange, resetValues] = useForm({
    name: "",
    numberQuestions: 0,
  });
  const { name, numberQuestions } = values;

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    const formData = new FormData();
    if (type === 0) {
      formData.append("document", document);
    } else if (type === 1) {
      formData.append("exam", document);
    }
    dispatch(
      StartAddDocumentsByCourse(jwt, formData, type, values, course.course_id)
    );
    handleOnClose();
    resetValues();
    setType(0);
  };

  const handleFileSelect = (ev) => {
    setDocument(ev.target.files[0]);
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
                size="small"
                required
                sx={textFields}
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
                Tipo
              </Typography>
              <Select
                required
                name="type"
                //fullWidth
                sx={textFields}
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Filtrar Por"
                onChange={(ev) => setType(ev.target.value)}
                value={type}
              >
                <MenuItem value="">
                  <em></em>
                </MenuItem>
                <MenuItem value={0}>Documento</MenuItem>
                <MenuItem value={1}>Examen</MenuItem>
              </Select>
            </Box>
            {type === 1 && (
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
                  # preguntas
                </Typography>
                <TextField
                  size="small"
                  required
                  type="number"
                  sx={textFields}
                  id="outlined-basic"
                  variant="outlined"
                  name="numberQuestions"
                  value={numberQuestions}
                  onChange={handleInputChange}
                />
              </Box>
            )}

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
              {/* <TextField
                size="small"
                required
                accept=".doc, .png, .docx, .pdf, .jpg, .docx"
                type="file"
                sx={textFields}
                id="outlined-basic"
                variant="outlined"
                name="period"
                onChange={(ev) => handleFileSelect(ev)}
              /> */}
              <Button variant="contained" component="label">
                Upload File
                <input
                  required
                  accept=".pdf"
                  name="document"
                  onChange={(ev) => handleFileSelect(ev)}
                  type="file"
                  hidden
                />
              </Button>
            </Box>
            <Box mt={4} mb={3} sx={boxButton}>
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
            </Box>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalCreateDocument;
