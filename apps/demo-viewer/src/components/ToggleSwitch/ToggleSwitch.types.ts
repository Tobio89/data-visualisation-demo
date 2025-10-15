export interface ToggleLegendProps {
  color: string;
  shape: "circle" | "square" | string;
}

export interface ToggleSwitchProps {
  title: string;
  on: boolean;
  onToggle: (newValue: boolean) => void;
  legend?: ToggleLegendProps;
}
