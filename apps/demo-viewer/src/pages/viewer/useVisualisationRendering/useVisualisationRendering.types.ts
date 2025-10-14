export interface TooltipOverlayRedrawArgs {
  overlayCanvasEl: HTMLCanvasElement;
  viewer: OpenSeadragon.Viewer;
  tooltipCoord?: OpenSeadragon.Point | undefined;
  originalEvent?: MouseEvent | undefined;
}
