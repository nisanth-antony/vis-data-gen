import { SurveyPoint } from './surveyPoint';
import { SurveyState } from './surveyState';
import { AbprodSorMetadata } from './abprodSorMetadata';
import { CharacterStringUuid } from './characterStringUuid';

/**
 * The survey message provides a set of surveyed points as part of the as-built and production stream.
 */
export interface Survey {
  /**
   * Array of ids of previously included points that have been deleted
   */
  deleted_points?: Array<CharacterStringUuid>;
  /**
   * abprod_sor_metadata with type=survey
   */
  meta: AbprodSorMetadata;
  /**
   * Array of surveyed points
   */
  points: Array<SurveyPoint>;
  /**
   * State for the survey
   */
  state: SurveyState;
}
