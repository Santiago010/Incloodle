import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalCreateProfile from "../../components/ModalCreateProfile";
import ModalDeleteProfile from "../../components/ModalDeleteProfile";
import ModalEditProfile from "../../components/ModalEditProfile";
import { useModal } from "../../hooks/useModal";
import {
  ChoosenProfile,
  StartGetProfile,
} from "../../redux/actions/profileActions";
import Page from "./Page";

const IndexAdmin = () => {
  const {
    isOpen: isOpenModalEdit,
    handleOpenModal: handleOpenModalEdit,
    handleCloseModal: handleCloseModalEdit,
  } = useModal(false);
  const {
    isOpen: isOpenModalCreate,
    handleOpenModal: handleOpenModalCreate,
    handleCloseModal: handleCloseModalCreate,
  } = useModal(false);
  const {
    isOpen: isOpenModalDelete,
    handleOpenModal: handleOpenModalDelete,
    handleCloseModal: handleCloseModalDelete,
  } = useModal(false);
  const dispatch = useDispatch();
  const { jwt } = useSelector((s) => s?.authReducer);
  const { data, profile, dataFiltered } = useSelector((s) => s?.profileReducer);

  const handleEdit = (profile) => {
    dispatch(ChoosenProfile(profile));
    handleOpenModalEdit();
  };

  const handleDelete = (profile) => {
    dispatch(ChoosenProfile(profile));
    handleOpenModalDelete();
  };

  useEffect(() => {
    dispatch(StartGetProfile(jwt));
  }, []);

  return (
    <Page
      data={dataFiltered.length === 0 ? data : dataFiltered}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      handleCreate={handleOpenModalCreate}
      fragmentModals={
        <>
          <ModalEditProfile
            isOpen={isOpenModalEdit}
            handleOnClose={handleCloseModalEdit}
            profile={profile}
          />
          <ModalCreateProfile
            isOpen={isOpenModalCreate}
            handleOnClose={handleCloseModalCreate}
            profile={profile}
          />
          <ModalDeleteProfile
            isOpen={isOpenModalDelete}
            handleOnClose={handleCloseModalDelete}
            profile={profile}
          />
        </>
      }
    />
  );
};

export default IndexAdmin;
