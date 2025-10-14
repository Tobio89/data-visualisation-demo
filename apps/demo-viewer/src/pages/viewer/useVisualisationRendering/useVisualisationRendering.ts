import { useCallback } from "react";

import marsLocaleData from "../../../marsLocaleData.json";

import type { TooltipOverlayRedrawArgs } from "./useVisualisationRendering.types";

const useVisualisationRendering = () => {
  const { mountains } = marsLocaleData;

  const onTooltipOverlayRedraw = useCallback(
    ({
      tooltipCoord,
      originalEvent,
      overlayCanvasEl,
    }: TooltipOverlayRedrawArgs) => {
      if (originalEvent?.ctrlKey) {
        console.log("mouse at: ", tooltipCoord);
      }

      const ctx = overlayCanvasEl.getContext("2d");
      if (!ctx) return;

      mountains.forEach((mountain) => {
        const { x, y } = mountain.point;
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.ellipse(x, y, 12, 12, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
      });
    },
    []
  );

  return {
    onTooltipOverlayRedraw,
  };
};

export default useVisualisationRendering;
