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
    drawMissionSites,
    updateDrawMissionSites,
  } = useVisualizationStore();

  const pointControls = [
    {
      state: drawMountains,
      onToggle: updateDrawMountains,
    },
    {
      state: drawMissionSites,
      onToggle: updateDrawMissionSites,
    },
  ];

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
              legend={cfg.legend}
              on={redChannel[ind]}
              onToggle={(val) => {
                updateRedChannel(ind, !val);
              }}
            />
          );
        })}
      </VisualisationSection>
      <VisualisationSection title="Points of Interest">
        {visualizationConfig.pointLayers.map((cfg, ind) => {
          return (
            <ToggleSwitch
              title={cfg.label}
              legend={cfg.legend}
              on={pointControls[ind].state}
              onToggle={(val) => {
                pointControls[ind].onToggle(!val);
              }}
            />
          );
        })}
      </VisualisationSection>
    </Box>
  );
};

export default VisualizationControls;
