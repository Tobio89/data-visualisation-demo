import { Box, Switch, Typography } from "@mui/material";
import type { ToggleSwitchProps } from "./ToggleSwitch.types";

const ToggleLabel = ({
  title,
  color,
}: Pick<ToggleSwitchProps, "title" | "color">) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
      {color && (
        <Box sx={{ width: "16px", height: "16px", backgroundColor: color }} />
      )}
      <Typography>{title}</Typography>
    </Box>
  );
};

const ToggleSwitch = ({ title, on, onToggle, color }: ToggleSwitchProps) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <ToggleLabel title={title} color={color} />
      <Switch checked={on} onChange={() => onToggle(on)} />
    </Box>
  );
};

export default ToggleSwitch;
