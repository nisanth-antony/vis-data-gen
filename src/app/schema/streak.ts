import { StreakFragment } from './streakFragment';
import { AbprodSorMetadata } from './abprodSorMetadata';

/**
 * A streak message provides a set of atomic fragments each containing a journal of measurements of working tool-tip positions. Attribute information (such as temperature measured at the working tool) may also be stated.
 */
export interface Streak {
  /**
   * Streak fragments ordered by time ascending
   */
  fragments: Array<StreakFragment>;
  /**
   * abprod_sor_metadata with type=streak
   */
  meta: AbprodSorMetadata;
}
