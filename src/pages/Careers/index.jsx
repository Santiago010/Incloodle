import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ChoosenCareer,
  StartGetCareers,
} from "../../redux/actions/profileActions";
import Page from "./Page";
import { useModal } from "../../hooks/useModal";
import IndexModalCreateCareer from "../../components/ModalCreateCareer/Index";
import IndexModalDeleteCareer from "../../components/ModalDeleteCareer/Index";
import IndexModalEditCareer from "../../components/ModalEditCareer/Index";

const IndexCareers = () => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const { careers, career } = useSelector((s) => s?.profileReducer);
  const {
    isOpen: isOpenCreate,
    handleCloseModal: handleCloseModalCreate,
    handleOpenModal: hadleOpenModalCreate,
  } = useModal();
  const {
    isOpen: isOpenDelete,
    handleCloseModal: handleCloseModalDelete,
    handleOpenModal: handleOpenModalDelete,
  } = useModal();
  const {
    isOpen: isOpenEdit,
    handleCloseModal: handleCloseModalEdit,
    handleOpenModal: handleOpenModalEdit,
  } = useModal();
  const dispatch = useDispatch();
  const handleCreate = () => {
    hadleOpenModalCreate();
  };
  const handleDelete = (data) => {
    dispatch(ChoosenCareer(data));
    handleOpenModalDelete();
  };
  const handleEdit = (data) => {
    dispatch(ChoosenCareer(data));
    handleOpenModalEdit();
  };

  useEffect(() => {
    dispatch(StartGetCareers(jwt));
  }, []);

  return (
    <Page
      data={careers}
      handleCreate={handleCreate}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      fragmentModals={
        <>
          <IndexModalCreateCareer
            isOpen={isOpenCreate}
            handleOnClose={handleCloseModalCreate}
          />
          <IndexModalDeleteCareer
            isOpen={isOpenDelete}
            handleOnClose={handleCloseModalDelete}
            career={career}
          />
          <IndexModalEditCareer
            isOpen={isOpenEdit}
            handleOnClose={handleCloseModalEdit}
            career={career}
          />
        </>
      }
    />
  );
};

export default IndexCareers;
