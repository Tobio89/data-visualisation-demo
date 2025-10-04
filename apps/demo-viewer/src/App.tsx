import { Box } from "@mui/material";

import SideMenu from "./components/SideBar";

import "./App.css";
import Viewer from "./components/Viewer/Viewer";
import HeaderBar from "./components/HeaderBar";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <HeaderBar />
      <Box sx={{ display: "flex", flexGrow: 1, position: "relative" }}>
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
    </Box>
  );
}

export default App;
