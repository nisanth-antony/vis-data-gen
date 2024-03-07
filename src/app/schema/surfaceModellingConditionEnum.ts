/**
 * This enumeration indicates how the SMS should update its current as-built surface model based on received streak data. Received data should only be applied to the modelled as-built surface when the enumerated condition holds.
 */
export type SurfaceModellingConditionEnum =
  | 'false'
  | 'true'
  | 'lower_or_no_existing'
  | 'higher_or_no_existing'
  | 'has_existing'
  | 'lower_and_has_existing'
  | 'higher_and_has_existing';

export const SurfaceModellingConditionEnum = {
  False: 'false' as SurfaceModellingConditionEnum,
  True: 'true' as SurfaceModellingConditionEnum,
  LowerOrNoExisting: 'lower_or_no_existing' as SurfaceModellingConditionEnum,
  HigherOrNoExisting: 'higher_or_no_existing' as SurfaceModellingConditionEnum,
  HasExisting: 'has_existing' as SurfaceModellingConditionEnum,
  LowerAndHasExisting:
    'lower_and_has_existing' as SurfaceModellingConditionEnum,
  HigherAndHasExisting:
    'higher_and_has_existing' as SurfaceModellingConditionEnum
};
