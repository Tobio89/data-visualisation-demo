import OSDViewer, {
  OSDViewerRef,
  readXMLMetadata,
} from "@lunit/osd-react-renderer";
import { Box } from "@mui/material";
import { commonConfig, viewerOptions } from "../../const";
import { Ref } from "react";
import useOSDHandlers from "./useOSDHandlers";

const defaultMetadata = readXMLMetadata(
  `<Image TileSize="256" Overlap="1" Format="png" xmlns="http://schemas.microsoft.com/deepzoom/2008"><Size Width="23039" Height="13325" /></Image>`
);
const Viewer = () => {
  const { osdViewerRef, handleViewportZoom } = useOSDHandlers();

  // const osdViewerRef = useRef<typeof OSDViewer>(null);
  return (
    <Box sx={{ width: "800px", height: "600px" }}>
      <OSDViewer
        options={viewerOptions}
        ref={osdViewerRef as Ref<OSDViewerRef>}
        style={{ width: "100%", height: "100%" }}
      >
        <>
          <viewport
            zoom={0.2}
            refPoint={{ x: 0, y: 0 }}
            rotation={commonConfig.rotation}
            onZoom={handleViewportZoom}
            minZoomLevel={0.2}
            maxZoomLevel={10}
          />
          <tiledImage
            tileUrlBase="http://localhost:4444/base-layer/"
            tileMetadata={defaultMetadata}
          />
        </>
      </OSDViewer>
    </Box>
  );
};

export default Viewer;
