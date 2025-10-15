import { Box, styled, Switch, Typography } from "@mui/material";
import type {
  ToggleLegendProps,
  ToggleSwitchProps,
} from "./ToggleSwitch.types";

const Toggle = styled(Switch)(({ theme, checked }) => ({
  "& .MuiSwitch-track": {
    background: `${
      checked ? theme.palette.secondary.dark : theme.palette.primary.dark
    } !important`,
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: checked
      ? theme.palette.secondary.light
      : theme.palette.primary.light,
  },
}));

const ToggleLegend = ({ color, shape }: ToggleLegendProps) => {
  if (shape === "circle") {
    return (
      <Box
        sx={{
          width: "16px",
          height: "16px",
          backgroundColor: color,
          borderRadius: "50%",
        }}
      />
    );
  }
  if (shape === "square") {
    return (
      <Box sx={{ width: "16px", height: "16px", backgroundColor: color }} />
    );
  }
  console.log("Legend provided but shape not supported");
  return null;
};

const ToggleLabel = ({
  title,
  legend,
}: Pick<ToggleSwitchProps, "title" | "legend">) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
      {legend && <ToggleLegend color={legend.color} shape={legend.shape} />}
      <Typography>{title}</Typography>
    </Box>
  );
};

const ToggleSwitch = ({ title, on, onToggle, legend }: ToggleSwitchProps) => {
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
      <ToggleLabel title={title} legend={legend} />
      <Toggle checked={on} onChange={() => onToggle(on)} />
    </Box>
  );
};

export default ToggleSwitch;
