import { ProjRef } from './projRef';
import { PurposeEnum } from './purposeEnum';
import { SensorQuality } from './sensorQuality';

/**
 * State context for a tin message. These include references to objects in Project Data etc.
 */
export interface TinState {
  /**
   * Contains references to objects in Project Data such as the working material.
   */
  proj_ref?: ProjRef;
  /**
   * A statement relating to the purpose of the measurement work being done.
   */
  purpose_st?: PurposeEnum;
  /**
   * A statement relating to the quality of the geospatial measurements within the TIN, expressed by identifying the set of position technologies used in sensor aggregation.
   */
  sensor_quality?: SensorQuality;
}
