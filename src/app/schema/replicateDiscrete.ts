/**
 * Parameters used to quantize (shift and scale) between referenced value and the integer type.
 */
export interface ReplicateDiscrete {
  /**
   * max projects to integer discrete_max
   */
  discrete_max: number;
  /**
   * min projects to integer discrete_min
   */
  discrete_min: number;
  /**
   * referenced value is clamped to this max
   */
  max: number;
  /**
   * referenced value is clamped to this min
   */
  min: number;
}
