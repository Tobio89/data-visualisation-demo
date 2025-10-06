import { Box } from "@mui/material";
import { useRoutes } from "react-router";

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
      {element}
    </Box>
  );
}

export default App;
