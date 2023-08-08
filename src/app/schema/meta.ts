import { CharacterString1 } from './characterString1';
import { CharacterString255 } from './characterString255';
import { CharacterStringId } from './characterStringId';
import { Datetime3339 } from './datetime3339';

export interface MetaInterface {
  /**
   * Datetime that this object was last edited. Newer versions of an object should have later at values.
   */
  at: Datetime3339;
  /**
   * Unique identifier of the object in this collection of project data. Required to be unique for the Project Data for a given worksite.
   */
  id: CharacterStringId;
  /**
   * One of the types from the schema.json file.
   */
  type: CharacterString1;
  /**
   * $version of the schema file the type lives in
   */
  v: CharacterString255;
}
