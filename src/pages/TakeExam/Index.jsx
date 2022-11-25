import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "./Page";
import useForm from "../../hooks/useForm";
import { useModal } from "../../hooks/useModal";
import { StartSendExamAnswers } from "../../redux/actions/studentsActions";
import IndexSucessResExam from "../../components/ModalSucessResExam/Index";

const IndexTakeExam = () => {
  const [fields, setFields] = useState([]);
  const { exam } = useSelector((s) => s?.studentReducer);
  const { jwt } = useSelector((s) => s?.authReducer);
  const dispatch = useDispatch();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal(false);
  const [values, handleInputChange] = useForm({});

  const handleSeeExam = () => {
    window.open(exam.link);
  };

  useEffect(() => {
    createArray();
  }, []);

  const createArray = () => {
    let arrayTemp = [];
    for (let index = 0; index < exam.num_of_questions; index++) {
      arrayTemp.push(index + 1);
    }
    setFields(arrayTemp);
  };

  const handleSendExam = () => {
    console.log(values);
    let arrayTemp = [];
    let i = 1;
    for (const value in values) {
      arrayTemp.push({
        question_id: i,
        answer_text: values[value],
      });
      i++;
    }
    dispatch(
      StartSendExamAnswers(exam.exam_id, JSON.stringify(arrayTemp), jwt)
    );
    handleOpenModal();
  };

  return (
    <Page
      data={fields}
      handleSeeExam={handleSeeExam}
      values={values}
      handleInputChange={handleInputChange}
      handleSendExam={handleSendExam}
      fragementModals={
        <>
          <IndexSucessResExam
            isOpen={isOpen}
            handleOnClose={handleCloseModal}
            nameExam={exam.name}
          />
        </>
      }
    />
  );
};

export default IndexTakeExam;
