import { Box } from "@mui/material";

import Visualiser from "./Visualiser";
import SideBar from "./SideBar";

const ViewerPage = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "100%",
      }}
    >
      <SideBar />
      <Box
        component="main"
        sx={() => ({
          flexGrow: 1,
        })}
      >
        <Visualiser />
      </Box>
    </Box>
  );
};

export default ViewerPage;
