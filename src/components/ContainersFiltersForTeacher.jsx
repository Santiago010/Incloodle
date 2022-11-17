import { FormControl, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Box } from "@mui/system";
import React from "react";
import { BoxFields, formFilters } from "./styles/stylesList";

export const FiltersByCourses = () => {
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
            fullWidth
            id="input-with-sx"
            label="Ingrese nombre del curso"
            variant="standard"
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
