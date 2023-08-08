import { StreakShape } from './streakShape';

/**
 * A streak_fragment_measurement is a frame containing position and other attributes for the working tool shapes. The streak_fragment “measurements” field is an array of these measurements, which animate the position and other attributes of the machine and its working tool shapes over time.
 */
export interface StreakFragmentMeasurement {
  /**
   * Measurement timestamp, milliseconds since the ISO 8601 time epoch
   */
  at: number;
  /**
   * Heading in radians of the machine asset, a yaw of 0 is facing due north with a positive yaw turning the front of the machine to the right
   */
  h?: number;
  /**
   * The machine is in reverse gear
   */
  reverse?: boolean;
  /**
   * An array of length S (the number of working tools), matching the streak_fragment_state shapes definition
   */
  s: Array<StreakShape>;
  /**
   * Velocity in meters per second
   */
  v?: number;
}
