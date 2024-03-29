/**
 * This enumeration defines how a working tool shape should effect a machine measured surface.
 */
export type SurfaceModellingFunctionEnum = 'height' | 'pass' | 'temp' | 'cv';

export const SurfaceModellingFunctionEnum = {
  Height: 'height' as SurfaceModellingFunctionEnum,
  Pass: 'pass' as SurfaceModellingFunctionEnum,
  Temp: 'temp' as SurfaceModellingFunctionEnum,
  Cv: 'cv' as SurfaceModellingFunctionEnum
};
