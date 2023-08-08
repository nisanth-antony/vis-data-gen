/**
 * Each node defines a translation, rotation and scale. The coordinate space is SAE J670, right handed, Z down with front facing in positive X axis. Rotations are applied in the order: roll followed by pitch followed by yaw.
 */
 export interface NodesNode {
  /**
   * node id, used for 3 dot and 4 dot reference scheme. Matches ˆ[a-z_]+$.
   */
  id: string;
  /**
   * Child nodes, which inherit the spatial reference frame of this node.
   */
  nodes?: Array<NodesNode>;
  /**
   * in radians, rotation around x-axis
   */
  rx: number;
  /**
   * in radians, rotation around y-axis
   */
  ry: number;
  /**
   * in radians, rotation around z-axis
   */
  rz: number;
  /**
   * scaling factor, x-axis
   */
  sx: number;
  /**
   * scaling factor, y-axis
   */
  sy: number;
  /**
   * scaling factor, z-axis
   */
  sz: number;
  /**
   * in meters, x-axis translation
   */
  tx: number;
  /**
   * in meters, y-axis translation
   */
  ty: number;
  /**
   * in meters, z-axis translation
   */
  tz: number;
}
