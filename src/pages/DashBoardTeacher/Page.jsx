import {
  Button,
  ButtonGroup,
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { FiltersByCourses } from "../../components/ContainersFiltersForTeacher";
import EmptyListParagraph from "../../components/EmptyListParagraph";
import AddIcon from "@mui/icons-material/Add";

const Page = ({
  data,
  handleSeeMaterial,
  handleEdit,
  handleDelete,
  handleCreate,
  fragmentModals,
}) => {
  const { loading } = useSelector((s) => s?.uiReducer);
  return (
    <>
      <FiltersByCourses />
      <List
        sx={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          marginY: "10px",
          overflowX: "hidden",
          overflowY: "scroll",
          height: "80%",
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : data.length === 0 ? (
          <EmptyListParagraph emptyList={"cursos"} />
        ) : (
          data.map((data) => {
            return (
              <ListItem
                key={`${data.course_id}-${data.name}`}
                sx={{
                  borderBottom: "2px solid #DFDFDF",
                  display: "flex",
                  overflow: "hidden",
                }}
              >
                <ListItemButton
                  sx={{
                    width: "50px",
                  }}
                  dense={true}
                >
                  <Typography variant="h6" component="p">
                    {data.name}
                  </Typography>
                </ListItemButton>
                <ListItemButton dense={true}>
                  <Typography variant="h6" component="p">
                    {data.period}
                  </Typography>
                </ListItemButton>
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  <Button onClick={() => handleSeeMaterial(data)}>
                    INGRESAR
                  </Button>
                  <Button onClick={() => handleEdit(data)}>EDITAR</Button>
                  <Button onClick={() => handleDelete(data)}>ELIMINAR</Button>
                </ButtonGroup>
              </ListItem>
            );
          })
        )}
      </List>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          onClick={() => handleCreate()}
        >
          Agregar Curso
        </Button>
        {fragmentModals}
      </Box>
    </>
  );
};

export default Page;
