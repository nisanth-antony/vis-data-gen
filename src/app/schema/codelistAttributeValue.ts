import { CharacterStringId } from './characterStringId';
import { Datetime3339 } from './datetime3339';

/**
 * A tuple idenifying a codelist_attribute and a value.
 */
export interface CodelistAttributeValue {
  /**
   * The id of the codelist_attribute
   */
  attribute: string;
  value: number | string | Datetime3339;

}
