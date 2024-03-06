import { CollisionShape } from './collisionShape';

export interface CollisionShapeSphere extends CollisionShape {
  /**
   * In meters, radius
   */
  radius: number;
  type: CollisionShapeSphere.TypeEnum;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace CollisionShapeSphere {
  export type TypeEnum = 'sphere';
  export const TypeEnum = {
    Sphere: 'sphere' as TypeEnum
  };
}
