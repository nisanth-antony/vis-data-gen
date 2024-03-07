import { CharacterStringB64 } from './characterStringB64';
import { CharacterStringUuid } from './characterStringUuid';
import { AbprodRtMetadata } from './abprodRtMetadata';

/**
 * The replicate message is used to communicate the values within a asset_configuration which change at high frequency. Accordingly, the replicate message references an asset_configuration by UUID.
 */
export interface Replicate {
  /**
   * Identifies the asset_configuration used to encode/decode cm.
   */
  ac: CharacterStringUuid;
  /**
   * The component manifests array contains an entry for each component in the referenced asset_configuration. Each entry is a URL-safe no-padding base64 encoding of the component replicate manifest buffer. The length should match the number of components in the asset_configuration.
   */
  cm: Array<CharacterStringB64>;
  /**
   * abprod_rt_metadata with type=replicate
   */
  meta: AbprodRtMetadata;
}
