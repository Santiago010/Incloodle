import { Typography } from "@mui/material";
import React from "react";

const EmptyListParagraph = ({ emptyList }) => {
  return (
    <Typography
      variant="h6"
      component="h6"
      sx={{ color: "#4B46B8", margin: "20px" }}
    >
      Sin resultados de {emptyList}
    </Typography>
  );
};

export default EmptyListParagraph;
