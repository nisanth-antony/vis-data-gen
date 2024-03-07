import { PositionLocal } from './positionLocal';

/**
 * The position interface is used to translate and rotate an asset relative to a worksite localization. Within a component, an interface_position is mutually exclusive with an interface_attach.
 */
export interface InterfacePosition {
  /**
   * Constant value
   */
  interface_type: string;
  /**
   * Local position
   */
  position: PositionLocal;
}
