import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../hooks/useModal";
import {
  StartGetCourses,
  ChoosenCourse,
  startGetDocumentsByCourse,
  ChooseDocument,
} from "../../redux/actions/teacherActions";
import {
  FiltersByCourses,
  FiltersByDocuments,
} from "../ContainersFiltersForTeacher";
import ModalCreateCourse from "../ModalCreateCourse";
import ModalCreateDocument from "../ModalCreateDocument";
import ModalDeleteCourse from "../ModalDeleteCourse";
import ModalDeleteDocument from "../ModalDeleteDocument";
import ModalEditCourse from "../ModalEditCourse";
import Page from "./Page";

export const IndexTeacher = () => {
  const {
    isOpen: isOpenModalEdit,
    handleOpenModal: handleOpenModalEdit,
    handleCloseModal: handleCloseModalEdit,
  } = useModal(false);
  const {
    isOpen: isOpenModalCreateCourse,
    handleOpenModal: handleOpenModalCreateCourse,
    handleCloseModal: handleCloseModalCreateCourse,
  } = useModal(false);
  const {
    isOpen: isOpenModalCreateDocument,
    handleOpenModal: handleOpenModalCreateDocument,
    handleCloseModal: handleCloseModalCreateDocument,
  } = useModal(false);
  const {
    isOpen: isOpenModalDeleteCourse,
    handleOpenModal: handleOpenModalDeleteCourse,
    handleCloseModal: handleCloseModalDeleteCourse,
  } = useModal(false);
  const {
    isOpen: isOpenModalDeleteDocument,
    handleOpenModal: handleOpenModalDeleteDocument,
    handleCloseModal: handleCloseModalDeleteDocument,
  } = useModal(false);
  const dispatch = useDispatch();
  const { jwt } = useSelector((s) => s?.authReducer);
  const { data, course, listShow, document } = useSelector(
    (s) => s?.teacherReducer
  );
  const [teacher, setTeacher] = useState({});

  const handleEditCourse = (course) => {
    console.log(course);
    dispatch(ChoosenCourse(course));
    handleOpenModalEdit();
  };
  const handleDeleteCourse = (course) => {
    console.log(course);
    dispatch(ChoosenCourse(course));
    handleOpenModalDeleteCourse();
  };

  const handleDeleteDocument = (document) => {
    console.log(document);
    dispatch(ChooseDocument(document));
    handleOpenModalDeleteDocument();
  };

  const getCurrentTeacher = () => {
    let jwt = localStorage.getItem("jwt");
    let dataJwt = JSON.parse(atob(jwt.split(".")[1]));
    setTeacher(dataJwt);
  };

  useEffect(() => {
    getCurrentTeacher();
    dispatch(StartGetCourses(jwt));
  }, []);

  const handleSeeMaterial = (course) => {
    dispatch(ChoosenCourse(course));
    dispatch(startGetDocumentsByCourse(jwt, course.course_id));
  };

  const Content = () => {
    if (listShow === "Courses") {
      return (
        <Page
          containerFilters={<FiltersByCourses />}
          dataCourses={data}
          fragmentModals={
            <>
              <ModalEditCourse
                isOpen={isOpenModalEdit}
                handleOnClose={handleCloseModalEdit}
              />
              <ModalDeleteCourse
                isOpen={isOpenModalDeleteCourse}
                handleOnClose={handleCloseModalDeleteCourse}
                course={course}
              />
              <ModalCreateCourse
                isOpen={isOpenModalCreateCourse}
                handleOnClose={handleCloseModalCreateCourse}
                teacher={teacher}
              />
            </>
          }
          handleEdit={handleEditCourse}
          handleCreate={handleOpenModalCreateCourse}
          handleDelete={handleDeleteCourse}
          handleSeeMaterial={handleSeeMaterial}
          paragraphBtnAdd={"Agregar Curso"}
        />
      );
    } else if (listShow === "Documents") {
      return (
        <Page
          containerFilters={<FiltersByDocuments />}
          dataDocuments={data}
          fragmentModals={
            <>
              <ModalDeleteDocument
                isOpen={isOpenModalDeleteDocument}
                handleOnClose={handleCloseModalDeleteDocument}
                document={document}
              />
              <ModalCreateDocument
                isOpen={isOpenModalCreateDocument}
                handleOnClose={handleCloseModalCreateDocument}
                course={course}
              />
            </>
          }
          handleCreate={handleOpenModalCreateDocument}
          handleDelete={handleDeleteDocument}
          handleSeeMaterial={handleSeeMaterial}
          paragraphBtnAdd={"Agregar Material"}
        />
      );
    }
  };

  return <Content />;
};
