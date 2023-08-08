export type SurfaceSimulationFunctionEnum =
  | 'false'
  | 'true'
  | 'lower_or_no_current'
  | 'higher_or_no_current'
  | 'has_current'
  | 'lower_and_has_current'
  | 'higher_and_has_current';

export const SurfaceSimulationFunctionEnum = {
  False: 'false' as SurfaceSimulationFunctionEnum,
  True: 'true' as SurfaceSimulationFunctionEnum,
  LowerOrNoCurrent: 'lower_or_no_current' as SurfaceSimulationFunctionEnum,
  HigherOrNoCurrent: 'higher_or_no_current' as SurfaceSimulationFunctionEnum,
  HasCurrent: 'has_current' as SurfaceSimulationFunctionEnum,
  LowerAndHasCurrent: 'lower_and_has_current' as SurfaceSimulationFunctionEnum,
  HigherAndHasCurrent: 'higher_and_has_current' as SurfaceSimulationFunctionEnum
};
