import { CharacterString1000 } from './characterString1000';
import { ProjectFileRevRt } from './projectFileRevRt';

/**
 * Defines a reference to an ISO LandXML Project Data file_entry and a named element within.
 */
export interface ReferenceObjectRt {
  /**
   * The reference object element name within the file
   */
  element_name: CharacterString1000;
  /**
   * The Project data file_entry id and revision
   */
  file: ProjectFileRevRt;
}
