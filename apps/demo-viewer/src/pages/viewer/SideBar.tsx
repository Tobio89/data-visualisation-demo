import { Box } from "@mui/material";
import VisualizationControls from "./VisualizationControls";

const SideBar = () => {
  return (
    <Box
      sx={{
        width: "280px",
        padding: "8px",
        borderRight: "3px solid #32373B",
      }}
    >
      <VisualizationControls />
    </Box>
  );
};

export default SideBar;
