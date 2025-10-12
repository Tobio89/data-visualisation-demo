import { Box, Typography } from "@mui/material";

import useVisualizationStore from "../../store/store";

import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";

const indexedLayers = [
  "Planitia Areas",
  "Planum Areas",
  "Terra Areas",
  "Chaos (Channels)",
  "Craters",
  "Mountains",
];

const VisualizationControls = () => {
  const { redChannel, updateRedChannel } = useVisualizationStore();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6">Controls</Typography>
      {indexedLayers.map((layerName, ind) => {
        return (
          <ToggleSwitch
            title={layerName}
            on={redChannel[ind]}
            onToggle={(val) => {
              updateRedChannel(ind, !val);
            }}
          />
        );
      })}
    </Box>
  );
};

export default VisualizationControls;
