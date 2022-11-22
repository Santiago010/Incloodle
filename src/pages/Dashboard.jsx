import { Box } from "@mui/material";
import Header from "../components/Header";
import { IndexTeacher } from "../components/List/IndexTeacher";
import { IndexAdmin } from "../components/List/IndexAdmin";
import { IndexStudent } from "../components/List/IndexStudent";
import {
  OptionsAdmin,
  OptionsTeacher,
  OptionsStudents,
} from "../components/OptionsHeader";
import { jwtToObject } from "../utils/jwt";

const Dashboard = () => {
  const jwtPayload = jwtToObject();

  const Content = () => {
    if (jwtPayload?.rol === 0) {
      return (
        <>
          <Header name={jwtPayload?.name}>
            <OptionsAdmin />
          </Header>
          <IndexAdmin />
        </>
      );
    } else if (jwtPayload?.rol === 1) {
      return (
        <>
          <Header name={jwtPayload?.name}>
            <OptionsTeacher />
          </Header>
          <IndexTeacher />
        </>
      );
    } else if (jwtPayload?.rol === 2) {
      return (
        <>
          <Header name={jwtPayload?.name}>
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
