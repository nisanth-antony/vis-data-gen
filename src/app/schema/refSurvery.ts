import { ReferenceObject } from './referenceObject';
import { SurveyState } from './surveyState';
import { AbprodSorMetadata } from './abprodSorMetadata';

/**
 * A ref_survey message provides a survey by reference to a Project Data file_entry, and an element name within the entry.
 */
export interface RefSurvey {
  /**
   * abprod_sor_metadata with type=ref_survey
   */
  meta: AbprodSorMetadata;
  /**
   * State for the survey
   */
  state: SurveyState;
  /**
   * Reference to a Project Data file and element within, which contains the survey content
   */
  survey: ReferenceObject;
}
