import { useCallback, useMemo } from "react";

import { ScatterplotLayer } from "@deck.gl/layers";

import { DeckLayer } from "./useDeckGL.types";

import marsLocaleData from "../../../marsLocaleData.json";

interface Mountain {
  name: string;
  point: { x: number; y: number };
}

const createLayerCallbacks = () => {
  const getPosition = (d: { x: number; y: number }) =>
    [d.x, d.y] as [number, number];
  return { getPosition };
};

const usePointRendering = () => {
  const { mountains } = marsLocaleData as { mountains: Mountain[] };
  const { getPosition } = useMemo(() => createLayerCallbacks(), []);

  const createPointLayers = useCallback(
    (viewer: OpenSeadragon.Viewer): DeckLayer[] => {
      const result: DeckLayer[] = [];

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
          filled: false,
          stroked: true,
          pickable: true,
        })
      );

      return result;
    },
    [getPosition]
  );

  //   useEffect(() => {

  //   }, [
  //     cellData,
  //     segregateCellDataIntoJobs,
  //     segregatePosNegCells,
  //     currentUserThreshold,
  //     activeThresholdType,
  //   ]);

  return { createPointLayers };
};
export default usePointRendering;
