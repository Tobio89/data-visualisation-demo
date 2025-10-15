import { Box, Typography } from "@mui/material";
import VisualizationControls from "./VisualizationControls";
import { useMouseCoords } from "../../store/store";

const SideBar = () => {
  const { mouseCoords } = useMouseCoords();

  return (
    <Box
      sx={{
        width: "280px",
        padding: "8px",
        // borderRight: "3px solid #32373B",
      }}
    >
      <VisualizationControls />
      <Box sx={{ width: "100%", textAlign: "left" }}>
        <Typography variant="body1">x: {mouseCoords.x}</Typography>
        <Typography variant="body1">y: {mouseCoords.y}</Typography>
      </Box>
    </Box>
  );
};

export default SideBar;
