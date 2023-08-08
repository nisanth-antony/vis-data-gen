import { CharacterStringUuid } from './characterStringUuid';

/**
 * Each System-of-Record message shall have a “meta” field of type abprod_sor_metadata.
 */
export interface AbprodSorMetadata {
  /**
   * The id of the Project Data asset produced by this VIS for the asset this meta data refers to.
   */
  asset: string;
  /**
   * A unique id (generated in conformance with IETF RFC 4122, clause 4.3) to identify a message such that the message contents can be reissued by the VIS to SMS.
   */
  id: string;
  /**
   * The as-built and production data System-of-Record message types
   */
  type: AbprodSorMetadata.TypeEnum;
  /**
   * Semantic version of the schema set.
   */
  v: string;
}
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AbprodSorMetadata {
  export type TypeEnum = 'streak' | 'tin' | 'survey' | 'ref_survey';
  export const TypeEnum = {
    Streak: 'streak' as TypeEnum,
    Tin: 'tin' as TypeEnum,
    Survey: 'survey' as TypeEnum,
    RefSurvey: 'ref_survey' as TypeEnum
  };
}
