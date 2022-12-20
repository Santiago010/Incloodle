import React, { useEffect } from "react";
import IndexModalCreatePeriod from "../../components/ModalCreatePeriod/Index";
import Page from "./Page";
import { useModal } from "../../hooks/useModal";
import { useDispatch, useSelector } from "react-redux";
import {
  StartGetPeriods,
  ChoosenPeriod,
} from "../../redux/actions/profileActions";
import IndexModalDeletePeriod from "../../components/ModalDeletePeriod/Index";
import IndexModalEditPeriod from "../../components/ModalEditPeriod/Index";

const IndexPeriods = () => {
  const {
    isOpen: isOpenModalCreate,
    handleOpenModal: handleOpenModalCreate,
    handleCloseModal: handleCloseModalCreate,
  } = useModal();
  const {
    isOpen: isOpenModalDelete,
    handleOpenModal: handleOpenModalDelete,
    handleCloseModal: handleCloseModalDelete,
  } = useModal();
  const {
    isOpen: isOpenModalEdit,
    handleOpenModal: handleOpenModalEdit,
    handleCloseModal: handleCloseModalEdit,
  } = useModal();

  const { periods, period } = useSelector((s) => s?.profileReducer);
  const dispatch = useDispatch();

  const handleCreate = () => {
    handleOpenModalCreate();
  };
  const handleDelete = (data) => {
    dispatch(ChoosenPeriod(data));
    handleOpenModalDelete();
  };
  const handleEdit = (data) => {
    dispatch(ChoosenPeriod(data));
    handleOpenModalEdit();
  };

  useEffect(() => {
    dispatch(StartGetPeriods());
  }, []);

  return (
    <Page
      data={periods}
      handleCreate={handleCreate}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      fragmentModals={
        <>
          <IndexModalCreatePeriod
            isOpen={isOpenModalCreate}
            handleOnClose={handleCloseModalCreate}
          />
          <IndexModalDeletePeriod
            isOpen={isOpenModalDelete}
            handleOnClose={handleCloseModalDelete}
            period={period}
          />
          <IndexModalEditPeriod
            isOpen={isOpenModalEdit}
            handleOnClose={handleCloseModalEdit}
            period={period}
          />
        </>
      }
    />
  );
};

export default IndexPeriods;
