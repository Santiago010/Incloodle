import {
  Button,
  CircularProgress,
  IconButton,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import {
  boxButton,
  boxContainer,
  boxPrincipal,
  modalStyle,
  titleModal,
  textFields,
} from "../styles/stylesModals";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";

const Page = ({
  courses,
  state,
  isOpen,
  handleOnClose,
  handleOnSubmit,
  handleChange,
}) => {
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
            Buscar Correcciones
          </Typography>
          <form
            onSubmit={handleOnSubmit}
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
                Curso
              </Typography>
              {courses.length === 0 ? (
                <CircularProgress />
              ) : (
                <Select
                  required
                  name="course"
                  size="small"
                  value={state?.course}
                  displayEmpty
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Filtrar Por"
                  onChange={handleChange}
                  sx={{
                    ...textFields,
                    minWidth: 230,
                    backgroundColor: "#ffffff",
                  }}
                >
                  {courses.map((course) => (
                    <MenuItem value={course.course_id}>{course.name}</MenuItem>
                  ))}
                </Select>
              )}
            </Box>
            <Box mt={5} sx={boxButton}>
              <Button
                type="submit"
                sx={{ backgroundColor: "#fff", marginX: "10px" }}
                variant="outlined"
              >
                Buscar
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

export default Page;
