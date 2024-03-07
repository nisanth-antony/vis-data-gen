import { Datetime3339 } from './datetime3339';
import { CharacterStringId } from './characterStringId';

/**
 * Defines a reference to a revisioned Project Data file_entry.
 */
export interface ProjectFileRevRt {
  /**
   * File entry id
   */
  id: CharacterStringId;
  /**
   * File entry revision as given by its at value
   */
  rev: Datetime3339;
}
