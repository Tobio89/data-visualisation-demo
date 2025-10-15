/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layer, Viewport } from '@deck.gl/core';
import { LayerProps } from '@deck.gl/core/lib/layer';

export type DeckLayer = Layer<any, LayerProps<any>> | false | null | undefined;

export interface LayerFilter {
  args: {
    layer: LayerProps<any>;
    viewport: Viewport;
    isPicking: boolean;
    renderPass: string;
  };
}

export interface LayerConfig {
  layerConstructor: () => DeckLayer[];
  shouldRender: boolean;
}
