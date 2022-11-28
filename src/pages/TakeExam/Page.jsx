import {
  Button,
  ButtonGroup,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import OutboxIcon from "@mui/icons-material/Outbox";
import StopIcon from "@mui/icons-material/Stop";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const Page = ({
  data,
  handleSeeExam,
  values,
  handleSendExam,
  fragementModals,
  handleStartRecord,
  handleStopRecord,
  handleReadAnswer,
}) => {
  return (
    <>
      <List
        sx={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          marginY: "10px",
          overflowX: "hidden",
          overflowY: "scroll",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {data.map((field) => {
          let name = `response${field}`;
          return (
            <ListItem
              key={field}
              sx={{
                display: "flex",
                overflow: "hidden",
                justifyContent: "center",
              }}
            >
              <Typography mx={10} component="h6" variant="h6">
                Pregunta {field}
              </Typography>
              <TextField
                disabled
                required
                mx={10}
                name={name}
                id="standard-basic"
                label={`Respuesta ${field}`}
                multiline
                maxRows={4}
                variant="standard"
                value={values?.[name] ?? ""}
              />
              <ButtonGroup>
                <IconButton
                  sx={{
                    background: "#1976d2",
                    marginX: "5px",
                  }}
                  onClick={() => handleStartRecord(name)}
                >
                  <KeyboardVoiceIcon />
                </IconButton>
                <IconButton
                  sx={{
                    background: "#1976d2",
                    marginX: "5px",
                  }}
                  onClick={() => handleStopRecord()}
                >
                  <StopIcon />
                </IconButton>
                <IconButton
                  sx={{
                    background: "#1976d2",
                    marginX: "5px",
                  }}
                  onClick={() => handleReadAnswer(name)}
                >
                  <VolumeUpIcon />
                </IconButton>
              </ButtonGroup>
            </ListItem>
          );
        })}
      </List>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <ButtonGroup variant="contained">
          <Button startIcon={<OutboxIcon />} onClick={() => handleSendExam()}>
            ENVIAR RESPUESTAS
          </Button>
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
