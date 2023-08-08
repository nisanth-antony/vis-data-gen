import { ReplicateDiscrete } from './replicateDiscrete';

/**
 * A 4 dot value reference to be byte packed or unpacked.
 */
export interface ReplicateManifestItem {
  /**
   * Parameters needed for casting integer types (int8, int16, int32).
   */
  discrete?: ReplicateDiscrete;
  /**
   * The value is cast to and from this type for byte packing.
   */
  type: ReplicateManifestItem.TypeEnum;
  /**
   * 4 dot value reference, which supplies the value to replicate.
   */
  valueRef: string;
}
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ReplicateManifestItem {
  export type TypeEnum = 'float' | 'double' | 'int8' | 'int16' | 'int32';
  export const TypeEnum = {
    Float: 'float' as TypeEnum,
    Double: 'double' as TypeEnum,
    Int8: 'int8' as TypeEnum,
    Int16: 'int16' as TypeEnum,
    Int32: 'int32' as TypeEnum
  };
}
