export interface VizState {
  master: boolean;
  updateMaster: (value: boolean) => void;
  redChannel: boolean[];
  updateRedChannel: (index: number, value: boolean) => void;
  drawMountains: boolean;
  updateDrawMountains: (value: boolean) => void;
  drawMissionSites: boolean;
  updateDrawMissionSites: (value: boolean) => void;
}

export interface MouseCoordsState {
  mouseCoords: { x: number; y: number };
  updateMouseCoords: (x: number, y: number) => void;
}
