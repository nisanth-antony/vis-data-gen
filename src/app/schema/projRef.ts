import { CharacterStringId } from './characterStringId';
import { CharacterString4 } from './characterString4';
import { ReferenceObject } from './referenceObject';
import { CodelistAttributeValue } from './codelistAttributeValue';

/**
 * Contains references to Project Data objects.
 */
export interface ProjRef {
  /**
   * Array of id-value pairs of code_list codelist_attributes. This array contains the values set for attributes assigned to category or feature code
   */
  attributes?: Array<CodelistAttributeValue>;
  /**
   * Reference to the code_list codelist_code by name
   */
  category_code?: CharacterString4;
  /**
   * Reference to a Project Data codelist
   */
  code_list?: CharacterStringId;
  /**
   * Reference to the code_list codelist_code by name
   */
  feature_code?: CharacterString4;
  /**
   * Reference to a Project Data material
   */
  material?: CharacterStringId;
  /**
   * Reference to a Project Data operator
   */
  operator?: CharacterStringId;
  /**
   * Reference to an ISO LandXML Project Data file and element within
   */
  reference_object?: ReferenceObject;
  /**
   * Reference to a Project Data work_order
   */
  work_order?: CharacterStringId;
}
