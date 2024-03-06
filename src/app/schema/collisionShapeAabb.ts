import { CollisionShape } from './collisionShape';

export interface CollisionShapeAabb extends CollisionShape {
  /**
   * in meters, half-extents x
   */
  hex: number;
  /**
   * in meters, half-extents y
   */
  hey: number;
  /**
   * in meters, half-extents z
   */
  hez: number;
  type: CollisionShapeAabb.TypeEnum;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace CollisionShapeAabb {
  export type TypeEnum = 'aabb';
  export const TypeEnum = {
    Aabb: 'aabb' as TypeEnum
  };
}
