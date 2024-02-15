/**
 * Maps a 4 dot referenced value to an as-built function such as “temp”.
 */
export interface AsbuiltConstant {
  /**
   * As-built function.
   */
  _function: AsbuiltConstant.FunctionEnum;
  /**
   * 4 dot value reference, which supplies the value for the as-built function at this vertex. Matches ˆ[a-z_]+\\.[a-z_]+\\.[a-z_]+\\.[a-z_]+$.
   */
  value_ref: string;
}
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AsbuiltConstant {
  export type FunctionEnum = 'temp' | 'cv';
  export const FunctionEnum = {
    Temp: 'temp' as FunctionEnum,
    Cv: 'cv' as FunctionEnum
  };
}
