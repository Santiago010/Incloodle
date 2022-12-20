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
import OutboxIcon from "@mui/icons-material/Outbox";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import EmptyListParagraph from "../../components/EmptyListParagraph";

const Page = ({
  correctionsAnswer,
  handleCorrectionsAnswer,
  values,
  handleInputChange,
  data,
  handleSendCorrectionAnswer,
  handleSeeExam,
  handleOnSubmit,
  fragementModals,
  exam,
}) => {
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
        <object data={exam} type="application/pdf" width="40%" height="100%">
          <Typography variant="h6" component="h6">
            No se pudo mostrar el exam
            <a href={exam}>Ir al examen</a>
          </Typography>
        </object>
        <List
          sx={{
            overflowX: "hidden",
            height: "100%",
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
              let comment = `comment${index + 1}`;
              let score = `score${index + 1}`;
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
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
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
                    <TextField
                      type="text"
                      id="standard-basic"
                      label="Comentario"
                      variant="outlined"
                      required
                      name={comment}
                      value={correctionsAnswer[comment] ?? ""}
                      onChange={handleCorrectionsAnswer}
                    />
                    <TextField
                      type="number"
                      id="standard-basic"
                      label="Puntaje"
                      variant="outlined"
                      required
                      name={score}
                      value={correctionsAnswer[score] ?? ""}
                      onChange={handleCorrectionsAnswer}
                    />
                    <Button
                      startIcon={<CheckIcon />}
                      onClick={() =>
                        handleSendCorrectionAnswer(
                          index + 1,
                          data.answer_id,
                          1,
                          comment,
                          score
                        )
                      }
                    ></Button>
                    <Button
                      startIcon={<CloseIcon />}
                      onClick={() =>
                        handleSendCorrectionAnswer(
                          index + 1,
                          data.answer_id,
                          0,
                          comment,
                          score
                        )
                      }
                    ></Button>
                  </Box>
                </ListItem>
              );
            })
          )}
        </List>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <ButtonGroup variant="contained">
          <form onSubmit={handleOnSubmit}>
            <input
              name="qualification"
              disabled
              onChange={handleInputChange}
              value={values?.qualification}
              required
              type="number"
              min="10"
              variant="outlined"
              size="small"
              placeholder="Ingresar Calificación"
              id="standard-basic"
              style={{
                backgroundColor: "#fff",
                padding: "10px",
                borderColor: "#fff",
              }}
            />
            <Button
              type="submit"
              startIcon={<OutboxIcon />}
              sx={{
                height: "100%",
              }}
            >
              ENVIAR CORRECIÓN
            </Button>
          </form>
          <Button
            startIcon={<VisibilityIcon />}
            onClick={() => handleSeeExam()}
          >
            VER EXAMEN
          </Button>
        </ButtonGroup>
        {fragementModals}
      </Box>
    </>
  );
};

export default Page;
