/**
 * Positions a machine relative to the worksite localization. Rotations are applied in the order: roll followed by pitch followed by yaw.
 */
 export interface PositionLocal {
  /**
   * in meters
   */
  easting: number;
  /**
   * in meters
   */
  elevation: number;
  /**
   * required for 4 dot value referencing
   */
  id: string;
  /**
   * in meters
   */
  northing: number;
  /**
   * in radians, a pitch of 0 is a level machine with a positive pitch bringing the front of the machine up.
   */
  pitch: number;
  /**
   * in radians, a roll of 0 is a level machine with a positive roll tiling the top of the machine to the right.
   */
  roll: number;
  /**
   * in radians, a yaw of 0 is facing due north with a positive yaw turning the front of the machine to the right.
   */
  yaw: number;
}
