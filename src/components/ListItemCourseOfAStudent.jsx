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

const ListItemCourseOfAStudent = ({ data, handleSeeMaterial }) => {
  return (
    <ListItem sx={listItem}>
      <ListItemButton
        sx={{
          minWidth: "35%",
          maxWidth: "70%",
        }}
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
        <Button onClick={() => handleSeeMaterial(data)}>INGRESAR</Button>
      </ButtonGroup>
    </ListItem>
  );
};

export default ListItemCourseOfAStudent;

ListItemCourseOfAStudent.propTypes = {
  data: PropTypes.shape({
    enrollment_id: PropTypes.number,
    course_id: PropTypes.number,
    student_id: PropTypes.number,
    name: PropTypes.string,
    period: PropTypes.string,
    final_score: PropTypes.string,
    teacher_id: PropTypes.number,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }),
  handleSeeMaterial: PropTypes.func.isRequired,
};
