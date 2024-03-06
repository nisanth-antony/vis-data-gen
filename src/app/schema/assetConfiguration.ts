import { AbprodRtMetadata } from './abprodRtMetadata';
import { CharacterStringUuid } from './characterStringUuid';
import { Component } from './component';
import { AssetType } from './assetType';

/**
 * An asset_configuration message defines the static configuration of a machine asset on the worksite. The asset_configuration describes the asset’s articulation, size and calibrated measurements, attachment points, references to 2d and 3d model data, etc.
 */
export interface AssetConfiguration {
  /**
   * A registered name for the category of asset.
   */
  asset_class: AssetType;
  /**
   * The set of components which make up the asset_configuration.
   */
  components: Array<Component>;
  /**
   * Uniquely identifies the asset_configuration. This shall be a new UUID for any change (such as implement or calibration change) made to the asset_configuration. SMS and VIS may use this as a caching key. This does not identify an asset, but identifies a unique configuration and calibration of an asset.
   */
  id: CharacterStringUuid;
  /**
   * abprod_rt_metadata with type=asset_configuration
   */
  meta: AbprodRtMetadata;
}
