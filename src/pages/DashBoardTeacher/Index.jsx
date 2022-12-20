import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IndexModalCreateCourse from "../../components/ModalCreateCourse/Index";
import IndexModalDeleteCourse from "../../components/ModalDeleteCourse/Index";
import IndexModalEditCourse from "../../components/ModalEditCourse/Index";

import { useModal } from "../../hooks/useModal";
import {
  ChoosenCourse,
  StartGetCourses,
} from "../../redux/actions/teacherActions";
import { jwtToObject } from "../../utils/jwt";
import Page from "./Page";

const IndexTeacher = () => {
  const {
    isOpen: isOpenModalEdit,
    handleOpenModal: handleOpenModalEdit,
    handleCloseModal: handleCloseModalEdit,
  } = useModal(false);
  const {
    isOpen: isOpenModalDelete,
    handleOpenModal: handleOpenModalDelete,
    handleCloseModal: handleCloseModalDelete,
  } = useModal(false);
  const {
    isOpen: isOpenModalCreate,
    handleOpenModal: handleOpenModalCreate,
    handleCloseModal: handleCloseModalCreate,
  } = useModal(false);

  const jwtPayload = jwtToObject();
  const { jwt } = useSelector((s) => s?.authReducer);
  const { dataCourses, course, dataFiltered } = useSelector(
    (s) => s?.teacherReducer
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState({});

  const handleEdit = (data) => {
    dispatch(ChoosenCourse(data));
    handleOpenModalEdit();
  };

  const handleDelete = (data) => {
    dispatch(ChoosenCourse(data));
    handleOpenModalDelete();
  };

  const handleSeeMaterial = (data) => {
    dispatch(ChoosenCourse(data));
    navigate(`/course/${data.course_id}`);
  };

  useEffect(() => {
    setTeacher(jwtPayload);
    dispatch(StartGetCourses(jwt));
  }, []);

  return (
    <Page
      data={dataFiltered.length === 0 ? dataCourses : dataFiltered}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      handleCreate={handleOpenModalCreate}
      handleSeeMaterial={handleSeeMaterial}
      fragmentModals={
        <>
          <IndexModalEditCourse
            isOpen={isOpenModalEdit}
            handleOnClose={handleCloseModalEdit}
          />

          <IndexModalDeleteCourse
            isOpen={isOpenModalDelete}
            handleOnClose={handleCloseModalDelete}
            course={course}
          />
          <IndexModalCreateCourse
            isOpen={isOpenModalCreate}
            handleOnClose={handleCloseModalCreate}
            teacher={teacher}
          />
        </>
      }
    />
  );
};

export default IndexTeacher;
