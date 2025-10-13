import { Box } from "@mui/material";

import useVisualizationStore from "../../store/store";

import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";

import { visualizationConfig } from "../../visualizationConfig";
import {
  VisualisationSection,
  VisualisationTitle,
} from "../../components/common";

const VisualizationControls = () => {
  const { redChannel, updateRedChannel } = useVisualizationStore();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <VisualisationTitle>Visualisation Controls</VisualisationTitle>
      <VisualisationSection title="Regions and Features">
        {visualizationConfig.pixelLayers.map((cfg, ind) => {
          return (
            <ToggleSwitch
              title={cfg.label}
              color={cfg.color}
              on={redChannel[ind]}
              onToggle={(val) => {
                updateRedChannel(ind, !val);
              }}
            />
          );
        })}
      </VisualisationSection>
    </Box>
  );
};

export default VisualizationControls;
