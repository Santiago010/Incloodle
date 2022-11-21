import { Box, Button, CircularProgress, List } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { BoxBtnAdd, BoxPrincipal, listData } from "../styles/stylesList";
import AddIcon from "@mui/icons-material/Add";
import ListItemProfile from "../ListItemProfile";
import ListItemCourse from "../ListItemCourse";
import ListItemDocument from "../ListItemDocument";
import ListItemStudent from "../ListItemStudent";

const Page = ({
  containerFilters,
  dataProfiles,
  dataCourses,
  dataDocuments,
  dataStudents,
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
}) => {
  const ChooseList = () => {
    if (dataProfiles && !dataCourses && !dataDocuments && !dataStudents) {
      return dataProfiles.length === 0 ? (
        <CircularProgress />
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
    } else if (
      dataCourses &&
      !dataProfiles &&
      !dataDocuments &&
      !dataStudents
    ) {
      return dataCourses.length === 0 ? (
        <CircularProgress />
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
    } else if (
      dataDocuments &&
      !dataCourses &&
      !dataProfiles &&
      !dataStudents
    ) {
      return dataDocuments.length === 0 ? (
        <CircularProgress />
      ) : (
        dataDocuments.map((data) => {
          return (
            <ListItemDocument
              key={`${data.id}-${data.name}`}
              data={data}
              handleSeeDocumentOrExam={handleSeeDocumentOrExam}
              handleDelete={handleDelete}
            />
          );
        })
      );
    } else if (
      dataStudents &&
      !dataCourses &&
      !dataProfiles &&
      !dataDocuments
    ) {
      return dataStudents.length === 0 ? (
        <CircularProgress />
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
    }
  };
  return (
    <Box sx={BoxPrincipal}>
      {containerFilters}
      <List sx={listData}>
        <ChooseList />
      </List>
      <Box sx={BoxBtnAdd}>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          onClick={() => handleCreate()}
        >
          {paragraphBtnAdd}
        </Button>
      </Box>
      {fragmentModals}
    </Box>
  );
};

export default Page;

Page.propTypes = {
  containerFilters: PropTypes.node.isRequired,
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
  paragraphBtnAdd: PropTypes.string.isRequired,
  fragmentModals: PropTypes.node.isRequired,
  handleEdit: PropTypes.func,
  handleCreate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleSeeMaterial: PropTypes.func,
  handleSeeDocumentOrExam: PropTypes.func,
  handleEvaluateStudent: PropTypes.func,
  handleReportStudent: PropTypes.func,
  handleSeeStudents: PropTypes.func,
};
