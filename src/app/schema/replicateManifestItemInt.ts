import { ReplicateDiscrete } from './replicateDiscrete';
import { ReplicateManifestItem } from './replicateManifestItem';

export interface ReplicateManifestItemInt extends ReplicateManifestItem {
  /**
   * Parameters needed for casting integer types (int8, int16, int32).
   */
  discrete: ReplicateDiscrete;
  type: ReplicateManifestItemInt.TypeEnum;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ReplicateManifestItemInt {
  export type TypeEnum = 'int8' | 'int16' | 'int32';
  export const TypeEnum = {
    Int8: 'int8' as TypeEnum,
    Int16: 'int16' as TypeEnum,
    Int32: 'int32' as TypeEnum
  };
}
