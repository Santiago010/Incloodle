import { FormControl, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { BoxFields, formFilters } from "./styles/stylesList";
import useForm from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";

export const FiltersByCourses = () => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const dispatch = useDispatch();
  const [values, handleInputChange] = useForm({
    name: "a",
  });

  const { name } = values;

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
      <Box ml={4}>
        <FormControl size="small">
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
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
            }}
          />
        </FormControl>
      </Box>
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
