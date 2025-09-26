import { Box, Typography } from "@mui/material";

import SideMenu from "./components/SideBar";

import "./App.css";
import Viewer from "./components/Viewer/Viewer";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideMenu />
      <Box
        component="main"
        sx={() => ({
          flexGrow: 1,
        })}
      >
        {/* <Typography variant="h1">Hello World</Typography> */}
        <Viewer />
      </Box>
    </Box>
  );
}

export default App;
