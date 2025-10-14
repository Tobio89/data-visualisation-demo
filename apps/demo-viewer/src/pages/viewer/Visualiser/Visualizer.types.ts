import type { TooltipOverlayRedrawArgs } from "../useVisualisationRendering/useVisualisationRendering.types";

export interface VisualizerProps {
  onTooltipOverlayRedraw: (event: TooltipOverlayRedrawArgs) => void;
}
