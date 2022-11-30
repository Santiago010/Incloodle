import {
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  boxContainer,
  boxPrincipal,
  modalStyle,
  titleModal,
} from "../styles/stylesModals";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { useSelector } from "react-redux";
import EmptyListParagraph from "../EmptyListParagraph";

const Page = ({ isOpen, handleOnClose, report, student }) => {
  const { loading } = useSelector((s) => s?.uiReducer);

  return (
    <Modal open={isOpen} onClose={handleOnClose} sx={modalStyle}>
      <Box sx={boxPrincipal}>
        <Box sx={boxContainer}>
          <IconButton
            aria-label="delete"
            size="small"
            sx={{ alignSelf: "flex-end" }}
            onClick={handleOnClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
          <Typography
            variant="h6"
            component="h6"
            textAlign="center"
            sx={titleModal}
          >
            Reporte de {student.name}
          </Typography>
          <List
            sx={{
              background: "#fff",
              borderRadius: "10px",
              overflowY: "scroll",
              maxHeight: "500px",
            }}
          >
            {loading ? (
              <CircularProgress />
            ) : report.length === 0 ? (
              <EmptyListParagraph emptyList={"reportes"} />
            ) : (
              report.map((data) => {
                return (
                  <ListItem>
                    <ListItemText>
                      {data.name} - {data.score}
                    </ListItemText>
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableCell>respuesta</TableCell>
                          <TableCell>corrección</TableCell>
                        </TableHead>
                        <TableBody>
                          {data.answers.map((data) => {
                            return (
                              <TableRow>
                                <TableCell>{data.answer_text}</TableCell>
                                <TableCell>
                                  {data.is_correct === 1 ? (
                                    <CheckIcon />
                                  ) : (
                                    <CloseIcon />
                                  )}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </ListItem>
                );
              })
            )}
          </List>
        </Box>
      </Box>
    </Modal>
  );
};

export default Page;
