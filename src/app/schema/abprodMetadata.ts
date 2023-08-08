import { CharacterStringUuid } from './characterStringUuid';

/**
 * Each message shall have a “meta” field of type abprod_metadata.
 */
export interface AbprodMetadata {
  /**
   * The asset VIS ID: a UUID generated by the VIS for each asset.
   */
  asset: CharacterStringUuid;
  /**
   * Unless specified otherwise, this is the time at which the event occurred at the machine. It is encoded as the number of milliseconds since the ISO 8601 time epoch.
   */
  at: number;
  /**
   * The as-built and production data message types, for both System-of-Record and Real-Time streams
   */
  type: AbprodMetadata.TypeEnum;
}
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AbprodMetadata {
  export type TypeEnum =
    | 'asset_info'
    | 'streak'
    | 'tin'
    | 'survey'
    | 'ref_survey'
    | 'asset_configuration'
    | 'replicate'
    | 'state';
  export const TypeEnum = {
    AssetInfo: 'asset_info' as TypeEnum,
    Streak: 'streak' as TypeEnum,
    Tin: 'tin' as TypeEnum,
    Survey: 'survey' as TypeEnum,
    RefSurvey: 'ref_survey' as TypeEnum,
    AssetConfiguration: 'asset_configuration' as TypeEnum,
    Replicate: 'replicate' as TypeEnum,
    State: 'state' as TypeEnum
  };
}