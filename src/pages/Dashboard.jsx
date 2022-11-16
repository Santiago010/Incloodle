import { Box } from "@mui/material";

import HeaderAdmin from "../components/HeaderAdmin";
import ListAdmin from "../components/ListAdmin";

const Dashboard = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(90.03deg, #4B46B8 0.02%, #03A7C0 99.97%)",
        overflow: "hidden",
      }}
    >
      <HeaderAdmin />
      <ListAdmin />
    </Box>
  );
};

export default Dashboard;
