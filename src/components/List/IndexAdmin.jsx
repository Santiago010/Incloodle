import React, { useEffect } from "react";
import ContainerFiltersForAdmin from "../ContainerFiltersForAdmin";
import Page from "./Page";
import { useModal } from "../../hooks/useModal";
import { useDispatch, useSelector } from "react-redux";
import {
  StartGetProfile,
  ChoosenProfile,
} from "../../redux/actions/profileActions";
import ModalEditProfile from "../ModalEditProfile";
import ModalDelete from "../ModalDelete";
import ModalCreateProfile from "../ModalCreateProfile";

export const IndexAdmin = () => {
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
  const { data, profile } = useSelector((s) => s?.profileReducer);

  const handleEditProfile = (profile) => {
    dispatch(ChoosenProfile(profile));
    handleOpenModalEdit();
  };

  const handleDeleteProfile = (profile) => {
    dispatch(ChoosenProfile(profile));
    handleOpenModalDelete();
  };

  useEffect(() => {
    dispatch(StartGetProfile(jwt));
  }, []);

  return (
    <Page
      containerFilters={<ContainerFiltersForAdmin />}
      dataProfiles={data}
      paragraphBtnAdd={"Agregar Usuario"}
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
          <ModalDelete
            isOpen={isOpenModalDelete}
            handleOnClose={handleCloseModalDelete}
            profile={profile}
          />
        </>
      }
      handleEdit={handleEditProfile}
      handleCreate={handleOpenModalCreate}
      handleDelete={handleDeleteProfile}
    />
  );
};
