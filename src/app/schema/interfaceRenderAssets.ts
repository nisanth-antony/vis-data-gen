import { RenderAsset } from './renderAsset';

/**
 * The render-assets interface defines 3d-model assets which relate to nodes in the component such that the machine can be graphically rendered. The 3d-model assets shall be hosted by a VIS which produce them.
 */
export interface InterfaceRenderAssets {
  /**
   * A set of URL references to 3d-assets, mapping the assets shapes to nodes_node.
   */
  assets: Array<RenderAsset>;
  interface_type: string;
}
