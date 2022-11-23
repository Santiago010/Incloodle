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
  const { data, course, document } = useSelector((s) => s?.teacherReducer);
  const { jwt } = useSelector((s) => s?.authReducer);
  const dispatch = useDispatch();

  const handleDelete = (data) => {
    dispatch(ChooseDocument(data));
    handleOpenModalDelete();
  };

  const handleSeeMaterial = (link) => {
    console.log(link);
    window.open(link);
  };

  useEffect(() => {
    dispatch(startGetDocumentsByCourse(jwt, id));
  }, []);

  return (
    <Page
      data={data}
      handleCreate={handleOpenModalCreate}
      handleDelete={handleDelete}
      handleSeeMaterial={handleSeeMaterial}
      fragmentModals={
        <>
          <ModalDeleteDocument
            isOpen={isOpenModalDelete}
            handleOnClose={handleCloseModalDelete}
            document={document}
          />
          <ModalCreateDocument
            isOpen={isOpenModalCreate}
            handleOnClose={handleCloseModalCreate}
            course={course}
          />
        </>
      }
    />
  );
};

export default IndexCourseTeacher;
