import { IcSensorKindEnum } from './icSensorKindEnum';

/**
 * An ic_sensor_info defines Intelligent Compaction (IC) sensor information for a working tool.
 */
export interface IcSensorInfo {
  /**
   * The kind of IC sensor
   */
  kind: IcSensorKindEnum;
}
