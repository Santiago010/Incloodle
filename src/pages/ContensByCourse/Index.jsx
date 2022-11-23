import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ModalCreateDocument from "../../components/ModalCreateDocument";
import ModalDeleteDocument from "../../components/ModalDeleteDocument";

import { useModal } from "../../hooks/useModal";
import {
  ChooseDocument,
  startGetDocumentsByCourse,
} from "../../redux/actions/teacherActions";
import Page from "./Page";

const IndexContenByCourse = () => {
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
  const { jwt } = useSelector((s) => s?.authReducer);
  const { data } = useSelector((s) => s?.teacherReducer);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleSeeContens = (link) => {
    console.log(link);
  };

  const handleDelete = (data) => {
    dispatch(ChooseDocument(data));
    handleOpenModalDelete();
  };

  useEffect(() => {
    dispatch(startGetDocumentsByCourse(jwt, id));
  }, []);

  return (
    <Page
      data={data}
      handleSeeContens={handleSeeContens}
      handleDelete={handleDelete}
      handleCreate={handleOpenModalCreate}
      fragmentModals={
        <>
          <ModalDeleteDocument
            isOpen={isOpenModalDelete}
            handleOnClose={handleCloseModalDelete}
          />
          <ModalCreateDocument
            isOpen={isOpenModalCreate}
            handleOnClose={handleCloseModalCreate}
          />
        </>
      }
    />
  );
};

export default IndexContenByCourse;
