import { Box, Typography } from "@mui/material";

import SideMenu from "./components/SideBar";

import "./App.css";
import Viewer from "./components/Viewer/Viewer";

function App() {
  return (
    <Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>
      <SideMenu />
      <Box
        component="main"
        sx={() => ({
          flexGrow: 1,
          // width: "100%",
          // height: "100%",
        })}
      >
        {/* <Typography variant="h1">Hello World</Typography> */}
        <Viewer />
      </Box>
    </Box>
  );
}

export default App;
