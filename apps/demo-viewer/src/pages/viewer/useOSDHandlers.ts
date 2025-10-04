import { useCallback, useRef, useState } from "react";
import {
  CanvasOverlayProps,
  OSDViewerRef,
  ViewportProps,
} from "@lunit/osd-react-renderer";

const useOSDHandlers = () => {
  const [viewportZoom, setViewportZoom] = useState<number>(1);
  const [refPoint, setRefPoint] = useState<OpenSeadragon.Point>();

  const canvasOverlayRef = useRef(null);
  const osdViewerRef = useRef<OSDViewerRef>(null);

  const handleViewportZoom = useCallback<NonNullable<ViewportProps["onZoom"]>>(
    ({ eventSource: viewer, zoom, refPoint }) => {
      if (viewer == null || zoom == null) {
        return;
      }
      setViewportZoom(zoom);
      setRefPoint(refPoint || undefined);
    },
    []
  );

  const onCanvasOverlayRedraw: NonNullable<CanvasOverlayProps["onRedraw"]> = (
    canvas: HTMLCanvasElement
  ) => {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#000";
      ctx.fillRect(50, 50, 5000, 5000);
    }
  };

  return {
    osdViewerRef,
    canvasOverlayRef,
    viewportZoom,
    refPoint,
    handleViewportZoom,
    onCanvasOverlayRedraw,
  };
};
export default useOSDHandlers;
