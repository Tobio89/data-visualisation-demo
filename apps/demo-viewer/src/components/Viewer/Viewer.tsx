import OSDViewer, {
  OSDViewerRef,
  readXMLMetadata,
} from "@lunit/osd-react-renderer";
// import OpenSeadragon from "openseadragon";
import { Box } from "@mui/material";
import { commonConfig, viewerOptions } from "../../const";
import { Ref } from "react";
import useOSDHandlers from "./useOSDHandlers";

const defaultMetadata = readXMLMetadata(
  `<Image TileSize="256" Overlap="0" Format="png" MinLevel="0" MaxLevel="7" xmlns="http://schemas.microsoft.com/deepzoom/2008"><Size Width="23039" Height="13325" /></Image>`
);

const bitmaskMetadata = readXMLMetadata(
  '<Image TileSize="254" Overlap="1" Format="png" xmlns="http://schemas.microsoft.com/deepzoom/2008"><Size Width="37028" Height="35637" /></Image>'
);

console.log(defaultMetadata);
// const tileSource = new OpenSeadragon.TileSource({
//   // url: "http://localhost:4444/base-layer/",
//   tileSize: 256,
//   overlap: 0,
//   format: "png",
//   width: 23039,
//   height: 13325,
//   minLevel: 0,
//   maxLevel: 7,
//   getTileUrl: (level: number, x: number, y: number) => {
//     const url = `http://localhost:4444/base-layer/_files/${level}/${x}_${y}.png`;
//     return url;
//   },
// });

const Viewer = () => {
  const { osdViewerRef, handleViewportZoom } = useOSDHandlers();

  const options = {
    channels: {
      red: {
        mode: "bitmask",
        state: [true, true, true, true],
        colorScheme: ["#5091ff", "#0ca678", "#f76707", "#91C4A3"],
      },
      green: {
        mode: "bitmask",
        state: [true, true, true, true],
        colorScheme: ["#7292FD", "#EE5140", "#EE5140", "#7292FD"],
      },
      blue: {
        mode: "jet-heatmap",
        state: true,
        colorScheme: "jet",
      },
    },
    blendMode: "blend",
    masterOpacity: 1.0,
  };

  // const osdViewerRef = useRef<typeof OSDViewer>(null);
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
            tileUrlBase="http://localhost:4444/base-layer/"
            tileMetadata={defaultMetadata}
          />
          <bitmaskLayer
            index={1}
            tileUrlBase="http://localhost:4444/bitmask/bitmask-tri-channel-05-256"
            tileMetadata={bitmaskMetadata}
            options={options}
          />
        </>
      </OSDViewer>
    </Box>
  );
};

export default Viewer;
