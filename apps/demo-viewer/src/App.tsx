import { Box } from "@mui/material";
import { useRoutes } from "react-router";

import SideMenu from "./components/SideBar";
import HeaderBar from "./components/HeaderBar";
import router from "./routes";

import "./App.css";

function App() {
  const element = useRoutes(router);

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
          {element}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
