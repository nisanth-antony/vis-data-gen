import { RenderResource } from './renderResource';
import { RenderShape } from './renderShape';

/**
 * A URL reference to a 3d-asset with a mapping from its shapes to nodes_node.
 */
export interface RenderAsset {
  /**
   * URL reference and Media Type for the 3d-asset.
   */
  resource: RenderResource;
  /**
   * A set of shapes which map from the 3d-assets shapes to nodes_node.
   */
  shapes: Array<RenderShape>;
  /**
   * Describes the projection this asset may be useful for. Orthographic (top, front, right) are useful for 2d renderings.
   */
  view: RenderAsset.ViewEnum;
}
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace RenderAsset {
  export type ViewEnum = 'top' | 'front' | 'right' | '3d';
  export const ViewEnum = {
    Top: 'top' as ViewEnum,
    Front: 'front' as ViewEnum,
    Right: 'right' as ViewEnum,
    _3d: '3d' as ViewEnum
  };
}
