import { useCallback } from "react";

import type { TooltipOverlayRedrawArgs } from "./useVisualisationRendering.types";
import usePointRendering from "./usePointRendering";

import useDeckGL from "./useDeckGL";
import { ViewStateProps } from "@deck.gl/core/lib/deck";
import { LayerFilter } from "./useDeckGL.types";
import { Deck } from "@deck.gl/core";
import { useMouseCoords } from "apps/demo-viewer/src/store/store";

// import marsLocaleData from "../../../marsLocaleData.json";

const useVisualisationRendering = () => {
  // const { mountains } = marsLocaleData;

  const { createPointLayers } = usePointRendering();
  const { drawDeckLayer, clearLayers, constructLayers } = useDeckGL();

  const { updateMouseCoords } = useMouseCoords();

  const onTooltipOverlayRedraw = useCallback(
    ({ tooltipCoord }: TooltipOverlayRedrawArgs) => {
      if (tooltipCoord) {
        updateMouseCoords(tooltipCoord.x, tooltipCoord.y);
      }
    },
    [updateMouseCoords]
  );

  const onDeckGLOverlayRedraw = (viewer: OpenSeadragon.Viewer, deck: Deck) => {
    clearLayers(deck);
    const { viewport } = viewer;
    const tiledImage = viewer.world.getItemAt(0);
    const center = tiledImage.viewportToImageCoordinates(
      viewport.getCenter(true)
    );
    const zoom = Math.log2(
      viewport.viewportToImageZoom(viewport.getZoom(true))
    );

    const baseViewState = {
      target: [center.x, center.y, 0],
      zoom,
    };

    const viewState = { base: baseViewState } as ViewStateProps; // view1 = base, view2 = subcell

    const layerFilter = ({ viewport: view, layer }: LayerFilter["args"]) => {
      if (
        view.id === "base" &&
        (layer.id === "TileLayer" || layer.id === "HoverLayer")
      )
        return false;
      if (view.id === "subcell" && layer.id?.includes("cell")) return false;

      return true;
    };

    const layers = constructLayers([
      {
        layerConstructor: () => createPointLayers(viewer),
        shouldRender: true,
      },
      // {
      //   layerConstructor: () => createSubCellLayers(shouldDrawSubcell),
      //   shouldRender:
      //     !disableVisualization &&
      //     masterOn &&
      //     shouldDrawSubcell &&
      //     currentZoom >= 160,
      // },
    ]);

    drawDeckLayer(deck, layers, viewState, layerFilter);
  };

  return {
    onTooltipOverlayRedraw,
    onDeckGLOverlayRedraw,
  };
};

export default useVisualisationRendering;
