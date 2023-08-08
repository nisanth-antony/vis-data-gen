import { IcSensorInfo } from './icSensorInfo';
import { WorkingToolEffectEnum } from './workingToolEffectEnum';

export interface ShapeConfiguration {
  /**
   * Optional array defining IC sensors
   */
  ic_sensors?: Array<IcSensorInfo>;
  /**
   * The number of measured points N for the working tool
   */
  n: number;
  /**
   *  Describes how the working tool shape eects a simulated surface.
   */
  wte: WorkingToolEffectEnum;
}
