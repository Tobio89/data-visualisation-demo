import OSDViewer, {
  OSDViewerRef,
  readXMLMetadata,
} from "@lunit/osd-react-renderer";
// import OpenSeadragon from "openseadragon";
import { Box } from "@mui/material";
import { commonConfig, viewerOptions } from "../../const";
import { Ref } from "react";
import useOSDHandlers from "./useOSDHandlers";
import useVisualizationStore from "../../store/store";

// const defaultMetadata = readXMLMetadata(
//   `<Image TileSize="256" Overlap="0" Format="png" MinLevel="0" MaxLevel="7" xmlns="http://schemas.microsoft.com/deepzoom/2008"><Size Width="23039" Height="13325" /></Image>`
// );

// const bitmaskMetadata = readXMLMetadata(
//   `<Image TileSize="256" Overlap="0" Format="png" MinLevel="0" MaxLevel="7" xmlns="http://schemas.microsoft.com/deepzoom/2008"><Size Width="23039" Height="13325" /></Image>`
// );

const marsD4Metadata = readXMLMetadata(
  `<Image TileSize="256" Overlap="0" Format="png" MinLevel="0" MaxLevel="6" xmlns="http://schemas.microsoft.com/deepzoom/2008"><Size Width="16384" Height="8192" /></Image>`
);

const Visualiser = () => {
  const { osdViewerRef, handleViewportZoom } = useOSDHandlers();

  const { redChannel } = useVisualizationStore();

  const options = {
    channels: {
      red: {
        mode: "bitmask",
        state: redChannel,
        colorScheme: [
          "#5f9b1c",
          "#7f4883",
          "#f76707",
          "#84acba",
          "#d8cd01",
          "#d04433",
        ],
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
            refPoint={{ x: 0, y: 0 }}
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
            tileUrlBase="http://localhost:4444/mars-d4-annotations/image_name"
            tileMetadata={marsD4Metadata}
            options={options}
          />
        </>
      </OSDViewer>
    </Box>
  );
};

export default Visualiser;
