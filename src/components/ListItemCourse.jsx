import {
  Button,
  ButtonGroup,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import React from "react";
import { listItem } from "./styles/stylesList";
import PropTypes from "prop-types";

const ListItemCourse = ({
  data,
  handleSeeMaterial,
  handleEdit,
  handleDelete,
  handleSeeStudents,
}) => {
  return (
    <ListItem sx={listItem}>
      <ListItemButton
        sx={{
          minWidth: "35%",
          maxWidth: "70%",
        }}
        onClick={() => {}}
        dense={true}
      >
        <Typography variant="h6" component="p">
          {data.name}
        </Typography>
      </ListItemButton>
      <ListItemButton
        sx={{
          minWidth: "35%",
          maxWidth: "70%",
        }}
        onClick={() => {}}
        dense={true}
      >
        <Typography variant="h6" component="p">
          {data.period}
        </Typography>
      </ListItemButton>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => handleSeeStudents(data)}>VER ESTUDIANTES</Button>
        <Button onClick={() => handleSeeMaterial(data)}>INGRESAR</Button>
        <Button onClick={() => handleEdit(data)}>EDITAR</Button>
        <Button onClick={() => handleDelete(data)}>ELIMINAR</Button>
      </ButtonGroup>
    </ListItem>
  );
};

export default ListItemCourse;

ListItemCourse.propTypes = {
  data: PropTypes.shape({
    course_id: PropTypes.number,
    name: PropTypes.string,
    period: PropTypes.string,
    final_score: PropTypes.number,
    teacher_id: PropTypes.number,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }).isRequired,
  handleSeeMaterial: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleSeeStudents: PropTypes.func.isRequired,
};
