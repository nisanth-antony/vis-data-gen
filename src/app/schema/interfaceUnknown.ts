/**
 * Matches any other interface, allowing this schema to validate asset_configuration with extended interfaces.
 */
 export interface InterfaceUnknown {
    /**
     * any value matching the pattern that does not equal any of the other interface_type values
     */
    interface_type: string;
  }
  