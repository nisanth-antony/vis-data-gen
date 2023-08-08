import { CollisionShape } from './collisionShape';

export interface CollisionShapeAabb extends CollisionShape {
  hex: number;
  hey: number;
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
