import { ProjRef } from './projRef';
import { PurposeEnum } from './purposeEnum';
import { SensorQuality } from './sensorQuality';

/**
 * State context for a survey message. These include references to objects in Project Data etc.
 */
export interface SurveyState {
  /**
   * Contains references to objects in Project Data such as the working material. Applies to all points except where point contains override.
   */
  proj_ref?: ProjRef;
  /**
   * A statement relating to the purpose of the measurement work being done.
   */
  purpose_st?: PurposeEnum;
  /**
   * A statement relating to the quality of the geospatial measurements within the survey, expressed by identifying the set of position technologies used in sensor aggregation.
   */
  sensor_quality?: SensorQuality;
}
