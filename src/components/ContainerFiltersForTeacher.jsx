import { FormControl, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Box } from "@mui/system";
import React from "react";
import { BoxFields, formFilters } from "./styles/stylesList";

const ContainerFiltersForTeacher = () => {
  return (
    <Box sx={BoxFields}>
      <Typography
        sx={{
          color: "#fff",
        }}
        variant="h5"
        component="h5"
      >
        Administrar perfiles
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
            label="Ingrese nombre de usuario"
            variant="standard"
          />
        </Box>
      </FormControl>
    </Box>
  );
};

export default ContainerFiltersForTeacher;
