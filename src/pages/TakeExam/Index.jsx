import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "./Page";
import useForm from "../../hooks/useForm";
import { useModal } from "../../hooks/useModal";
import { StartSendExamAnswers } from "../../redux/actions/studentsActions";
import IndexSucessResExam from "../../components/ModalSucessResExam/Index";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import GoogleIcon from "@mui/icons-material/Google";
import moment from "moment";

const IndexTakeExam = () => {
  const [init_date, setInit_date] = useState(null);
  const [fields, setFields] = useState([]);
  const { exam } = useSelector((s) => s?.studentReducer);
  const { jwt } = useSelector((s) => s?.authReducer);
  const dispatch = useDispatch();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal(false);
  const [inputRecord, setInputRecord] = useState("");
  const [values, handleInputChange] = useForm({});
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const handleSeeExam = () => {
    window.open(exam.link);
  };

  useEffect(() => {
    createArray();
    setInit_date(moment());
  }, []);

  const createArray = () => {
    let arrayTemp = [];
    for (let index = 0; index < exam.num_of_questions; index++) {
      arrayTemp.push(index + 1);
    }
    setFields(arrayTemp);
  };

  const handleSendExam = () => {
    let arrayTemp = [];
    let i = 1;
    for (const value in values) {
      if (value !== "") {
        arrayTemp.push({
          question_id: i,
          answer_text: values[value],
        });
        i++;
      }
    }

    dispatch(
      StartSendExamAnswers(
        exam.exam_id,
        JSON.stringify(arrayTemp),
        jwt,
        init_date
      )
    );
    handleOpenModal();
  };

  const handleStartRecord = (name) => {
    SpeechRecognition.startListening();
    setInputRecord(name);
  };

  const handleStopRecord = () => {
    SpeechRecognition.abortListening();
  };

  const handleReadAnswer = (name) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = values[name];
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  };

  useEffect(() => {
    handleInputChange({
      target: {
        name: inputRecord,
        value: transcript,
      },
    });
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return (
      <>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            marginY: "10px",
            overflowX: "hidden",
            overflowY: "scroll",
            height: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography component="h5" variant="h5">
            ¡Lo sentimos pero el sistema de reconocimiento de voz no funciona en
            este navegador!
          </Typography>
          <Button
            onClick={() =>
              window.open("https://www.google.com/intl/es-419/chrome/")
            }
            sx={{
              marginTop: "10px",
            }}
            variant="contained"
            startIcon={<GoogleIcon />}
          >
            Instala Google Chrome
          </Button>
        </Box>
      </>
    );
  }

  return (
    <>
      <Page
        data={fields}
        handleSeeExam={handleSeeExam}
        values={values}
        handleInputChange={handleInputChange}
        handleStartRecord={handleStartRecord}
        handleStopRecord={handleStopRecord}
        handleReadAnswer={handleReadAnswer}
        handleSendExam={handleSendExam}
        exam={exam.link}
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
    </>
  );
};

export default IndexTakeExam;
