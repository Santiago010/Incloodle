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
  type,
  setType,
  handleFileSelect,
  document,
}) => {
  return (
    <LayoutModal
      isOpen={isOpen}
      handleOnClose={handleOnClose}
      title="Agregar Material"
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
            Nombre
          </Typography>
          <TextField
            size="small"
            required
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
            Tipo
          </Typography>
          <Select
            required
            name="type"
            size="small"
            sx={{
              ...textFields,
              minWidth: 230,
              backgroundColor: "#ffffff",
            }}
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Filtrar Por"
            onChange={(ev) => setType(ev.target.value)}
            value={type}
          >
            <MenuItem value="">
              <em></em>
            </MenuItem>
            <MenuItem value={0}>Documento</MenuItem>
            <MenuItem value={1}>Examen</MenuItem>
          </Select>
        </Box>
        {type === 1 && (
          <>
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
                # preguntas
              </Typography>
              <TextField
                size="small"
                required
                type="number"
                sx={textFields}
                id="outlined-basic"
                variant="outlined"
                name="numberQuestions"
                value={values?.numberQuestions}
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
                Puntaje Total
              </Typography>
              <TextField
                size="small"
                required
                type="number"
                sx={textFields}
                id="outlined-basic"
                variant="outlined"
                name="maxScore"
                value={values?.maxScore}
                onChange={handleInputChange}
              />
            </Box>
          </>
        )}

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
            Archivo
          </Typography>
          <Button
            sx={{
              minWidth: 230,
            }}
            variant="contained"
            component="label"
          >
            {!document ? "Upload File" : document.name}
            <input
              required
              accept=".pdf"
              name="document"
              onChange={(ev) => handleFileSelect(ev)}
              type="file"
              hidden
            />
          </Button>
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
