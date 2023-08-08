import { AsbuiltVertex } from './asbuiltVertex';
import { SurfaceSimulationFunctionIEnum } from './surfaceSimulationFunctionIEnum';

/**
 * Either a “line” or “quad” shape. A “line” shape is useful to represent leading cutting edge of buckets, or the bottom of roller drums etc. A “quad” shape is useful to represent larger footprints such as the bottom of tracks etc. [**TODO: This seems at variance to the definition of “shape” in the System of Record stream in terms of geometry and also in terms of effect. Should the reasons for this be clarified, or should the MFK “shape” be made more consistent with the DOR shape definition?]
 */
export interface AsbuiltShape {
  /**
   * The set of surface modeling functions which shall be updated by this as-built shape. “height” comes from point_ref; “pass” (passcount) is implied; others shall be mapped with constants in the vertices.
   */
  functions: Array<AsbuiltShape.FunctionsEnum>;
  /**
   * shape id, used for 3 dot and 4 dot reference scheme. Matches ˆ[a-z_]+$.
   */
  id: string;
  /**
   * Surface Simulation Function, may be replicated to indicate how the shape shall be applied to a simulated surface.
   */
  ssf: SurfaceSimulationFunctionIEnum;
  type: AsbuiltShape.TypeEnum;
  /**
   * 2 or 4 vertices for type=“line” and type=“quad” respectively.
   */
  vertices: Array<AsbuiltVertex>;
}
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AsbuiltShape {
  export type FunctionsEnum = 'height' | 'pass' | 'temp' | 'cv';
  export const FunctionsEnum = {
    Height: 'height' as FunctionsEnum,
    Pass: 'pass' as FunctionsEnum,
    Temp: 'temp' as FunctionsEnum,
    Cv: 'cv' as FunctionsEnum
  };
  export type TypeEnum = 'line' | 'quad';
  export const TypeEnum = {
    Line: 'line' as TypeEnum,
    Quad: 'quad' as TypeEnum
  };
}
