import { CharacterString255 } from './characterString255';
import { CharacterStringId } from './characterStringId';
import { ReferenceObject } from './referenceObject';
import { CodelistAttributeValue } from './codelistAttributeValue';

/**
 * Contains references to project data objects.
 */
export interface ProjRef {
  /**
   * Values of the used code_list codelist_attributes
   */
  attributes?: Array<CodelistAttributeValue>;
  /**
   * Reference to the code_list codelist_code by name
   */
  category_code?: string;
  /**
   * Reference to the code_list codelist_code by name
   */
  code?: CharacterString255;
  /**
   * Reference to a Project Data codelist
   */
  code_list?: CharacterStringId;
  /**
   * Reference to a Project Data material
   */
  material?: CharacterStringId;
  /**
   * Reference to a Project Data operator
   */
  operator?: CharacterStringId;
  /**
   * Reference to a Project Data file and element within
   */
  reference_object?: ReferenceObject;
  /**
   * Reference to a Project Data work_order
   */
  work_order?: CharacterStringId;
}
