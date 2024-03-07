import { CharacterString255 } from './characterString255';
import { CharacterStringId } from './characterStringId';
import { Datetime3339 } from './datetime3339';

/**
 * A tuple identifying a codelist_attribute and a value
 */
export interface CodelistAttributeValueRt {
  /**
   * The id of the codelist_attribute
   */
  attribute: CharacterStringId;
  /**
   * The value of the attribute
   */
  value: number | CharacterString255 | Datetime3339;
}
