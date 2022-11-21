import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
  MenuItem,
  Select,
  ButtonGroup,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import {
  boxButton,
  boxContainer,
  boxPrincipal,
  modalStyle,
  textFields,
  titleModal,
} from "./styles/stylesModals";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../hooks/useForm";
import { StartEditCourse } from "../redux/actions/teacherActions";

const ModalEditCourse = ({ isOpen, handleOnClose }) => {
  const dispatch = useDispatch();
  const { jwt } = useSelector((s) => s?.authReducer);
  const { course } = useSelector((s) => s?.teacherReducer);

  // const [values, handleInputChange] = useForm(profile); TODO:implementar

  useEffect(() => {
    // console.log(course);
    setState({ ...state, ...course });
  }, [course]);

  useEffect(() => {
    if (!isOpen) {
      setState({
        name: "",
        period: "",
      });
    }
  }, [isOpen]);

  const [state, setState] = useState({
    name: "",
    period: "",
  });

  const handleChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    dispatch(StartEditCourse(jwt, state));
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
            Editar Curso
          </Typography>
          <form
            onSubmit={(ev) => handleOnSubmit(ev)}
            style={{
              alignSelf: "center",
            }}
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
                Nombre Curso
              </Typography>
              <TextField
                required
                size="small"
                sx={textFields}
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
                name="name"
                value={state?.name}
                onChange={handleChange}
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
                Periodo Curso
              </Typography>
              <TextField
                required
                name="period"
                size="small"
                sx={textFields}
                id="outlined-basic"
                label="Rut"
                variant="outlined"
                value={state?.period}
                onChange={handleChange}
              />
            </Box>
            <Box sx={boxButton}>
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

export default ModalEditCourse;
