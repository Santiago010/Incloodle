import { Box } from "@mui/material";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import {
  OptionsAdmin,
  OptionsTeacher,
  OptionsStudents,
} from "../components/OptionsHeader";
import { IndexTeacher } from "../components/List/IndexTeacher";
import { IndexAdmin } from "../components/List/IndexAdmin";
import { IndexStudent } from "../components/List/IndexStudent";

const Dashboard = () => {
  const [dataJwt, setDataJwt] = useState({});
  useEffect(() => {
    let jwt = localStorage.getItem("jwt");
    let dataJwt = JSON.parse(atob(jwt.split(".")[1]));
    setDataJwt(dataJwt);
  }, []);

  const Content = () => {
    if (dataJwt.rol === 0) {
      return (
        <>
          <Header name={dataJwt.name}>
            <OptionsAdmin />
          </Header>
          <IndexAdmin />
        </>
      );
    } else if (dataJwt.rol === 1) {
      return (
        <>
          <Header name={dataJwt.name}>
            <OptionsTeacher />
          </Header>
          <IndexTeacher />
        </>
      );
    } else if (dataJwt.rol === 2) {
      return (
        <>
          <Header name={dataJwt.name}>
            <OptionsStudents />
          </Header>
          <IndexStudent />
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
