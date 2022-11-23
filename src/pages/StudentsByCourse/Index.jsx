import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ModalAddStudentACourse from "../../components/ModalAddStudentACourse";
import ModalDeleteStudentFromACourse from "../../components/ModalDeleteStudentFromACourse";
import { useModal } from "../../hooks/useModal";
import {
  ChooseStudent,
  StartGetStudentByCourse,
} from "../../redux/actions/teacherActions";
import Page from "./Page";

const IndexStudentsByCourse = () => {
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

  const handleEvaluateStudent = () => {
    console.log("handleEvaluateStudent");
  };

  const handleReportStudent = () => {
    console.log("handleReportStudent");
  };

  const handleDelete = (data) => {
    dispatch(ChooseStudent(data));
    handleOpenModalDelete();
  };

  useEffect(() => {
    dispatch(StartGetStudentByCourse(jwt, id));
  }, []);

  return (
    <Page
      data={data}
      handleEvaluateStudent={handleEvaluateStudent}
      handleReportStudent={handleReportStudent}
      handleDelete={handleDelete}
      handleCreate={handleOpenModalCreate}
      fragmentModals={
        <>
          <ModalDeleteStudentFromACourse
            isOpen={isOpenModalDelete}
            handleOnClose={handleCloseModalDelete}
          />
          <ModalAddStudentACourse
            isOpen={isOpenModalCreate}
            handleOnClose={handleCloseModalCreate}
          />
        </>
      }
    />
  );
};

export default IndexStudentsByCourse;
