import { AsbuiltConstant } from './asbuiltConstant';

/**
 * Defines a vertex within an asbuilt_shape.
 */
export interface AsbuiltVertex {
  /**
   * Maps functions to referenced values.
   */
  constants?: Array<AsbuiltConstant>;
  /**
   * 3 dot object reference to a poi_point. Matches ˆiso\\.points_of_interest\\.[a-z_]+$.
   */
  point_ref: string;
}
