import { CollisionShape } from './collisionShape';

/**
 * The collision-shapes interface defines an estimate volume of the component for collision avoidance. This interface should not be used for real-time or safety critical collision detection purposes. interface_collision_shapes depends on interface_nodes.
 */
export interface InterfaceCollisionShapes {
  interface_type: string;
  shapes: Array<CollisionShape>;
}
