export interface VizState {
  master: boolean;
  updateMaster: (value: boolean) => void;
  redChannel: boolean[];
  updateRedChannel: (index: number, value: boolean) => void;
}
