import {
  Button,
  ButtonGroup,
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { FiltersByStudents } from "../../components/ContainersFiltersForTeacher";
import EmptyListParagraph from "../../components/EmptyListParagraph";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";

const Page = ({
  data,
  handleEvaluateStudent,
  handleReportStudent,
  handleDelete,
  handleCreate,
  fragmentModals,
}) => {
  const { loading } = useSelector((s) => s?.uiReducer);
  return (
    <>
      <FiltersByStudents />
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
          <EmptyListParagraph emptyList={"estudiantes"} />
        ) : (
          data.map((data) => {
            return (
              <ListItem
                key={`${data.id}-${data.name}`}
                sx={{
                  borderBottom: "2px solid #DFDFDF",
                  display: "flex",
                  overflow: "hidden",
                }}
              >
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
                  <Button onClick={() => handleEvaluateStudent(data)}>
                    EVALUAR
                  </Button>
                  <Button onClick={() => handleReportStudent(data)}>
                    VER REPORTE
                  </Button>
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
          Agregar Estudiante
        </Button>
        {fragmentModals}
      </Box>
    </>
  );
};

export default Page;
