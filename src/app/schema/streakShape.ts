import { SurfaceModellingConditionEnum } from './surfaceModellingConditionEnum';

/**
 * A streak_shape defines the positions and attributes for a working tool shape, within a streak_fragment_measurement.
 */
export interface StreakShape {
  /**
   * The working tool is in automatic mode.
   */
  auto?: boolean;
  /**
   * An array with length matching shape_configuration ic_sensors. Each entry cv[j] gives a raw Compaction Value for the working tool, as defined by shape_configuration ic_sensors[j].
   */
  cv?: Array<number>;
  /**
   * An array with length matching shape_configuration ic_sensors. Each entry cv[j] gives a calibrated Normalized Compaction Value for the working tool, as defined by shape_configuration ic_sensors[j].
   */
  ncv?: Array<number>;
  /**
   * An array of length N matching shape_configuration n (the number of measured points along the working tool). Each entry p[j] is an array of 3 numbers, giving the local [N,E,Z] coordinates for measured point j.
   */
  p?: Array<Array<number>>;
  /**
   * An array of 2 numbers, the horizontal and vertical accuracy within 1 standard deviation. These apply to all measured points.
   */
  q?: Array<Array<number>>;
  /**
   * Surface Modelling Function indicates how the shape shall be applied to a machine measured surface. A null value indicates that the shape must not be applied.
   */
  smc?: SurfaceModellingConditionEnum;
  /**
   * An array of length N matching shape_configuration n (the number of measured points along the working tool). Each entry t[j] is a number giving a temperature measured in degrees Celsius for measured point j.
   */
  t?: Array<number>;
  /**
   * The vibration amplitude of the working tool in millimeters.
   */
  va?: number;
  /**
   * The vibration frequency of the working tool in cycles per second.
   */
  vf?: number;
  /**
   * Vibration jump is detected for the working tool.
   */
  vj?: boolean;
  /**
   * The vibration state of the working tool. Values are: true = vibration on, false = vibration off.
   */
  vs?: boolean;
}
