import { useCallback } from "react";

import type { TooltipOverlayRedrawArgs } from "./useVisualisationRendering.types";

const useVisualisationRendering = () => {
  const onTooltipOverlayRedraw = useCallback(
    ({ tooltipCoord, originalEvent }: TooltipOverlayRedrawArgs) => {
      if (originalEvent?.ctrlKey) {
        console.log("mouse at: ", tooltipCoord);
      }
    },
    []
  );

  return {
    onTooltipOverlayRedraw,
  };
};

export default useVisualisationRendering;
