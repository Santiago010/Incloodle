import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IndexModalCreateDocument from "../../components/ModalCreateDocument/Index";
import IndexModalDeleteDocument from "../../components/ModalDeleteDocument/Index";
import { useModal } from "../../hooks/useModal";
import {
  ChooseDocument,
  startGetDocumentsByCourse,
} from "../../redux/actions/teacherActions";
import Page from "./Page";

const IndexCourseTeacher = () => {
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
  const { id } = useParams();
  const { dataDocuments, dataFiltered } = useSelector((s) => s?.teacherReducer);
  const { jwt } = useSelector((s) => s?.authReducer);
  const dispatch = useDispatch();

  const handleDelete = (data) => {
    dispatch(ChooseDocument(data));
    handleOpenModalDelete();
  };

  const handleSeeMaterial = (link) => {
    window.open(link);
  };

  useEffect(() => {
    dispatch(startGetDocumentsByCourse(jwt, id));
  }, []);

  return (
    <Page
      data={dataFiltered.length === 0 ? dataDocuments : dataFiltered}
      handleCreate={handleOpenModalCreate}
      handleDelete={handleDelete}
      handleSeeMaterial={handleSeeMaterial}
      fragmentModals={
        <>
          <IndexModalDeleteDocument
            isOpen={isOpenModalDelete}
            handleOnClose={handleCloseModalDelete}
          />
          <IndexModalCreateDocument
            isOpen={isOpenModalCreate}
            handleOnClose={handleCloseModalCreate}
          />
        </>
      }
    />
  );
};

export default IndexCourseTeacher;
