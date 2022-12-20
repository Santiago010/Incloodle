import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
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
  const [corrections, setCorrections] = useState([]);

  const [values, handleInputChange] = useForm({
    qualification: 0,
  });

  const [correctionsAnswer, handleCorrectionsAnswer] = useForm({});

  const { qualification } = values;
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal(false);

  const handleOnSubmit = (ev) => {
    ev.preventDefault();

    if (corrections.length < dataAnswerExam.length) {
      swal({
        title: `Atención`,
        icon: "warning",
        text: `¡Hay respuestas sin comentario o puntaje!`,
        buttons: false,
        timer: 3000,
      });
    } else {
      if (parseInt(qualification) > parseInt(conten.max_score)) {
        swal({
          title: `Atención`,
          icon: "warning",
          text: `¡La Calificación final no puede ser mayor a ${conten.max_score}!`,
          buttons: false,
          timer: 3000,
        });
      } else {
        let qualificationFinal =
          (parseInt(qualification) / parseInt(conten.max_score)) * 70;

        dispatch(StartQualification(jwt, `${qualificationFinal}`, id));
        handleOpenModal();
      }
    }
  };

  const handleSendCorrectionAnswer = (
    question,
    answerId,
    isCorrect,
    comment,
    score
  ) => {
    const existCorrection = corrections.some(
      (correction) => correction === answerId
    );
    if (!existCorrection) setCorrections([...corrections, answerId]);

    dispatch(
      StartEvaluatingAnswer(
        jwt,
        question,
        answerId,
        isCorrect,
        correctionsAnswer[comment],
        correctionsAnswer[score]
      )
    );
  };

  const handleSeeExam = () => {
    window.open(conten.link);
  };

  const addScore = () => {
    let valueScores = [];
    Object.keys(correctionsAnswer)
      .filter((key) => key.includes("score"))
      .map((k) => valueScores.push(parseInt(correctionsAnswer[k])));

    let finalScore = valueScores.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    handleInputChange({
      target: {
        name: "qualification",
        value: `${finalScore}`,
      },
    });
  };

  useEffect(() => {
    dispatch(StartGetAnswerExam(jwt, id));
  }, []);

  useEffect(() => {}, [dataAnswerExam]);

  useEffect(() => {
    addScore();
  }, [correctionsAnswer]);

  return (
    <Page
      correctionsAnswer={correctionsAnswer}
      handleCorrectionsAnswer={handleCorrectionsAnswer}
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
