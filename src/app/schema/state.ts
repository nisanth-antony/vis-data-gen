import { AbprodRtMetadata } from './abprodRtMetadata';
import { StateNsEnum } from './stateNsEnum';

/**
 * State messages should appear for each asset at the start of a stream to provide context for each asset currently operating on the worksite. As state changes occur, state messages appear on the stream to set the new state. If a state is to be cleared, a state message may be sent which has no value field.
 */
export interface State {
  /**
   * abprod_metadata with type=state
   */
  meta: AbprodRtMetadata;
  /**
   * The namespace of the state being set
   */
  ns: StateNsEnum;
  /**
   * The state being set. For example, if ns = “pd” then s is a Project Data type, such as a material.
   */
  s: string;
  /**
   * The value of the state. For example, if ns = “pd” then v is the id of a Project Data object.
   */
  v?: string;
}
