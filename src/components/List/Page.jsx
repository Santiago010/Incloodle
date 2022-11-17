import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import {
  BoxBtnAdd,
  BoxPrincipal,
  listData,
  listItem,
} from "../styles/stylesList";
import AddIcon from "@mui/icons-material/Add";

const Page = ({
  containerFilters,
  dataProfiles,
  dataCourses,
  dataDocuments,
  paragraphBtnAdd,
  fragmentModals,
  handleEdit,
  handleCreate,
  handleDelete,
  handleSeeMaterial,
}) => {
  const ChooseList = () => {
    if (dataProfiles && !dataCourses && !dataDocuments) {
      return dataProfiles.length === 0 ? (
        <CircularProgress />
      ) : (
        dataProfiles.map(({ id, email, name, rol, rut }) => {
          return (
            <ListItem key={rut} sx={listItem}>
              <ListItemButton
                sx={{
                  width: "70%",
                }}
                onClick={() => {}}
                dense={true}
              >
                <Typography variant="h6" component="p">
                  {name}
                </Typography>
              </ListItemButton>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button
                  onClick={() => handleEdit({ id, email, name, rol, rut })}
                >
                  EDITAR
                </Button>
                <Button
                  onClick={() => handleDelete({ id, email, name, rol, rut })}
                >
                  ELIMINAR
                </Button>
              </ButtonGroup>
            </ListItem>
          );
        })
      );
    } else if (dataCourses && !dataProfiles && !dataDocuments) {
      return dataCourses.length === 0 ? (
        <CircularProgress />
      ) : (
        dataCourses.map(
          ({
            course_id,
            name,
            period,
            final_score,
            teacher_id,
            createdAt,
            updatedAt,
          }) => {
            return (
              <ListItem key={course_id} sx={listItem}>
                <ListItemButton
                  sx={{
                    minWidth: "35%",
                    maxWidth: "70%",
                  }}
                  onClick={() => {}}
                  dense={true}
                >
                  <Typography variant="h6" component="p">
                    {name}
                  </Typography>
                </ListItemButton>
                <ListItemButton
                  sx={{
                    minWidth: "35%",
                    maxWidth: "70%",
                  }}
                  onClick={() => {}}
                  dense={true}
                >
                  <Typography variant="h6" component="p">
                    {period}
                  </Typography>
                </ListItemButton>
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  <Button
                    onClick={() =>
                      handleSeeMaterial({
                        course_id,
                        name,
                        period,
                        final_score,
                        teacher_id,
                        createdAt,
                        updatedAt,
                      })
                    }
                  >
                    INGRESAR
                  </Button>
                  <Button
                    onClick={() =>
                      handleEdit({
                        course_id,
                        name,
                        period,
                        final_score,
                        teacher_id,
                        createdAt,
                        updatedAt,
                      })
                    }
                  >
                    EDITAR
                  </Button>
                  <Button
                    onClick={() =>
                      handleDelete({
                        course_id,
                        name,
                        period,
                        final_score,
                        teacher_id,
                        createdAt,
                        updatedAt,
                      })
                    }
                  >
                    ELIMINAR
                  </Button>
                </ButtonGroup>
              </ListItem>
            );
          }
        )
      );
    } else if (dataDocuments && !dataCourses && !dataProfiles) {
      return dataDocuments.length === 0 ? (
        <CircularProgress />
      ) : (
        dataDocuments.map(({ document_id, name, link }) => {
          return (
            <ListItem key={document_id} sx={listItem}>
              <ListItemButton
                sx={{
                  width: "70%",
                }}
                onClick={() => {}}
                dense={true}
              >
                <Typography variant="h6" component="p">
                  {name}
                </Typography>
              </ListItemButton>

              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button onClick={() => {}}>Ver</Button>
                <Button
                  onClick={() => handleDelete({ document_id, name, link })}
                >
                  ELIMINAR
                </Button>
              </ButtonGroup>
            </ListItem>
          );
        })
      );
    }
  };
  return (
    <Box sx={BoxPrincipal}>
      {containerFilters}
      <List sx={listData}>
        <ChooseList />
      </List>
      <Box sx={BoxBtnAdd}>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          onClick={() => handleCreate()}
        >
          {paragraphBtnAdd}
        </Button>
      </Box>
      {fragmentModals}
    </Box>
  );
};

export default Page;

Page.propTypes = {
  containerFilters: PropTypes.node.isRequired,
  dataProfiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      teacher_id: PropTypes.number,
      student_id: PropTypes.number,
      email: PropTypes.string,
      name: PropTypes.string,
      rut: PropTypes.string,
      rol: PropTypes.number,
    })
  ),
  dataCourses: PropTypes.arrayOf(
    PropTypes.shape({
      course_id: PropTypes.number,
      name: PropTypes.string,
      period: PropTypes.string,
      final_score: PropTypes.number,
      teacher_id: PropTypes.number,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    })
  ),
  dataDocuments: PropTypes.arrayOf(
    PropTypes.shape({
      document_id: PropTypes.number,
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  paragraphBtnAdd: PropTypes.string.isRequired,
  fragmentModals: PropTypes.node.isRequired,
  handleEdit: PropTypes.func,
  handleCreate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleSeeMaterial: PropTypes.func,
};
