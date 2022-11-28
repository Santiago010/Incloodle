import {
  Button,
  FormControl,
  InputAdornment,
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
    <Box sx={BoxFields} mb={3}>
      <Typography
        sx={{
          color: "#fff",
          marginRight: "10px",
        }}
        variant="h5"
        component="span"
      >
        Administrar perfiles
      </Typography>
      <Box sx={formFilters}>
        <Box
          sx={{
            width: "40%",
          }}
        >
          <FormControl size="small" fullWidth>
            <InputLabel id="rol-label">Filtrar por</InputLabel>
            <Select
              fullWidth
              name="rol"
              value={rol}
              labelId="rol-label"
              label="Filtrar por"
              onChange={handleInputChange}
              sx={{
                backgroundColor: "#fff",
              }}
            >
              <MenuItem value="">
                <em>Todos</em>
              </MenuItem>
              <MenuItem value={1}>Profesor</MenuItem>
              <MenuItem value={2}>Estudiante</MenuItem>
            </Select>
          </FormControl>
        </Box>
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
              label="Ingrese nombre de usuario"
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

export default ContainerFiltersForAdmin;
