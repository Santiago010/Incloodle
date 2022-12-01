import { Fab, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { jwtToObject } from "../utils/jwt";
import HeaderT from "./HeaderT";
import IndexChangePass from "./ModalChangePass/Index";
import IndexSearchStudents from "./ModalSeachStudents";
import IndexSearchContens from "./ModalSearchContens/Index";
import IndexSearchExampending from "./ModalSearchExamPending/Index";
import HPlusMobiledataIcon from "@mui/icons-material/HPlusMobiledata";
import MouseIcon from "@mui/icons-material/Mouse";
import HandymanIcon from "@mui/icons-material/Handyman";
import IndexSearchExamCorrected from "./ModalExamExamCorrected";

const Layout = ({ children }) => {
  const htmlRef = useRef();
  const [fontZoom, setFontZoom] = useState(false);
  const [mouseRule, setMouseRule] = useState(false);
  const [rule, setRule] = useState({
    left: 0,
    top: 0,
  });
  const jwtPayload = jwtToObject();
  const {
    showModalSearchStudent,
    showModalSearchContens,
    showModalSearchpendingExam,
    showModalChangePass,
    showModalSearchExamCorrected,
  } = useSelector((s) => s?.uiReducer);

  function onMouseMove(ev) {
    setRule({
      left: ev.clientX + "px",
      top: ev.clientY + "px",
    });
  }

  const actions = [
    {
      icon: <HPlusMobiledataIcon />,
      name: "Font Zoom",
      func: () => {
        if (!fontZoom) {
          htmlRef.current.style.fontSize = "1.7em";
          setFontZoom(true);
        } else {
          htmlRef.current.style.fontSize = "1em";
          setFontZoom(false);
        }
      },
    },
    {
      icon: <MouseIcon />,
      name: "Mouse Rule",
      func: (ev) => {
        if (!mouseRule) {
          setMouseRule(true);
        } else {
          setMouseRule(false);
        }
      },
    },
  ];

  useEffect(() => {
    const htmlElement = document.getElementsByTagName("html");
    htmlRef.current = htmlElement[0];
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(90.03deg, #4B46B8 0.02%, #03A7C0 99.97%)",
        overflow: "hidden",
      }}
    >
      {mouseRule && (
        <div
          style={{
            backgroundColor: "#000",
            width: "250px",
            height: "3px",
            position: "absolute",
            zIndex: 999,
            borderRadius: "10px",
            ...rule,
          }}
        ></div>
      )}

      <HeaderT dataRol={jwtPayload} />
      <Box
        sx={{
          height: "calc(100vh - 80px)",
          paddingX: "50px",
          paddingY: "30px",
        }}
      >
        {children}
        <Box sx={{ mt: 3, height: 320 }}>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<HandymanIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                onClick={action.func}
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </Box>
      </Box>
      <>
        {jwtPayload.rol === 1 && (
          <>
            <IndexSearchStudents isOpen={showModalSearchStudent} />
            <IndexSearchContens isOpen={showModalSearchContens} />
            <IndexSearchExampending isOpen={showModalSearchpendingExam} />
          </>
        )}
        {jwtPayload.rol === 2 && (
          <>
            <IndexSearchExamCorrected isOpen={showModalSearchExamCorrected} />
          </>
        )}
        <IndexChangePass isOpen={showModalChangePass} />
      </>
    </Box>
  );
};

export default Layout;
