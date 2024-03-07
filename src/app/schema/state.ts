import { AbprodRtMetadata } from './abprodRtMetadata';
import { ProjRefRt } from './projRefRt';

/**
 * State messages should appear for each asset at the start of a stream to provide context for each asset currently operating on the worksite. As state changes occur, state messages appear on the stream to set the new state. If a state is to be completely cleared, a state message may be sent which has no proj_ref_rt field. To clear individual values a VIS sends null values for the relevant fields in proj_ref_rt.
 */
export interface State {
  /**
   * abprod_rt_metadata with type=state
   */
  meta: AbprodRtMetadata;
  /**
   * Contains references to objects in Project Data
   */
  projRefRt?: ProjRefRt;
}
