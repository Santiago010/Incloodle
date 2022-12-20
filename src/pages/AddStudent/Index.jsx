import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StartAddStudentToACourse,
  StartGetStudentWithoutCourse,
} from "../../redux/actions/teacherActions";
import Page from "./Page";

const IndexAddStudent = () => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const { course, dataStudentWithoutCourse } = useSelector(
    (s) => s?.teacherReducer
  );
  const dispatch = useDispatch();

  const handleAdd = (data) => {
    dispatch(
      StartAddStudentToACourse(jwt, {
        courseId: course.course_id,
        studentId: data.student_id,
      })
    );
  };

  useEffect(() => {
    dispatch(StartGetStudentWithoutCourse(jwt, course.course_id));
  }, []);

  return <Page data={dataStudentWithoutCourse} handleAdd={handleAdd} />;
};

export default IndexAddStudent;
