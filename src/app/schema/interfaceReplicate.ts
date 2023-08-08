import { ReplicateManifestItemInt } from './replicateManifestItemInt';
import { ReplicateManifestItemReal } from './replicateManifestItemReal';

/**
 * The replicate interface describes how to efficiently replicate the constantly varying parts of a component over a network to a remote VIS or SMS. It has a manifest of 4 dot value references from within the component that need to be replicated to the same component in a remote asset_configuration of the same UUID.
 */
export interface InterfaceReplicate {
  interface_type: string;
  /**
   * A sequence of 4 dot value references and byte packing parameters.
   */
  manifest: Array<ReplicateManifestItemReal | ReplicateManifestItemInt>;
}
