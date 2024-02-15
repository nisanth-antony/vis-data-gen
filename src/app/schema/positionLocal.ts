export interface PositionLocal {
  /**
   * Distance in meters
   */
  easting: number;
  /**
   * Distance in meters
   */
  elevation: number;
  /**
   * Required for 4 dot value referencing
   */
  id: string;
  /**
   * Distance in meters
   */
  northing: number;
  /**
   * In radians, a pitch of 0 is a level asset with a positive pitch bringing the front of the asset up.
   */
  pitch: number;
  /**
   * In radians, a roll of 0 is a level asset with a positive roll tilling the tip of the asset to the right
   */
  roll: number;
  /**
   * In radians, a yaw of 0 is facing due north with a positive yaw turning the front of the asset to the right.
   */
  yaw: number;
}
