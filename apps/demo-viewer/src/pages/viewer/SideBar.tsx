import { Box } from "@mui/material";
import VisualizationControls from "./VisualizationControls";

const SideBar = () => {
  return (
    <Box
      sx={{
        width: "180px",
        padding: "8px",
        borderRight: "1px solid #e0e0e0",
      }}
    >
      <VisualizationControls />
    </Box>
  );
};

export default SideBar;
