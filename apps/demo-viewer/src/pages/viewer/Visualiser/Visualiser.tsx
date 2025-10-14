import { Ref } from "react";
import OSDViewer, {
  OSDViewerRef,
  readXMLMetadata,
} from "@lunit/osd-react-renderer";
import { Box } from "@mui/material";
import useOSDHandlers from "../useOSDHandlers";

import useVisualizationStore from "../../../store/store";
import { commonConfig, viewerOptions } from "../../../const";
import { visualizationConfig } from "../../../visualizationConfig";

import type { VisualizerProps } from "./Visualizer.types";
import OpenSeadragon from "openseadragon";

const marsD4Metadata = readXMLMetadata(
  `<Image TileSize="256" Overlap="0" Format="png" MinLevel="0" MaxLevel="6" xmlns="http://schemas.microsoft.com/deepzoom/2008"><Size Width="16384" Height="8192" /></Image>`
);

const Visualiser = ({ onTooltipOverlayRedraw }: VisualizerProps) => {
  const { osdViewerRef, handleViewportZoom } = useOSDHandlers();

  const { redChannel, master: masterOn } = useVisualizationStore();

  const options = {
    channels: {
      red: {
        mode: "bitmask",
        state: redChannel,
        colorScheme: visualizationConfig.pixelLayers.map((cfg) => cfg.color),
      },
      // green: {
      //   mode: "bitmask",
      //   state: [true, true, true, true],
      //   colorScheme: ["#7292FD", "#EE5140", "#EE5140", "#7292FD"],
      // },
      // blue: {
      //   mode: "jet-heatmap",
      //   state: true,
      //   colorScheme: "jet",
      // },
    },
    blendMode: "blend",
    masterOpacity: "0.2",
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <OSDViewer
        options={viewerOptions}
        ref={osdViewerRef as Ref<OSDViewerRef>}
        style={{ width: "100%", height: "100%" }}
      >
        <>
          <viewport
            zoom={1}
            refPoint={new OpenSeadragon.Point(0, 0)}
            rotation={commonConfig.rotation}
            onZoom={handleViewportZoom}
          />
          <tiledImage
            index={0}
            tileUrlBase="http://localhost:4444/mars-d4-base/image_name"
            tileMetadata={marsD4Metadata}
          />
          <bitmaskLayer
            index={1}
            isVisible={masterOn}
            tileUrlBase="http://localhost:4444/mars-d4-annotations/image_name"
            tileMetadata={marsD4Metadata}
            options={options}
          />
          <tooltipOverlay onRedraw={onTooltipOverlayRedraw} />
        </>
      </OSDViewer>
    </Box>
  );
};

export default Visualiser;
