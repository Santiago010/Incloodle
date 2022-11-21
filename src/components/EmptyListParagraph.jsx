import { Typography } from "@mui/material";
import React from "react";

const EmptyListParagraph = ({ emptyList }) => {
  return (
    <Typography sx={{ color: "#4B46B8" }}>¡Aun no hay {emptyList}!</Typography>
  );
};

export default EmptyListParagraph;
