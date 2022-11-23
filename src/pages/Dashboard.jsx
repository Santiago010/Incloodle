import React from "react";
import { jwtToObject } from "../utils/jwt";
import IndexAdmin from "./DashBoardAdmin/Index";
import IndexStudent from "./DashBoardStudent/Index";
import IndexTeacher from "./DashBoardTeacher/Index";

const Dashboard = () => {
  const jwtPayload = jwtToObject();

  const Content = () => {
    if (jwtPayload.rol === 0) {
      return <IndexAdmin />;
    } else if (jwtPayload.rol === 1) {
      return <IndexTeacher />;
    } else if (jwtPayload.rol === 2) {
      return <IndexStudent />;
    }
  };

  return <Content />;
};

export default Dashboard;
