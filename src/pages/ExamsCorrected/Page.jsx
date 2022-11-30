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
import EmptyListParagraph from "../../components/EmptyListParagraph";

const Page = ({ data, handleSeeCorrections }) => {
  const { loading } = useSelector((s) => s?.uiReducer);
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
        {loading ? (
          <CircularProgress />
        ) : data.length === 0 ? (
          <EmptyListParagraph emptyList={"examenes corregidos"} />
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
                    Examen: {data.name}
                  </Typography>
                  <Typography mx={10} variant="h6" component="p">
                    Nota: {data.score}
                  </Typography>
                </ListItemButton>

                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  <Button onClick={() => handleSeeCorrections(data)}>
                    Ver correciones
                  </Button>
                </ButtonGroup>
              </ListItem>
            );
          })
        )}
      </List>
    </>
  );
};

export default Page;
