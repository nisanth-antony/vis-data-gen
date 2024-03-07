import { CharacterString4 } from './characterString4';
import { CharacterStringId } from './characterStringId';
import { CodelistAttributeValueRt } from './codelistAttributeValueRt';
import { ReferenceObjectRt } from './referenceObjectRt';

/**
 * Contains references to Project Data objects which form the current state of an asset.
 */
export interface ProjRefRt {
  /**
   * Array of name value pairs of code_list codelist_attributes. In example:name=PipeDiameter;value=0.2
   */
  attributes?: Array<CodelistAttributeValueRt>;
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
  reference_object?: ReferenceObjectRt;
  /**
   * Reference to a Project Data work_order
   */
  work_order?: CharacterStringId;
}
