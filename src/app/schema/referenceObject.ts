import { ProjectFileRev } from './projectFileRev';

/**
 * Defines a reference to a Project Data file_entry and a named element within.
 */
export interface ReferenceObject {
  /**
   * The reference object element name within the file
   */
  element_name: string;
  /**
   * The Project Data file_entry id and revision
   */
  file: ProjectFileRev;
}
