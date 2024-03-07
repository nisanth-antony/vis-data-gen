/**
 * Either an axis-aligned-bounding-box (aabb) or sphere relative to a referenced nodes_node.
 */
export interface CollisionShape {
  /**
   * in meters, shape center x, in relation to node_ref.
   */
  cx: number;
  /**
   * in meters, shape center y, in relation to node_ref.
   */
  cy: number;
  /**
   * in meters, shape center z, in relation to node_ref.
   */
  cz: number;
  /**
   * shape id, used for 3 dot and 4 dot reference scheme. Matches ˆ[a-z_]+$.
   */
  id: string;
  /**
   * 3 dot object reference to a nodes_node. Matches ˆiso\\.nodes\\.[a-z_]+$.
   */
  node_ref: string;
  type: CollisionShape.TypeEnum;
}
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace CollisionShape {
  export type TypeEnum = 'aabb' | 'sphere';
  export const TypeEnum = {
    Aabb: 'aabb' as TypeEnum,
    Sphere: 'sphere' as TypeEnum
  };
}
