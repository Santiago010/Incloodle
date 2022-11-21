import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  ButtonGroup,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { listItem } from "./styles/stylesList";

const ListItemStudent = ({
  data,
  handleEvaluateStudent,
  handleReportStudent,
  handleDelete,
}) => {
  return (
    <ListItem sx={listItem}>
      <ListItemButton
        sx={{
          width: "70%",
        }}
        dense={true}
      >
        <Typography variant="h6" component="p">
          {data.name}
        </Typography>
      </ListItemButton>

      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => handleEvaluateStudent()}>EVALUAR</Button>
        <Button onClick={() => handleReportStudent()}>REPORTAR</Button>
        <Button onClick={() => handleDelete(data)}>ELIMINAR</Button>
      </ButtonGroup>
    </ListItem>
  );
};

export default ListItemStudent;

ListItemStudent.propTypes = {
  data: PropTypes.shape({
    student_id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    rut: PropTypes.string,
    rol: PropTypes.number,
  }).isRequired,
  handleEvaluateStudent: PropTypes.func.isRequired,
  handleReportStudent: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
