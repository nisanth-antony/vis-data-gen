import { ReplicateManifestItem } from './replicateManifestItem';

export interface ReplicateManifestItemReal extends ReplicateManifestItem {
  type: ReplicateManifestItemReal.TypeEnum;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ReplicateManifestItemReal {
  export type TypeEnum = 'float' | 'double';
  export const TypeEnum = {
    Float: 'float' as TypeEnum,
    Double: 'double' as TypeEnum
  };
}
