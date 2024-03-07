import { AsbuiltVertex } from './asbuiltVertex';
import { SurfaceModellingFunctionIEnum } from './surfaceModellingFunctionIEnum';
import { SurfaceModellingFunctionEnumRt } from './surfaceModellingFunctionEnumRt';

/**
 * A geometry description of a working tool.
 */
export interface AsbuiltShape {
  /**
   * The set of surface modelling functions which shall be updated by this as-built shape. “height” comes from point_ref; “pass” (passcount) is implied; others shall be mapped with constants in the vertices.
   */
  functions: Array<SurfaceModellingFunctionEnumRt>;
  /**
   * shape id, used for 3 dot and 4 dot reference scheme.
   */
  id: string;
  /**
   * Surface Modelling Function, may be replicated to indicate how the shape shall be applied to a simulated surface.
   */
  smf: SurfaceModellingFunctionIEnum;
  type: AsbuiltShape.TypeEnum;
  /**
   * 2 vertices for type=“line”.
   */
  vertices: Array<AsbuiltVertex>;
}
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AsbuiltShape {
  export type TypeEnum = 'line';
  export const TypeEnum = {
    Line: 'line' as TypeEnum
  };
}
