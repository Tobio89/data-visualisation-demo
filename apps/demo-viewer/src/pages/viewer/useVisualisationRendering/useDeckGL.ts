import { Deck } from "@deck.gl/core";
import { ViewStateProps } from "@deck.gl/core/lib/deck";
import { useCallback } from "react";
import { DeckLayer, LayerConfig, LayerFilter } from "./useDeckGL.types";

const useDeckGL = () => {
  /**
   * Draws deck.gl layers
   * @param {Deck} deck - deck.gl instance
   * @param {DeckLayer[]} layers - Array of layers to draw
   * @param {ViewStateProps} viewState - View state configuration
   * @param {LayerFilter['args'] => boolean} layerFilter - Layer filtering function
   */
  const drawDeckLayer = (
    deck: Deck,
    layers: DeckLayer[],
    viewState: ViewStateProps,
    layerFilter: (args: LayerFilter["args"]) => boolean
  ) => {
    if (layers.length > 0) {
      deck.setProps({
        layers,
        viewState,
        layerFilter,
        pickingRadius: 50,
      });
      deck.redraw(true);
    }
  };

  /**
   * Clears all layers from the deck.gl instance
   * @param {Deck} deck - deck.gl instance to clear layers from
   */
  const clearLayers = useCallback((deck: Deck) => {
    deck.setProps({ layers: [] });
  }, []);

  const constructLayers = (layerConfig: LayerConfig[]) => {
    const result: DeckLayer[] = [];
    layerConfig.forEach((config) => {
      if (config.shouldRender) {
        result.push(...config.layerConstructor());
      }
    });
    return result;
  };

  return { drawDeckLayer, clearLayers, constructLayers };
};

export default useDeckGL;
