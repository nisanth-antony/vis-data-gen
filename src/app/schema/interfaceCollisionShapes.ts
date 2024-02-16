import { CollisionShapeAabb } from './collisionShapeAabb';
import { CollisionShapeSphere } from './collisionShapeSphere';

/**
 * The collision-shapes interface defines an estimate volume of the component for collision avoidance. This interface should not be used for real-time or safety critical collision detection purposes.
 */
export interface InterfaceCollisionShapes {
  interface_type: string;
  shapes: Array<CollisionShapeAabb | CollisionShapeSphere>;
}
