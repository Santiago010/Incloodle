import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../hooks/useModal";
import {
  StartGetCourses,
  ChoosenCourse,
} from "../../redux/actions/teacherActions";
import ContainerFiltersForTeacher from "../ContainerFiltersForTeacher";
import ModalCreateCourse from "../ModalCreateCourse";
import ModalDeleteCourse from "../ModalDeleteCourse";
import ModalEditCourse from "../ModalEditCourse";
import Page from "./Page";

export const IndexTeacher = () => {
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
  const { data, course } = useSelector((s) => s?.teacherReducer);
  const [teacher, setTeacher] = useState({});

  const handleEditCourse = (course) => {
    console.log(course);
    dispatch(ChoosenCourse(course));
    handleOpenModalEdit();
  };
  const handleDeleteCourse = (course) => {
    console.log(course);
    dispatch(ChoosenCourse(course));
    handleOpenModalDelete();
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

  // useEffect(() => {
  //   console.log(teacher);
  // }, [teacher]);

  return (
    <Page
      containerFilters={<ContainerFiltersForTeacher />}
      dataCourses={data}
      fragmentModals={
        <>
          <ModalEditCourse
            isOpen={isOpenModalEdit}
            handleOnClose={handleCloseModalEdit}
          />
          <ModalDeleteCourse
            isOpen={isOpenModalDelete}
            handleOnClose={handleCloseModalDelete}
            course={course}
          />
          <ModalCreateCourse
            isOpen={isOpenModalCreate}
            handleOnClose={handleCloseModalCreate}
            teacher={teacher}
          />
        </>
      }
      handleEdit={handleEditCourse}
      handleCreate={handleOpenModalCreate}
      handleDelete={handleDeleteCourse}
      paragraphBtnAdd={"Agregar Curso"}
    />
  );
};
