/**
 * A mapping from a named shape in the 3d-asset, and its target node_ref location.
 */
export interface RenderShape {
  /**
   * The element name in the scene graph of the referenced 3d-asset which contains the shapes to be rendered under node_ref.
   */
  asset_transform: string;
  /**
   * The authored x-axis scale of the shape as it is in the referenced 3d-asset.
   */
  asx: number;
  /**
   * The authored y-axis scale of the shape as it is in the referenced 3d-asset.
   */
  asy: number;
  /**
   * The authored z-axis scale of the shape as it is in the referenced 3d-asset.
   */
  asz: number;
  /**
   * Shape id, used for 3 dot and 4 dot reference scheme. Matches ^[a-z_]+$.
   */
  id: string;
  /**
   * 3 dot object reference to a nodes_node. Matches ^iso\\.nodes\\.[a-z_]+$.
   */
  node_ref: string;
  /**
   * The measured (desired) x-axis scale of the shape.
   */
  sx: number;
  /**
   * The measured (desired) y-axis scale of the shape.
   */
  sy: number;
  /**
   * The measured (desired) z-axis scale of the shape.
   */
  sz: number;
}
