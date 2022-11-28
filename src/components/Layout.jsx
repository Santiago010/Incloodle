import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { jwtToObject } from "../utils/jwt";
import HeaderT from "./HeaderT";
import IndexChangePass from "./ModalChangePass/Index";
import IndexSearchStudents from "./ModalSeachStudents";
import IndexSearchContens from "./ModalSearchContens/Index";
import IndexSearchExampending from "./ModalSearchExamPending/Index";

const Layout = ({ children }) => {
  const jwtPayload = jwtToObject();
  const {
    showModalSearchStudent,
    showModalSearchContens,
    showModalSearchpendingExam,
    showModalChangePass,
  } = useSelector((s) => s?.uiReducer);
  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(90.03deg, #4B46B8 0.02%, #03A7C0 99.97%)",
        overflow: "hidden",
      }}
    >
      <HeaderT dataRol={jwtPayload} />
      <Box
        sx={{
          height: "calc(100vh - 80px)",
          paddingX: "50px",
          paddingY: "30px",
        }}
      >
        {children}
      </Box>
      <>
        {jwtPayload.rol === 1 && (
          <>
            <IndexSearchStudents isOpen={showModalSearchStudent} />
            <IndexSearchContens isOpen={showModalSearchContens} />
            <IndexSearchExampending isOpen={showModalSearchpendingExam} />
          </>
        )}

        <IndexChangePass isOpen={showModalChangePass} />
      </>
    </Box>
  );
};

export default Layout;
