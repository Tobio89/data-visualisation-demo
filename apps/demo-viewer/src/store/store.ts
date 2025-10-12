import { create } from "zustand";

import type { VizState } from "./store.types";

const useVisualizationStore = create<VizState>((set) => ({
  redChannel: [true, true, true, true, true, true],
  updateRedChannel: (index: number, value: boolean) =>
    set((state) => {
      const newState = [...state.redChannel];
      newState[index] = value;
      return { redChannel: newState };
    }),
}));

export default useVisualizationStore;
