import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { BoxFields, formFilters } from "./styles/stylesList";
import useForm from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  StartFilterProfileByName,
  StartFilterProfileByRol,
} from "../redux/actions/profileActions";

const ContainerFiltersForAdmin = () => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const dispatch = useDispatch();
  const [values, handleInputChange] = useForm({
    rol: 3,
    name: "",
  });
  const { rol, name } = values;

  useEffect(() => {
    dispatch(StartFilterProfileByRol(jwt, rol));
  }, [rol]);

  useEffect(() => {
    dispatch(StartFilterProfileByName(jwt, name));
  }, [name]);

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
        <InputLabel
          sx={{ marginLeft: "30px" }}
          id="demo-simple-select-helper-label"
        >
          Filtrar Por
        </InputLabel>
        <Select
          name="rol"
          sx={{
            marginLeft: "30px",
            backgroundColor: "#fff",
            width: "30%",
          }}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Filtrar Por"
          value={rol}
          onChange={handleInputChange}
        >
          <MenuItem value={3}>Todos</MenuItem>
          <MenuItem value={1}>Profesor</MenuItem>
          <MenuItem value={2}>Estudiante</MenuItem>
        </Select>
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
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </Box>
      </FormControl>
    </Box>
  );
};

export default ContainerFiltersForAdmin;
