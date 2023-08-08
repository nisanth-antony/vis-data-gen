import { CharacterString255 } from './characterString255';
import { CodelistAttributeValue } from './codelistAttributeValue';
import { ProjRef } from './projRef';

/**
 * Position and attributes for a surveyed point.
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
export interface SurveyPoint {
  /**
   * The time at which the point was surveyed, encoded as the number of milliseconds since the ISO 8601 time epoch
   */
  at: number;
  /**
   * A frame containing extra attributes. Fields stated in this object shall be from the referenced codelist_code “attributeidrefs”.
   */
  /* eslint-disable @typescript-eslint/no-explicit-any */
  attr?: Array<CodelistAttributeValue>;
  /**
   * Horizontal difference between design object and survey point.
   */
  dh?: number;
  /**
   * Difference between design object and survey point in surface normal direction (applicable only for surface and line reference objects).
   */
  dn?: number;
  /**
   * Vertical difference between design object and survey point.
   */
  dz?: number;
  /**
   * Unique survey point identifier
   */
  id: CharacterString255;
  /**
   * Unique line identifier: survey points with matching line_id form a line, points are ordered by increasing “at”
   */
  line_id?: CharacterString255;
  /**
   * Local [N,E,Z] coordinate
   */
  p: Array<number>;
  /**
   * Overrides state proj_ref for this point.
   */
  projRef?: ProjRef;
  /**
   * An array of 2 numbers: the horizontal and vertical accuracy estimate in meters, within 2 standard deviations
   */
  q?: Array<number>;
}
