import { PositionLocal } from './positionLocal';
import { PositionWgs84 } from './positionWgs84';

/**
 * The position interface is used to translate and rotate a machine relative to a worksite localization. Within a component, an interface_position is mutually exclusive with an interface_attach.
 */
export interface InterfacePosition {
  interface_type: string;
  /**
   * Required for type=“local”
   */
  local?: PositionLocal;
  type: InterfacePosition.TypeEnum;
  /**
   * Required for type=“wgs84”
   */
  wgs84?: PositionWgs84;
}
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace InterfacePosition {
  export type TypeEnum = 'local' | 'wgs84';
  export const TypeEnum = {
    Local: 'local' as TypeEnum,
    Wgs84: 'wgs84' as TypeEnum
  };
}
