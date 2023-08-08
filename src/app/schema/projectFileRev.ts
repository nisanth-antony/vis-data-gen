import { CharacterStringId } from './characterStringId';

/**
 * Defines a reference to a revisioned Project Data file_entry.
 */
export interface ProjectFileRev {
  id: CharacterStringId;
  rev: string;
}
