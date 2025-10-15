import { Box } from "@mui/material";

import { useVisualizationStore } from "../../store/store";

import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";

import { visualizationConfig } from "../../visualizationConfig";
import {
  VisualisationSection,
  VisualisationTitle,
} from "../../components/common";

const VisualizationControls = () => {
  const {
    master: masterOn,
    updateMaster,
    redChannel,
    updateRedChannel,
    drawMountains,
    updateDrawMountains,
  } = useVisualizationStore();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <VisualisationTitle>Visualisation Controls</VisualisationTitle>
      <ToggleSwitch
        title="Master"
        on={masterOn}
        onToggle={(val) => {
          updateMaster(!val);
        }}
      />
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
      <VisualisationSection title="Points of Interest">
        <ToggleSwitch
          title="Mountains"
          on={drawMountains}
          onToggle={(val) => {
            updateDrawMountains(!val);
          }}
        />
      </VisualisationSection>
    </Box>
  );
};

export default VisualizationControls;
