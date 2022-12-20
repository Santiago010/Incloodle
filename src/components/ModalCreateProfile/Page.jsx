import { Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LayoutModal from "../LayoutModal";
import { boxButton, textFields } from "../styles/stylesModals";

const Page = ({
  isOpen,
  handleOnClose,
  handleOnSubmit,
  values,
  handleInputChange,
  rol,
  setRol,
}) => {
  return (
    <LayoutModal
      isOpen={isOpen}
      handleOnClose={handleOnClose}
      title="Agregar Perfil"
    >
      <form onSubmit={handleOnSubmit}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            textAlign="center"
            sx={{ color: "#fff" }}
          >
            Nombre
          </Typography>
          <TextField
            required
            size="small"
            sx={textFields}
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            name="name"
            value={values?.name}
            onChange={handleInputChange}
          />
        </Box>
        <Box
          my={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            textAlign="center"
            sx={{ color: "#fff" }}
          >
            Rol
          </Typography>
          <Select
            required
            name="rol"
            size="small"
            value={rol}
            displayEmpty
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Filtrar Por"
            onChange={(ev) => setRol(ev.target.value)}
            sx={{
              ...textFields,
              minWidth: 230,
              backgroundColor: "#ffffff",
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Profesor</MenuItem>
            <MenuItem value={2}>Estudiante</MenuItem>
          </Select>
        </Box>
        <Box
          my={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            textAlign="center"
            sx={{ color: "#fff" }}
          >
            Rut
          </Typography>
          <TextField
            size="small"
            required
            name="rut"
            sx={textFields}
            id="outlined-basic"
            label="Rut"
            variant="outlined"
            value={values?.rut}
            onChange={handleInputChange}
          />
        </Box>
        <Box
          my={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            textAlign="center"
            sx={{ color: "#fff" }}
          >
            Contraseña
          </Typography>
          <TextField
            size="small"
            required
            name="password"
            sx={textFields}
            id="outlined-basic"
            label="Contraseña"
            variant="outlined"
            type="password"
            value={values?.password}
            onChange={handleInputChange}
          />
        </Box>
        <Box
          my={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            textAlign="center"
            sx={{ color: "#fff" }}
          >
            Email
          </Typography>
          <TextField
            required
            name="email"
            sx={textFields}
            size="small"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            value={values?.email}
            onChange={handleInputChange}
          />
        </Box>
        <Box mt={4} mb={3} sx={boxButton}>
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
    </LayoutModal>
  );
};

export default Page;
