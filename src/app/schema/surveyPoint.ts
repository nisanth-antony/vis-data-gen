import { CharacterStringUuid } from './characterStringUuid';
import { CodelistAttributeValue } from './codelistAttributeValue';
import { ProjRef } from './projRef';

/**
 * Position and attributes for a surveyed point.
 */
export interface SurveyPoint {
  /**
   * The time at which the point was surveyed, encoded as the number of milliseconds since the ISO 8601 time epoch
   */
  at: number;
  /**
   * Array of id-value pairs of code_list_attributes. This array contains the values set for attributes assigned to category or feature code.
   */
  attr?: Array<CodelistAttributeValue>;
  /**
   * Horizontal difference between design object and survey point.
   */
  dh?: number;
  /**
   * Difference in meters between design object and survey point in surface normal direction (applicable only for surface and line reference objects).
   */
  dn?: number;
  /**
   * Vertical difference in meters between design object and survey point.
   */
  dz?: number;
  /**
   * Unique line identifier (in conformance with IETF RFC 4122)
   */
  id: CharacterStringUuid;
  /**
   * Unique line identifier (in conformance with IETF RFC 4122)
   */
  line_id?: CharacterStringUuid;
  /**
   * Local [N,E,Z] coordinate in meters
   */
  p: Array<number>;
  /**
   * Overrides state proj_ref for this point.
   */
  proj_ref?: ProjRef;
  /**
   * An array of 2 numbers: the horizontal and vertical accuracy estimate in meters, within 1 standard deviation
   */
  q?: Array<number>;
}
