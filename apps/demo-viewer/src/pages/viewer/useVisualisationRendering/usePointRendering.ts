import { useCallback, useMemo } from "react";

import { ScatterplotLayer } from "@deck.gl/layers";

import { DeckLayer } from "./useDeckGL.types";

import marsLocaleData from "../../../marsLocaleData.json";
import { useVisualizationStore } from "apps/demo-viewer/src/store/store";

interface Mountain {
  name: string;
  point: { x: number; y: number };
}

const usePointRendering = () => {
  const { mountains } = marsLocaleData as { mountains: Mountain[] };
  const { drawMountains } = useVisualizationStore();

  const createPointLayers = useCallback(
    (viewer: OpenSeadragon.Viewer): DeckLayer[] => {
      const result: DeckLayer[] = [];

      if (drawMountains) {
        result.push(
          new ScatterplotLayer<Mountain>({
            id: `point-mountains`,
            // @ts-expect-error - This is correct according to the docs but it doesn't work anyway
            data: mountains,
            getPosition: (d: Mountain) =>
              [d.point.x, d.point.y] as [number, number],
            getFillColor: [255, 255, 0],
            getLineColor: [0, 255, 0],
            getLineWidth: 5,
            radiusScale: 20,
            filled: true,
            stroked: false,
            pickable: true,
          })
        );
      }
      return result;
    },
    [drawMountains, mountains]
  );

  return { createPointLayers };
};
export default usePointRendering;
