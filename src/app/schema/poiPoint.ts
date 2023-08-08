/**
 * A point defined by a translation in relation to a nodes_node.
 */
 export interface PoiPoint {
  /**
   * point id, used for 3 dot and 4 dot reference scheme. Matches ˆ[a-z_]+$.
   */
  id: string;
  /**
   * 3 dot object refernce to a nodes_node. Matches ˆiso\\.nodes\\.[a-z_]+$.
   */
  nodeRef: string;
  /**
   * in meters, x-axis translation, in relation to node_ref.
   */
  tx: number;
  /**
   * in meters, y-axis translation, in relation to node_ref.
   */
  ty: number;
  /**
   * in meters, z-axis translation, in relation to node_ref.
   */
  tz: number;
}
