import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import React, { useEffect } from "react";
import useForm from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { StartLogin } from "../redux/actions/authActions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, handleInputChange, resetValues] = useForm({
    email: "",
    password: "",
    checked: 0,
  });

  const { email, password, checked } = values;

  const handleOnSubmit = async (ev) => {
    ev.preventDefault();
    // console.log(values);
    dispatch(StartLogin(values));
  };

  useEffect(() => {
    // const token = window.localStorage.getItem("jwt");
    // if (!token) return;
    // navigate("/");
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        background:
          "linear-gradient(180deg, rgba(75,70,184,1) 34%, rgba(3,167,192,1) 66%, rgba(255,255,255,1) 90%)",
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        textAlign={"center"}
        sx={{
          marginTop: "60px",
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
        onSubmit={(ev) => handleOnSubmit(ev)}
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
          label="email"
          id="fullWidth"
          variant="outlined"
          sx={{
            marginY: "10px",
          }}
          name="email"
          value={email}
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
          value={password}
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
          value={checked}
        />
        <Button type="submit" variant="contained">
          INGRESAR
        </Button>
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
};

export default Login;
