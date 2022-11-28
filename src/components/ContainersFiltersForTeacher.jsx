import { FormControl, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { BoxFields, formFilters } from "./styles/stylesList";
import useForm from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  StartFilterCourseByName,
  StartFilterExamByName,
  StartFilterMaterialByName,
  StartFilterStudentByName,
} from "../redux/actions/teacherActions";
import { useParams } from "react-router-dom";

export const FiltersByCourses = () => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const dispatch = useDispatch();
  const [values, handleInputChange] = useForm({
    name: "",
  });

  const { name } = values;

  useEffect(() => {
    dispatch(StartFilterCourseByName(jwt, name));
  }, [name]);

  return (
    <Box sx={BoxFields} mb={3}>
      <Typography
        sx={{
          color: "#fff",
          marginRight: "10px",
        }}
        variant="h5"
        component="span"
      >
        Administrar cursos
      </Typography>
      <Box sx={formFilters}>
        <Box
          sx={{
            width: "50%",
          }}
        >
          <FormControl
            sx={{ backgroundColor: "#fff", borderRadius: "10px" }}
            size="small"
            fullWidth
          >
            <TextField
              size="small"
              label="Ingrese nombre de curso"
              variant="filled"
              name="name"
              value={name}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export const FiltersByDocuments = () => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [values, handleInputChange] = useForm({
    name: "",
  });

  const { name } = values;

  useEffect(() => {
    dispatch(StartFilterMaterialByName(jwt, name, id));
  }, [name]);

  return (
    <Box sx={BoxFields} mb={3}>
      <Typography
        sx={{
          color: "#fff",
          marginRight: "10px",
        }}
        variant="h5"
        component="span"
      >
        Administrar material
      </Typography>
      <Box sx={formFilters}>
        <Box
          sx={{
            width: "50%",
          }}
        >
          <FormControl
            sx={{ backgroundColor: "#fff", borderRadius: "10px" }}
            size="small"
            fullWidth
          >
            <TextField
              size="small"
              label="Ingrese nombre de material"
              variant="filled"
              name="name"
              value={name}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export const FiltersByStudents = () => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [values, handleInputChange] = useForm({
    name: "",
  });

  const { name } = values;

  useEffect(() => {
    dispatch(StartFilterStudentByName(jwt, name, id));
  }, [name]);

  return (
    <Box sx={BoxFields} mb={3}>
      <Typography
        sx={{
          color: "#fff",
          marginRight: "10px",
        }}
        variant="h5"
        component="span"
      >
        Administrar estudiantes
      </Typography>
      <Box sx={formFilters}>
        <Box
          sx={{
            width: "50%",
          }}
        >
          <FormControl
            sx={{ backgroundColor: "#fff", borderRadius: "10px" }}
            size="small"
            fullWidth
          >
            <TextField
              size="small"
              label="Ingrese nombre del estudiante"
              variant="filled"
              name="name"
              value={name}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export const FiltersBypendingExam = () => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [values, handleInputChange] = useForm({
    name: "",
  });

  const { name } = values;

  useEffect(() => {
    dispatch(StartFilterExamByName(jwt, name, id));
  }, [name]);

  return (
    <Box sx={BoxFields} mb={3}>
      <Typography
        sx={{
          color: "#fff",
          marginRight: "10px",
        }}
        variant="h5"
        component="span"
      >
        Administrar examenes pendientes
      </Typography>
      <Box sx={formFilters}>
        <Box
          sx={{
            width: "50%",
          }}
        >
          <FormControl
            sx={{ backgroundColor: "#fff", borderRadius: "10px" }}
            size="small"
            fullWidth
          >
            <TextField
              size="small"
              label="Ingrese nombre del examen"
              variant="filled"
              name="name"
              value={name}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};
