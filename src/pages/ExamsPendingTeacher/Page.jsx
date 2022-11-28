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
import { FiltersBypendingExam } from "../../components/ContainersFiltersForTeacher";
import EmptyListParagraph from "../../components/EmptyListParagraph";

const Page = ({ data, handleExamcorrected, fragementModals }) => {
  const { loading } = useSelector((s) => s?.uiReducer);
  console.log(data);
  return (
    <>
      <FiltersBypendingExam />
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
                key={`${data.studentExam_id}-${data.exam_name}`}
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
                    Examen: {data.exam_name}
                  </Typography>
                  <Typography mx={10} variant="h6" component="p">
                    Respuestas de: {data.student_name}
                  </Typography>
                </ListItemButton>

                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  <Button onClick={() => handleExamcorrected(data)}>
                    Ver sus respuestas
                  </Button>
                </ButtonGroup>
              </ListItem>
            );
          })
        )}
      </List>
      {fragementModals}
    </>
  );
};

export default Page;
