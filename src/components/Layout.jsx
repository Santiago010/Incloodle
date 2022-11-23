import { Box } from "@mui/system";
import React from "react";
import { jwtToObject } from "../utils/jwt";
import HeaderT from "./HeaderT";

const Layout = ({ children }) => {
  const jwtPayload = jwtToObject();
  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(90.03deg, #4B46B8 0.02%, #03A7C0 99.97%)",
        overflow: "hidden",
      }}
    >
      <HeaderT dataRol={jwtPayload} />
      <Box
        sx={{
          height: "calc(100vh - 80px)",
          paddingX: "50px",
          paddingY: "30px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
