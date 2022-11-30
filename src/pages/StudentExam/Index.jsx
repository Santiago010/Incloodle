import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IndexSucessCorrectionExam from "../../components/ModalSucessCorrectionExam/Index";
import useForm from "../../hooks/useForm";
import { useModal } from "../../hooks/useModal";
import {
  StartEvaluatingAnswer,
  StartGetAnswerExam,
  StartQualification,
} from "../../redux/actions/teacherActions";
import Page from "./Page";

const IndexStudentExam = () => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const { dataAnswerExam, conten } = useSelector((s) => s?.teacherReducer);

  const [values, handleInputChange] = useForm({
    qualification: 0,
  });

  const { qualification } = values;
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal(false);

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    dispatch(
      StartQualification(
        jwt,
        `${qualification.substr(-2, 1)}.${qualification.substr(1)}`,
        id
      )
    );
    handleOpenModal();
  };

  const handleSendCorrectionAnswer = (answerId, isCorrect) => {
    dispatch(StartEvaluatingAnswer(jwt, answerId, isCorrect));
  };

  const handleSeeExam = () => {
    window.open(conten.link);
  };

  useEffect(() => {
    dispatch(StartGetAnswerExam(jwt, id));
  }, []);

  useEffect(() => {}, [dataAnswerExam]);

  return (
    <Page
      exam={conten.link}
      handleOnSubmit={handleOnSubmit}
      data={dataAnswerExam}
      values={values}
      handleSendCorrectionAnswer={handleSendCorrectionAnswer}
      handleInputChange={handleInputChange}
      handleSeeExam={handleSeeExam}
      fragementModals={
        <>
          <IndexSucessCorrectionExam
            isOpen={isOpen}
            handleOnClose={handleCloseModal}
            name={conten.exam_name}
          />
        </>
      }
    />
  );
};

export default IndexStudentExam;
