import {
  ViewportProps,
  MouseTrackerProps,
  ScalebarProps,
  TiledImageProps,
  CanvasOverlayProps,
  SVGOverlayProps,
  TooltipOverlayProps,
  WebGLOverlayProps,
  DeckGLOverlayProps,
} from "@lunit/osd-react-renderer";

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      viewport: ViewportProps;
      mouseTracker: MouseTrackerProps;
      scalebar: ScalebarProps;
      tiledImage: TiledImageProps;
      canvasOverlay: CanvasOverlayProps;
      svgOverlay: SVGOverlayProps;
      tooltipOverlay: TooltipOverlayProps;
      webGLOverlay: WebGLOverlayProps;
      deckGLOverlay: DeckGLOverlayProps;
    }
  }
}
