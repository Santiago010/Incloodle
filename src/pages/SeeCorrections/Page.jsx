import {
  Button,
  ButtonGroup,
  CircularProgress,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import EmptyListParagraph from "../../components/EmptyListParagraph";

const Page = ({ data, handleSeeExam, score, exam }) => {
  const { loading } = useSelector((s) => s?.uiReducer);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          marginY: "10px",
          overflowX: "hidden",
          overflowY: "scroll",
          height: "80%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <object data={exam} type="application/pdf" width="50%" height="100%">
          <p>
            Alternative text - include a link
            <a href={exam}>to the PDF!</a>
          </p>
        </object>
        <List
          sx={{
            overflowX: "hidden",
            height: "100%%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {loading ? (
            <CircularProgress />
          ) : data.length === 0 ? (
            <EmptyListParagraph emptyList={"Respuestas"} />
          ) : (
            data.map((data, index) => {
              return (
                <ListItem
                  key={data.answer_id}
                  sx={{
                    display: "flex",
                    overflow: "hidden",
                    justifyContent: "center",
                  }}
                >
                  <Typography mx={10} component="h6" variant="h6">
                    Pregunta {data.question_id}
                  </Typography>
                  <Box>
                    <TextField
                      mx={10}
                      id="standard-basic"
                      label={`Respuesta Pregunta ${data.question_id}`}
                      multiline
                      maxRows={4}
                      variant="outlined"
                      disabled
                      value={data.answer_text}
                    />
                    {data.is_correct === 1 ? (
                      <Button disabled startIcon={<CheckIcon />}></Button>
                    ) : (
                      <Button disabled startIcon={<CloseIcon />}></Button>
                    )}
                  </Box>
                </ListItem>
              );
            })
          )}
        </List>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <ButtonGroup variant="contained">
          <form>
            <input
              disabled
              name="qualification"
              value={score}
              required
              type="number"
              min="10"
              max="50"
              variant="outlined"
              size="small"
              placeholder="Calificación"
              id="standard-basic"
              style={{
                backgroundColor: "#fff",
                padding: "10px",
                borderColor: "#fff",
              }}
            />
          </form>
          <Button
            startIcon={<VisibilityIcon />}
            onClick={() => handleSeeExam()}
          >
            VER EXAMEN
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default Page;
