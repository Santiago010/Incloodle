import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startGetDocumentsByCourse,
  StartGetMyCourses,
} from "../../redux/actions/studentsActions";
import Page from "./Page";

export const IndexStudent = () => {
  const dispatch = useDispatch();
  const { jwt } = useSelector((s) => s?.authReducer);
  const { listShow, data } = useSelector((s) => s?.studentReducer);

  const handleSeeMaterial = (data) => {
    console.log(data);
    dispatch(startGetDocumentsByCourse(jwt, data.course_id));
  };

  const handleSeeDocumentOrExam = (link) => {
    console.log(link);
  };

  useEffect(() => {
    dispatch(StartGetMyCourses(jwt));
  }, []);

  const Content = () => {
    if (listShow === "Courses") {
      return (
        <Page
          dataCourseByStudent={data}
          handleSeeMaterial={handleSeeMaterial}
        />
      );
    } else if (listShow === "Documents") {
      return (
        <Page
          dataDocuments={data}
          handleSeeDocumentOrExam={handleSeeDocumentOrExam}
          showButtonDeleteDocument={false}
        />
      );
    }
  };

  return <Content />;
};
