import { Box } from "@mui/material";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import OptionsAdmin from "../components/OptionsAdmin";
import OptionsTeacher from "../components/OptionsTeacher";
import { IndexTeacher } from "../components/List/IndexTeacher";
import { IndexAdmin } from "../components/List/IndexAdmin";

const Dashboard = () => {
  const [rol, setRol] = useState(null);
  useEffect(() => {
    let jwt = localStorage.getItem("jwt");
    let dataJwt = JSON.parse(atob(jwt.split(".")[1]));
    setRol(dataJwt.rol);
  }, []);

  const Content = () => {
    if (rol === 0) {
      return (
        <>
          <Header>
            <OptionsAdmin />
          </Header>
          <IndexAdmin />
        </>
      );
    } else if (rol === 1) {
      return (
        <>
          <Header>
            <OptionsTeacher />
          </Header>
          <IndexTeacher />
        </>
      );
    }
  };
  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(90.03deg, #4B46B8 0.02%, #03A7C0 99.97%)",
        overflow: "hidden",
      }}
    >
      <Content />
    </Box>
  );
};

export default Dashboard;
