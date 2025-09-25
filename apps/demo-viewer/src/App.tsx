import { Box, Typography } from "@mui/material";

import SideMenu from "./components/SideBar";

import "./App.css";

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
        <Typography variant="h1">Hello World</Typography>
      </Box>
    </Box>
  );
}

export default App;
