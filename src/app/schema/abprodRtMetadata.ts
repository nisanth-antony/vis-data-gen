import { CharacterString255 } from './characterString255';
import { CharacterStringUuid } from './characterStringUuid';

/**
 * Each Real-Time message shall have a “meta” field of type abprod_rt_metadata.
 */
export interface AbprodRtMetadata {
  /**
   * The id of the Project Data asset produced by this VIS for the asset this meta data refers to.
   */
  asset: CharacterStringUuid;
  /**
   * Unless specified otherwise, this is the time at which the event occurred at the asset. It is encoded as the number of milliseconds since the ISO 8601 time epoch.
   */
  at: number;
  /**
   * The as-built and production data Real-Time message types
   */
  type: AbprodRtMetadata.TypeEnum;
  /**
   * Semantic version of the schema set.
   */
  v: CharacterString255;
}
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AbprodRtMetadata {
  export type TypeEnum = 'state' | 'asset_configuration' | 'replicate';
  export const TypeEnum = {
    State: 'state' as TypeEnum,
    AssetConfiguration: 'asset_configuration' as TypeEnum,
    Replicate: 'replicate' as TypeEnum
  };
}
