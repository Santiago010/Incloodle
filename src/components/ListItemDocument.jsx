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

const ListItemDocument = ({
  data,
  handleSeeDocumentOrExam,
  handleDelete,
  showButtonDelete,
}) => {
  return (
    <ListItem sx={listItem}>
      <ListItemButton
        sx={{
          width: "70%",
        }}
        onClick={() => {}}
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
        <Button onClick={() => handleSeeDocumentOrExam(data.link)}>Ver</Button>
        {showButtonDelete && (
          <Button onClick={() => handleDelete(data)}>ELIMINAR</Button>
        )}
      </ButtonGroup>
    </ListItem>
  );
};

export default ListItemDocument;

ListItemDocument.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    exam_id: PropTypes.number,
    document_id: PropTypes.number,
    name: PropTypes.string,
    link: PropTypes.string,
    type: PropTypes.number,
    is_pendient: PropTypes.number,
    score: PropTypes.string,
    num_of_questions: PropTypes.number,
    init_date: PropTypes.string,
    finish_date: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    course_id: PropTypes.number,
  }).isRequired,
  handleSeeDocumentOrExam: PropTypes.func.isRequired,
  handleDelete: PropTypes.func,
  showButtonDelete: PropTypes.bool,
};
