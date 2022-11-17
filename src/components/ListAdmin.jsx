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
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import ModalEditProfile from "./ModalEditProfile";
import ModalCreateProfile from "./ModalCreateProfile";
import ModalDelete from "./ModalDelete";
import {
  StartGetProfile,
  ChoosenProfile,
} from "../redux/actions/profileActions";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { BoxPrincipal, listData, listItem } from "./styles/stylesList";
import ContainerFiltersForAdmin from "./ContainerFiltersForAdmin";

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

  return (
    <Box sx={BoxPrincipal}>
      <ContainerFiltersForAdmin />
      <List sx={listData}>
        {data.length === 0 ? (
          <CircularProgress />
        ) : (
          data.map(({ id, email, name, rol, rut }) => {
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
                    onClick={() => {
                      dispatch(ChoosenProfile({ id, email, name, rol, rut }));
                      handleOpenModalEdit();
                    }}
                  >
                    EDITAR
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(ChoosenProfile({ id, email, name, rol, rut }));
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
