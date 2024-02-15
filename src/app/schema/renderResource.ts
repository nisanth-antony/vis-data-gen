import { CharacterStringUrl } from './characterStringUrl';
/**
 * Media Type and URL.
 */
export interface RenderResource {
  /**
   * The hosted asset shall be publically accessible without authorization.
   */
  href: CharacterStringUrl;
  /**
   * The Media Type of the referenced 3d-asset.
   */
  mime_type: RenderResource.MimeTypeEnum;
}
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace RenderResource {
  export type MimeTypeEnum = 'model/vnd.collada+xml';
  export const MimeTypeEnum = {
    ModelvndColladaxml: 'model/vnd.collada+xml' as MimeTypeEnum
  };
}
