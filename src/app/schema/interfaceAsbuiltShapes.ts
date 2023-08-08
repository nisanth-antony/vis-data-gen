import { AsbuiltShape } from './asbuiltShape';

/**
 * The as-built shapes interface defines working tool shapes, such as a blade edge, or the bottom of roller drum. These shapes may be use for simulating machine measured surfaces. interface_asbuilt_shapes depends on interface_points_of_interest.
 */
export interface InterfaceAsbuiltShapes {
  interface_type: string;
  /**
   * A shape for each working tool
   */
  shapes: Array<AsbuiltShape>;
}
