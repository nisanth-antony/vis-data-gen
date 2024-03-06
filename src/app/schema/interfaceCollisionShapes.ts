import { CollisionShapeAabb } from './collisionShapeAabb';
import { CollisionShapeSphere } from './collisionShapeSphere';

/**
 * The collision-shapes interface defines an estimate volume of the component for collision avoidance. This interface should not be used for real-time or safety critical collision detection purposes.
 */
export interface InterfaceCollisionShapes {
  /**
   * Constant value
   */
  interface_type: string;
  /**
   * Collision shapes
   */
  shapes: Array<CollisionShapeAabb | CollisionShapeSphere>;
}
