import {
  Button,
  ButtonGroup,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import OutboxIcon from "@mui/icons-material/Outbox";

const Page = ({
  data,
  handleSeeExam,
  values,
  handleInputChange,
  handleSendExam,
  fragementModals,
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
                required
                mx={10}
                name={name}
                id="standard-basic"
                label={`Respuesta ${field}`}
                multiline
                maxRows={4}
                variant="standard"
                value={values?.[name] ?? ""}
                onChange={handleInputChange}
              />
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
