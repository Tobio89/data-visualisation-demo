import { Box, Switch, Typography } from "@mui/material";
import type { ToggleSwitchProps } from "./ToggleSwitch.types";

const ToggleSwitch = ({ title, on, onToggle }: ToggleSwitchProps) => {
  return (
    <Box
      sx={{
        width: "180px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography>{title}</Typography>
      <Switch checked={on} onChange={() => onToggle(on)} />
    </Box>
  );
};

export default ToggleSwitch;
