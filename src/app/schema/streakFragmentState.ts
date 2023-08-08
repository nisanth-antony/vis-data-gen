import { CharacterStringUuid } from './characterStringUuid';
import { ProjRef } from './projRef';
import { PurposeEnum } from './purposeEnum';
import { QualSt } from './qualSt';
import { ShapeConfiguration } from './shapeConfiguration';
import { SensorQuality } from './sensorQuality';

/**
 * The stateful context for all measurements within a fragment. These include references to objects in Project Data, codelist references and shape definitions etc.
 */
export interface StreakFragmentState {
  /**
   * Allows streak objects to be tied together into a continuous streak for possible reporting purposes.
   */
  id?: CharacterStringUuid;
  /**
   * Contains references to objects in project data such as the working material.
   */
  proj_ref?: ProjRef;
  /**
   * Contains references to objects in Project Data such as the working material.
   */
  purpose_st?: string;
  /**
   * A statement relating to the quality of the geospatial measurements within the fragment expressed by identifying the set of position technologies used in sensor aggregation.
   */
   sensor_quality?: SensorQuality;
  /**
   * Defines the working tool configuration for the fragment. The length of the array S is equal to the number of working tools.
   */
  shapes: Array<ShapeConfiguration>;
}
