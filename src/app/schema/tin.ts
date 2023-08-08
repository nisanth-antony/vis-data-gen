import { TinState } from './tinState';
import { AbprodSorMetadata } from './abprodSorMetadata';

/**
 * The tin message provides a small Triangulated Irregular Network (TIN) which defines topographic data local to a machine. This may be calculated by edge processing at the machine (such as by scanner hardware, stereo camera depth map on the machine). This message is used to augment working tool as-built information with topographic data available from other machine sensors.
 */
export interface Tin {
  /**
   * The time at which the TIN was captured, encoded as the number of milliseconds since the ISO 8601 time epoch
   */
  at: number;
  /**
   * Array of triangle [p0,p1,p2], where pN indexes the points array (from 0 inclusive). Face normal shall defined clockwise winding order like in the DTM.
   */
  faces: Array<Array<number>>;
  /**
   * abprod_metadata with type=tin
   */
  meta: AbprodSorMetadata;
  /**
   * Array of local [N,E,Z] coordinates.
   */
  points: Array<Array<number>>;
  /**
   * State for the TIN capture.
   */
  state: TinState;
}
