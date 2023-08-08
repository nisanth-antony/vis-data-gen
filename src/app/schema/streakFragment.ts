import { StreakFragmentMeasurement } from './streakFragmentMeasurement';
import { StreakFragmentState } from './streakFragmentState';

/**
 * Streak fragments are specified as required by changes to the machine state (worked material, configuration of working tool shapes etc). All measurements within a streak_fragment share the same machine state. Fragments shall appear in order of ascending measurement “at” values. For any asset, the ranges of fragment “at” shall not overlap.
 */
export interface StreakFragment {
  /**
   * An array of measurements giving the time, position and other attributes of the working tool shapes.
   */
  measurements: Array<StreakFragmentMeasurement>;
  /**
   * State common to all measurements in a fragment.
   */
  state: StreakFragmentState;
}
