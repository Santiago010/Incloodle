import {
  Button,
  ButtonGroup,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  boxButton,
  boxContainer,
  boxPrincipal,
  modalStyle,
  textFields,
  titleModal,
} from "./styles/stylesModals";
import CloseIcon from "@mui/icons-material/Close";
import useForm from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { StartAddCourse } from "../redux/actions/teacherActions";

const ModalCreateCourse = ({ isOpen, handleOnClose, teacher }) => {
  const dispatch = useDispatch();
  const { jwt } = useSelector((s) => s?.authReducer);
  const [values, handleInputChange, resetValues] = useForm({
    name: "",
    period: "",
  });
  const { name, period } = values;

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    dispatch(StartAddCourse(jwt, values, teacher.teacher_id));
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
            Agregar Curso
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
                Nombre curso
              </Typography>
              <TextField
                required
                size="small"
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
                Periodo curso
              </Typography>
              <TextField
                required
                size="small"
                sx={textFields}
                id="outlined-basic"
                label="Periodo"
                variant="outlined"
                name="period"
                value={period}
                onChange={handleInputChange}
              />
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

export default ModalCreateCourse;
