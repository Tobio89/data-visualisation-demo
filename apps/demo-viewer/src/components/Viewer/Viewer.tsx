import OSDViewer, {
  OSDViewerRef,
  readXMLMetadata,
} from "@lunit/osd-react-renderer";
import OpenSeadragon from "openseadragon";
import { Box } from "@mui/material";
import { commonConfig, viewerOptions } from "../../const";
import { Ref } from "react";
import useOSDHandlers from "./useOSDHandlers";

const defaultMetadata = readXMLMetadata(
  `<Image TileSize="256" Overlap="0" Format="png" xmlns="http://schemas.microsoft.com/deepzoom/2008"><Size Width="23039" Height="13325" /></Image>`
);

const tileSource = new OpenSeadragon.TileSource({
  // url: "http://localhost:4444/base-layer/",
  tileSize: 256,
  overlap: 0,
  format: "png",
  width: 23039,
  height: 13325,
  minLevel: 0,
  maxLevel: 7,
  getTileUrl: (level: number, x: number, y: number) => {
    const url = `http://localhost:4444/base-layer/_files/${level}/${x}_${y}.png`;
    return url;
  },
});

const Viewer = () => {
  const { osdViewerRef, handleViewportZoom } = useOSDHandlers();

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
            // minZoomLevel={0.1}
            // maxZoomLevel={1}
          />
          <tiledImage
            tileUrlBase="http://localhost:4444/base-layer/"
            // tileMetadata={defaultMetadata}
            tileSource={tileSource}
          />
        </>
      </OSDViewer>
    </Box>
  );
};

export default Viewer;
