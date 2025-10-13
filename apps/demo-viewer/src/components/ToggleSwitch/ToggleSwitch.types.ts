export interface ToggleSwitchProps {
  title: string;
  on: boolean;
  onToggle: (newValue: boolean) => void;
  color?: string;
}
