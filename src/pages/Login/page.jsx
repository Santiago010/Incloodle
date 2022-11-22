import React from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Box, CircularProgress } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

const Page = ({ values, loading, handleOnSubmit, handleInputChange }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100vh",
      background:
        "linear-gradient(180deg, rgba(75,70,184,1) 34%, rgba(3,167,192,1) 66%, rgba(255,255,255,1) 90%)",
      justifyContent: "space-evenly",
    }}
  >
    <Box>
      <Typography
        variant="h3"
        component="h3"
        textAlign="center"
        sx={{
          marginBotton: 60,
          color: "#ffffff",
          fontWeight: 700,
        }}
      >
        Bienvenid@ a Incloodle
      </Typography>
      <Typography
        variant="h6"
        component="h6"
        textAlign={"center"}
        sx={{
          color: "#ffffff",
          fontWeight: 300,
        }}
      >
        Plataforma para toma de evaluaciones
      </Typography>
    </Box>
    <form
      style={{
        width: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "43px",
        marginTop: "40px",
      }}
      onSubmit={handleOnSubmit}
    >
      <Typography
        variant="h4"
        component="h4"
        textAlign={"center"}
        sx={{
          color: "#000",
          fontWeight: 700,
        }}
      >
        Login
      </Typography>
      <Typography
        variant="h6"
        component="h6"
        textAlign={"center"}
        sx={{
          color: "#686666",
        }}
      >
        Ingrese sus Credenciales
      </Typography>
      <TextField
        required
        type="email"
        fullWidth
        label="Email"
        id="fullWidth"
        variant="outlined"
        sx={{
          marginY: "10px",
        }}
        name="email"
        value={values?.email ?? ""}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        required
        type="password"
        label="Password"
        id="fullWidth"
        variant="outlined"
        sx={{
          marginY: "10px",
        }}
        name="password"
        value={values?.password ?? ""}
        onChange={handleInputChange}
      />
      <FormControlLabel
        onChange={(ev) => {
          let value = ev.target.checked ? 1 : 0;
          handleInputChange({
            target: {
              name: "checked",
              value: value,
            },
          });
        }}
        control={<Checkbox defaultChecked />}
        label="Recordar mis datos"
        value={values?.checked ?? 0}
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <Button
          sx={{
            marginTop: "10px",
          }}
          type="submit"
          variant="contained"
          disabled={loading}
        >
          INGRESAR
        </Button>
      )}
    </form>
    <Typography
      variant="h6"
      component="h6"
      textAlign={"center"}
      sx={{
        marginTop: "40px",
        fontWeight: 300,
      }}
    >
      Incloodle | Fomentando la Inclusión
    </Typography>
  </Box>
);

export default Page;
