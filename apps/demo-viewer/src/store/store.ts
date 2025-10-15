import { create } from "zustand";

import type { VizState, MouseCoordsState } from "./store.types";

const useVisualizationStore = create<VizState>((set) => ({
  master: true,
  updateMaster: (value: boolean) => set({ master: value }),
  redChannel: [true, true, true, true, true, true],
  updateRedChannel: (index: number, value: boolean) =>
    set((state) => {
      const newState = [...state.redChannel];
      newState[index] = value;
      return { redChannel: newState, master: value ? true : state.master };
    }),
  drawMountains: true,
  updateDrawMountains: (value: boolean) => set({ drawMountains: value }),
}));

const useMouseCoords = create<MouseCoordsState>((set) => ({
  mouseCoords: { x: 0, y: 0 },
  updateMouseCoords: (x: number, y: number) => set({ mouseCoords: { x, y } }),
}));

export { useVisualizationStore, useMouseCoords };
