import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../hooks/useModal";
import { StartGetAllStudents } from "../../redux/actions/studentsActions";
import {
  StartGetCourses,
  ChoosenCourse,
  startGetDocumentsByCourse,
  ChooseDocument,
  StartGetStudentByCourse,
  ChooseStudent,
} from "../../redux/actions/teacherActions";
import {
  FiltersByCourses,
  FiltersByDocuments,
  FiltersByStudents,
} from "../ContainersFiltersForTeacher";
import ModalAddStudentACourse from "../ModalAddStudentACourse";
import ModalCreateCourse from "../ModalCreateCourse";
import ModalCreateDocument from "../ModalCreateDocument";
import ModalDeleteCourse from "../ModalDeleteCourse";
import ModalDeleteDocument from "../ModalDeleteDocument";
import ModalDeleteStudentFromACourse from "../ModalDeleteStudentFromACourse";
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
    isOpen: isOpenModalAddStudentACourse,
    handleOpenModal: handleOpenModalAddStudentACourse,
    handleCloseModal: handleCloseModalAddStudentACourse,
  } = useModal(false);
  const {
    isOpen: isOpenModalDeleteCourse,
    handleOpenModal: handleOpenModalDeleteCourse,
    handleCloseModal: handleCloseModalDeleteCourse,
  } = useModal(false);
  const {
    isOpen: isOpenModalDeleteStudent,
    handleOpenModal: handleOpenModalDeleteStudent,
    handleCloseModal: handleCloseModalDeleteStudent,
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

  const handleSeeDocumentOrExam = (link) => {
    console.log(link);
    window.open(link);
  };

  const handleSeeStudents = (course) => {
    dispatch(ChoosenCourse(course));
    dispatch(StartGetStudentByCourse(jwt, course.course_id));
  };

  const handleAddStudentACourse = () => {
    dispatch(StartGetAllStudents(jwt));
    handleOpenModalAddStudentACourse();
  };

  const handleDeleteStudentFromACourse = (student) => {
    dispatch(ChooseStudent(student));
    handleOpenModalDeleteStudent();
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
          handleSeeStudents={handleSeeStudents}
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
          handleSeeDocumentOrExam={handleSeeDocumentOrExam}
          paragraphBtnAdd={"Agregar Material"}
          showButtonDeleteDocument={true}
        />
      );
    } else if (listShow === "Students") {
      return (
        <Page
          containerFilters={<FiltersByStudents />}
          dataStudents={data}
          fragmentModals={
            <>
              <ModalAddStudentACourse
                isOpen={isOpenModalAddStudentACourse}
                handleOnClose={handleCloseModalAddStudentACourse}
              />
              <ModalDeleteStudentFromACourse
                isOpen={isOpenModalDeleteStudent}
                handleOnClose={handleCloseModalDeleteStudent}
              />
            </>
          }
          handleCreate={handleAddStudentACourse}
          handleDelete={handleDeleteStudentFromACourse}
          handleEvaluateStudent={() => {}}
          handleReportStudent={() => {}}
          paragraphBtnAdd={"Agregar Estudiante"}
        />
      );
    }
  };

  return <Content />;
};
