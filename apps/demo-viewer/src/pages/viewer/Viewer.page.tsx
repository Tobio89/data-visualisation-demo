import { Box } from "@mui/material";

import Visualiser from "./Visualiser/Visualiser";
import SideBar from "./SideBar";
import useVisualisationRendering from "./useVisualisationRendering/useVisualisationRendering";

const ViewerPage = () => {
  const { onTooltipOverlayRedraw, onDeckGLOverlayRedraw } =
    useVisualisationRendering();

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
        <Visualiser
          onTooltipOverlayRedraw={onTooltipOverlayRedraw}
          onDeckGLOverlayRedraw={onDeckGLOverlayRedraw}
        />
      </Box>
    </Box>
  );
};

export default ViewerPage;
