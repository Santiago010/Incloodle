import {
  Button,
  CircularProgress,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
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
  periods,
  careers,
}) => {
  return (
    <LayoutModal
      isOpen={isOpen}
      handleOnClose={handleOnClose}
      title="Agregar Curso"
    >
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
            Nombre curso
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
            Periodo
          </Typography>
          {periods.length === 0 ? (
            <CircularProgress />
          ) : (
            <Select
              required
              name="period"
              size="small"
              value={values?.period}
              displayEmpty
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Periodos"
              onChange={handleInputChange}
              sx={{
                ...textFields,
                minWidth: 230,
                backgroundColor: "#ffffff",
              }}
            >
              {periods.map((period) => (
                <MenuItem value={period.name}>{period.name}</MenuItem>
              ))}
            </Select>
          )}
        </Box>
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
            Carrera
          </Typography>
          {careers.length === 0 ? (
            <CircularProgress />
          ) : (
            <Select
              required
              name="career"
              size="small"
              value={values?.career}
              displayEmpty
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Carreras"
              onChange={handleInputChange}
              sx={{
                ...textFields,
                minWidth: 230,
                backgroundColor: "#ffffff",
              }}
            >
              {careers.map((career) => (
                <MenuItem value={career.name}>{career.name}</MenuItem>
              ))}
            </Select>
          )}
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
