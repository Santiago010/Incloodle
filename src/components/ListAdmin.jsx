import {
  Box,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import ModalEditProfile from "./ModalEditProfile";
import ModalCreateProfile from "./ModalCreateProfile";
import ModalDelete from "./ModalDelete";
import {
  StartGetProfile,
  ChosenProfile,
} from "../redux/actions/profileActions";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

const ListAdmin = () => {
  const [isOpenModalEdit, setisOpenModalEdit] = useState(false);
  const [isOpenModalDelete, setisOpenModalDelete] = useState(false);
  const [isOpenModalCreate, setisOpenModalCreate] = useState(false);
  const dispatch = useDispatch();
  const { jwt } = useSelector((s) => s?.authReducer);
  const { data } = useSelector((s) => s?.profileReducer);
  const { profile } = useSelector((s) => s?.profileReducer);

  const handleOpenModalEdit = () => {
    setisOpenModalEdit(true);
  };

  const handleModalCloseEdit = () => {
    setisOpenModalEdit(false);
  };
  const handleOpenModalDelete = () => {
    setisOpenModalDelete(true);
  };

  const handleModalCloseDelete = () => {
    setisOpenModalDelete(false);
  };
  const handleOpenModalCreate = () => {
    setisOpenModalCreate(true);
  };

  const handleModalCloseCreate = () => {
    setisOpenModalCreate(false);
  };

  useEffect(() => {
    dispatch(StartGetProfile(jwt));
  }, []);

  useEffect(() => {
    console.log(profile);
  }, [profile]);

  return (
    <Box
      sx={{
        height: "calc(100vh - 80px)",
        paddingX: "50px",
        paddingY: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          maxHeight: "10%",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
          }}
          variant="h5"
          component="h5"
        >
          Administrar perfiles
        </Typography>
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "85%",
            justifyContent: "space-between",
          }}
          size="small"
        >
          <InputLabel
            sx={{ marginLeft: "30px" }}
            id="demo-simple-select-helper-label"
          >
            Filtrar Por
          </InputLabel>
          <Select
            name="rol"
            onChange={(ev) => console.log(ev.target.value)}
            sx={{
              marginLeft: "30px",
              backgroundColor: "#fff",
              width: "30%",
            }}
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Filtrar Por"
          >
            <MenuItem value={"Todos"}>Todos</MenuItem>
            <MenuItem value={"Estudiante"}>Estudiante</MenuItem>
            <MenuItem value={"Profesor"}>Profesor</MenuItem>
          </Select>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              width: "50%",
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
          >
            <PersonSearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              id="input-with-sx"
              label="Ingrese nombre de usuario"
              variant="standard"
            />
          </Box>
        </FormControl>
      </Box>
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
        {data.length === 0 ? (
          <CircularProgress />
        ) : (
          data.map(({ id, email, name, rol, rut }) => {
            return (
              <ListItem
                key={rut}
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
                  onClick={() => {
                    dispatch(ChosenProfile({ id, email, name, rol, rut }));
                  }}
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
                    onClick={() => {
                      dispatch(ChosenProfile({ id, email, name, rol, rut }));
                      handleOpenModalEdit();
                    }}
                  >
                    EDITAR
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(ChosenProfile({ id, email, name, rol, rut }));
                      handleOpenModalDelete();
                    }}
                  >
                    ELIMINAR
                  </Button>
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
          onClick={handleOpenModalCreate}
        >
          Agregar usuario
        </Button>
      </Box>
      <ModalEditProfile
        isOpen={isOpenModalEdit}
        handleOnClose={handleModalCloseEdit}
        profile={profile}
      />
      <ModalDelete
        isOpen={isOpenModalDelete}
        handleOnClose={handleModalCloseDelete}
        profile={profile}
      />
      <ModalCreateProfile
        isOpen={isOpenModalCreate}
        handleOnClose={handleModalCloseCreate}
      />
    </Box>
  );
};

export default ListAdmin;
