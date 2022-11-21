import { FormControl, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { BoxFields, formFilters } from "./styles/stylesList";
import useForm from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { StartFilterCourse } from "../redux/actions/teacherActions";

export const FiltersByCourses = () => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const dispatch = useDispatch();
  const [values, handleInputChange] = useForm({
    name: "a",
  });

  const { name } = values;

  // useEffect(() => {
  //   dispatch(StartFilterCourse(jwt, name));
  // }, [name]);

  return (
    <Box sx={BoxFields}>
      <Typography
        sx={{
          color: "#fff",
        }}
        variant="h5"
        component="h5"
      >
        Administrar cursos
      </Typography>
      <FormControl sx={formFilters} size="small">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            width: "50%",
            backgroundColor: "#fff",
            borderRadius: "10px",
          }}
        >
          <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            value={name}
            name="name"
            fullWidth
            id="input-with-sx"
            label="Ingrese nombre del curso"
            variant="standard"
            onChange={handleInputChange}
          />
        </Box>
      </FormControl>
    </Box>
  );
};

export const FiltersByDocuments = () => {
  return (
    <Box sx={BoxFields}>
      <Typography
        sx={{
          color: "#fff",
        }}
        variant="h5"
        component="h5"
      >
        Administrar Materiales
      </Typography>
      <FormControl sx={formFilters} size="small">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            width: "50%",
            backgroundColor: "#fff",
            borderRadius: "10px",
          }}
        >
          <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            fullWidth
            id="input-with-sx"
            label="Ingrese nombre del material"
            variant="standard"
          />
        </Box>
      </FormControl>
    </Box>
  );
};

export const FiltersByStudents = () => {
  return (
    <Box sx={BoxFields}>
      <Typography
        sx={{
          color: "#fff",
        }}
        variant="h5"
        component="h5"
      >
        Listado Estudiantes
      </Typography>
      <FormControl sx={formFilters} size="small">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            width: "50%",
            backgroundColor: "#fff",
            borderRadius: "10px",
          }}
        >
          <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            fullWidth
            id="input-with-sx"
            label="Ingrese nombre del material"
            variant="standard"
          />
        </Box>
      </FormControl>
    </Box>
  );
};
