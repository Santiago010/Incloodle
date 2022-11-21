import {
  Button,
  CircularProgress,
  IconButton,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
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
import { StartAddStudentToACourse } from "../redux/actions/teacherActions";

const ModalAddStudentACourse = ({ isOpen, handleOnClose }) => {
  const dispatch = useDispatch();
  const { jwt } = useSelector((s) => s?.authReducer);
  const { course } = useSelector((s) => s?.teacherReducer);
  const { studentsAll } = useSelector((s) => s?.studentReducer);
  const [values, handleInputChange, resetValues] = useForm({
    studentId: 0,
    courseId: course.course_id,
  });

  const { studentId } = values;

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    dispatch(StartAddStudentToACourse(jwt, values));
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
            Agregar Estudiante al curso
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
                Estudiante
              </Typography>
              {studentsAll.length === 0 ? (
                <CircularProgress />
              ) : (
                <Select
                  required
                  name="studentId"
                  //fullWidth
                  sx={textFields}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Filtrar Por"
                  onChange={handleInputChange}
                  value={studentId}
                >
                  {studentsAll.map((student) => (
                    <MenuItem key={student.rut} value={student.student_id}>
                      {student.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
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

export default ModalAddStudentACourse;
