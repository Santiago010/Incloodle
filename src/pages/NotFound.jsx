import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(90.03deg, #4B46B8 0.02%, #03A7C0 99.97%)",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          background: "#fff",
          width: "50%",
          height: "50%",
          borderRadius: "10px",
          padding: "10px",
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ fontSize: "3em" }}
          textAlign="center"
          variant="h6"
          component="h6"
        >
          Not Found - 404
        </Typography>
        <Link to="/">HOME</Link>
      </Box>
    </Box>
  );
};

export default NotFound;
