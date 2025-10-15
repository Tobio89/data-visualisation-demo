import { useCallback } from "react";

import { ScatterplotLayer } from "@deck.gl/layers";

import { DeckLayer } from "./useDeckGL.types";

import marsLocaleData from "../../../marsLocaleData.json";
import { useVisualizationStore } from "apps/demo-viewer/src/store/store";
import { visualizationConfig } from "apps/demo-viewer/src/visualizationConfig";

interface PointData {
  name: string;
  point: { x: number; y: number };
}

function hexToRGB(hex: string) {
  const [r, g, b] = hex.match(/\w\w/g)!.map((c) => parseInt(c, 16));
  return [r, g, b];
}

const usePointRendering = () => {
  const { mountains, missionSites } = marsLocaleData as {
    mountains: PointData[];
    missionSites: PointData[];
  };
  const { pointLayers } = visualizationConfig;
  const { drawMountains, drawMissionSites } = useVisualizationStore();

  const createPointLayers = useCallback(
    // (viewer: OpenSeadragon.Viewer): DeckLayer[] => {
    (): DeckLayer[] => {
      const result: DeckLayer[] = [];

      if (drawMountains) {
        result.push(
          new ScatterplotLayer<PointData>({
            id: `point-mountains`,
            // @ts-expect-error - This is correct according to the docs but it doesn't work anyway
            data: mountains,
            getPosition: (d: PointData) =>
              [d.point.x, d.point.y] as [number, number],
            getFillColor: hexToRGB(pointLayers[0].legend.color),
            getLineColor: [0, 255, 0],
            getLineWidth: 5,
            radiusScale: 20,
            filled: true,
            stroked: false,
            pickable: true,
          })
        );
      }
      if (drawMissionSites) {
        result.push(
          new ScatterplotLayer<PointData>({
            id: `point-mission-sites`,
            // @ts-expect-error - This is correct according to the docs but it doesn't work anyway
            data: missionSites,
            getPosition: (d: PointData) =>
              [d.point.x, d.point.y] as [number, number],
            getFillColor: hexToRGB(pointLayers[1].legend.color),
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
    [drawMissionSites, drawMountains, missionSites, mountains, pointLayers]
  );

  return { createPointLayers };
};
export default usePointRendering;
