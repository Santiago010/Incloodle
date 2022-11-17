import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import OptionsAdmin from "./OptionsAdmin";

const Header = ({ children }) => {
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
          alt="Dominique"
          src="../assets/profileImg.png"
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
          Dominique
        </Typography>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default Header;
