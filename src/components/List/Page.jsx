import { Box, Button, CircularProgress, List } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { BoxBtnAdd, boxPrincipal, listData } from "../styles/stylesList";
import AddIcon from "@mui/icons-material/Add";
import ListItemProfile from "../ListItemProfile";
import ListItemCourse from "../ListItemCourse";
import ListItemDocument from "../ListItemDocument";
import ListItemStudent from "../ListItemStudent";
import { useSelector } from "react-redux";
import ListItemCourseOfAStudent from "../ListItemCourseOfAStudent";
import EmptyListParagraph from "../EmptyListParagraph";

const Page = ({
  containerFilters,
  dataProfiles,
  dataCourses,
  dataDocuments,
  dataStudents,
  dataCourseByStudent,
  paragraphBtnAdd,
  fragmentModals,
  handleEdit,
  handleCreate,
  handleDelete,
  handleSeeMaterial,
  handleSeeDocumentOrExam,
  handleEvaluateStudent,
  handleReportStudent,
  handleSeeStudents,
  showButtonDeleteDocument,
}) => {
  const { loading } = useSelector((s) => s?.uiReducer);
  const ChooseList = () => {
    if (dataProfiles) {
      return loading ? (
        <CircularProgress />
      ) : dataProfiles.length === 0 ? (
        <EmptyListParagraph emptyList={"Perfiles"} />
      ) : (
        dataProfiles.map((data) => {
          return (
            <ListItemProfile
              key={data.rut}
              data={data}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })
      );
    } else if (dataCourses) {
      return loading ? (
        <CircularProgress />
      ) : dataCourses.length === 0 ? (
        <EmptyListParagraph emptyList={"Cursos"} />
      ) : (
        dataCourses.map((data) => {
          return (
            <ListItemCourse
              key={data.course_id}
              data={data}
              handleSeeMaterial={handleSeeMaterial}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleSeeStudents={handleSeeStudents}
            />
          );
        })
      );
    } else if (dataDocuments) {
      return loading ? (
        <CircularProgress />
      ) : dataDocuments.length === 0 ? (
        <EmptyListParagraph emptyList={"Documentos"} />
      ) : (
        dataDocuments.map((data) => {
          return (
            <ListItemDocument
              key={data.id}
              data={data}
              handleDelete={handleDelete}
              handleSeeDocumentOrExam={handleSeeDocumentOrExam}
              showButtonDelete={showButtonDeleteDocument}
            />
          );
        })
      );
    } else if (dataStudents) {
      return loading ? (
        <CircularProgress />
      ) : dataStudents.length === 0 ? (
        <EmptyListParagraph emptyList={"Estudiantes"} />
      ) : (
        dataStudents.map((data) => {
          return (
            <ListItemStudent
              key={`${data.student_id}-${data.name}`}
              data={data}
              handleEvaluateStudent={handleEvaluateStudent}
              handleReportStudent={handleReportStudent}
              handleDelete={handleDelete}
            />
          );
        })
      );
    } else if (dataCourseByStudent) {
      return loading ? (
        <CircularProgress />
      ) : dataCourseByStudent.length === 0 ? (
        <EmptyListParagraph emptyList={"Cursos"} />
      ) : (
        dataCourseByStudent.map((data) => {
          return (
            <ListItemCourseOfAStudent
              key={data.course_id}
              data={data}
              handleSeeMaterial={handleSeeMaterial}
            />
          );
        })
      );
    }
  };
  return (
    <Box sx={boxPrincipal}>
      {containerFilters}
      <List sx={listData}>
        <ChooseList />
      </List>
      {paragraphBtnAdd && (
        <Box sx={BoxBtnAdd}>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            onClick={() => handleCreate()}
          >
            {paragraphBtnAdd}
          </Button>
        </Box>
      )}

      {fragmentModals}
    </Box>
  );
};

export default Page;

Page.propTypes = {
  containerFilters: PropTypes.node,
  dataProfiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      teacher_id: PropTypes.number,
      student_id: PropTypes.number,
      email: PropTypes.string,
      name: PropTypes.string,
      rut: PropTypes.string,
      rol: PropTypes.number,
    })
  ),
  dataCourses: PropTypes.arrayOf(
    PropTypes.shape({
      course_id: PropTypes.number,
      name: PropTypes.string,
      period: PropTypes.string,
      final_score: PropTypes.number,
      teacher_id: PropTypes.number,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    })
  ),
  dataDocuments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      exam_id: PropTypes.number,
      document_id: PropTypes.number,
      name: PropTypes.string,
      link: PropTypes.string,
      type: PropTypes.number,
      is_pendient: PropTypes.number,
      score: PropTypes.string,
      num_of_questions: PropTypes.number,
      init_date: PropTypes.string,
      finish_date: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
      course_id: PropTypes.number,
    })
  ),
  dataStudents: PropTypes.arrayOf(
    PropTypes.shape({
      student_id: PropTypes.number,
      email: PropTypes.string,
      name: PropTypes.string,
      rut: PropTypes.string,
      rol: PropTypes.number,
    })
  ),
  dataCourseByStudent: PropTypes.arrayOf(
    PropTypes.shape({
      enrollment_id: PropTypes.number,
      course_id: PropTypes.number,
      student_id: PropTypes.number,
      name: PropTypes.string,
      period: PropTypes.string,
      final_score: PropTypes.string,
      teacher_id: PropTypes.number,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    })
  ),
  paragraphBtnAdd: PropTypes.string,
  fragmentModals: PropTypes.node,
  handleEdit: PropTypes.func,
  handleCreate: PropTypes.func,
  handleDelete: PropTypes.func,
  handleSeeMaterial: PropTypes.func,
  handleSeeDocumentOrExam: PropTypes.func,
  handleEvaluateStudent: PropTypes.func,
  handleReportStudent: PropTypes.func,
  handleSeeStudents: PropTypes.func,
  showButtonDeleteDocument: PropTypes.bool,
};
