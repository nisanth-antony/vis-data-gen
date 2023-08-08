import { AbprodMetadata } from './abprodMetadata';
import { CharacterStringB64 } from './characterStringB64';
import { CharacterStringUuid } from './characterStringUuid';

/**
 * The replicate message is used to communicate the values within a asset_configuration which change at high frequency. Accordingly, the replicate message references an asset_configuration by UUID. The interface_replicate from each component in the asset_configuration is used to pack a byte buffer, which is URL-safe no-padding base64 encoded and added to the “cm” array of the replicate. If an asset_configuration has two component, the “cm” array used to remotely represent it will have two base64 string entries. If one of the components has no interface_replicate, then the “cm” array element shall be the JSON null value. Upon receiving a replicate message with “cm” array of base64 encoded strings, the remote side shall decode base64, and de-serialize the bytes using the appropriate components interface_replicate “manifest”.
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
   * abprod_metadata with type=replicate
   */
  meta: AbprodMetadata;
}
