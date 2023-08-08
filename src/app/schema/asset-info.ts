import { AbprodMetadata } from './abprodMetadata';
import { CharacterString255 } from './characterString255';
import { MachineType } from './machineType';

/**
 * An asset_info message provides asset identity information to the SMS and other VIS. The abprod_metadata “asset” field is a unique id chosen by the VIS for the asset.
 */
export interface AssetInfo {
  /**
   * The asset machine type
   */
  asset_class: MachineType;
  /**
   * A string used by an end-user to identify a machine
   */
  equipment_id?: CharacterString255;
  /**
   * abprod_metadata with type=asset_info
   */
  meta: AbprodMetadata;
  /**
   * This is either a PIN or VIN. The PIN shall be as defined by ISO 10261. The VIN shall be as defined by ISO 3779.
   */
  oem_iso_id?: CharacterString255;
  /**
   * This identifies the specific instance of the machine for those machines that are not identified by a PIN or a VIN.
   */
  serial_number?: CharacterString255;
}
