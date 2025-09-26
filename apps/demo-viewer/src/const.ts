export const commonConfig = {
  zoom: {
    controllerMinZoom: 0.3125,
    controllerMaxZoom: 160,
  },

  mpp: 0.5019,
  micronsPerMeter: 1e6,
  radiusUM: 281.34,
  wheelButton: 1,
  rotation: 0,
};

export const viewerOptions = {
  minZoomLevel: 1,
  maxZoomLevel: 10,
  imageLoaderLimit: 16,
  smoothTileEdgesMinZoom: Infinity,
  immediateRender: true,
  // alwaysBlend: true,
  showNavigator: true,
  showNavigationControl: false,
  timeout: 60000,
  navigatorAutoResize: false,
  preserveImageSizeOnResize: false,
  showRotationControl: true,
  zoomPerScroll: 1.3,
  animationTime: 0.3,
  debugMode: true,
  gestureSettingsMouse: {
    clickToZoom: false,
    dblClickToZoom: false,
  },
  gestureSettingsTouch: {
    flickEnabled: false,
    clickToZoom: false,
    dblClickToZoom: false,
  },
};
