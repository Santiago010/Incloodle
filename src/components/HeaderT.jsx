import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { OptionsAdmin, OptionsStudents, OptionsTeacher } from "./OptionsHeader";

const HeaderT = ({ dataRol }) => {
  const OptionsRol = () => {
    if (dataRol.rol === 0) {
      return <OptionsAdmin />;
    } else if (dataRol.rol === 1) {
      return <OptionsTeacher />;
    } else if (dataRol.rol === 2) {
      return <OptionsStudents />;
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingX: "10px",
        paddingY: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          alt={dataRol?.name}
          sx={{
            marginRight: "10px",
          }}
        />
        <Typography
          variant="h6"
          component="h6"
          sx={{
            color: "#4B46B8",
            top: "40%",
            left: "40%",
            background:
              "linear-gradient(90deg, #4B46B8 11.75%, #03A7C0 78.25%)",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
          }}
        >
          {dataRol?.name}
        </Typography>
      </Box>
      <Box>
        <OptionsRol />
      </Box>
    </Box>
  );
};

export default HeaderT;
