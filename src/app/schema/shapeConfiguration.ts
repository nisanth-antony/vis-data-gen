import { IcSensorInfo } from './icSensorInfo';
import { SurfaceModellingFunctionEnum } from './surfaceModellingFunctionEnum';

export interface ShapeConfiguration {
  /**
   * Optional array defining the set of unique IC sensor kinds for the working tool
   */
  ic_sensors?: Array<IcSensorInfo>;
  /**
   * The number of measured points N for the working tool
   */
  n: number;
  /**
   * Describes how the working tool shape affects a simulated surface. A null value indicates that the shape must not affect the surface
   */
  smf: Array<SurfaceModellingFunctionEnum>;
}
