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

const ListItemProfile = ({ data, handleEdit, handleDelete }) => {
  return (
    <ListItem sx={listItem}>
      <ListItemButton
        sx={{
          width: "70%",
        }}
        dense={true}
      >
        <Typography variant="h6" component="p">
          {`${data.name} - (${data.rol === 1 ? "Profesor" : "Estudiante"})`}
        </Typography>
      </ListItemButton>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => handleEdit(data)}>EDITAR</Button>
        <Button onClick={() => handleDelete(data)}>ELIMINAR</Button>
      </ButtonGroup>
    </ListItem>
  );
};

export default ListItemProfile;

ListItemProfile.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    teacher_id: PropTypes.number,
    student_id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    rut: PropTypes.string,
    rol: PropTypes.number,
  }).isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
