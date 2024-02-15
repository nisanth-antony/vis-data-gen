/**
 * A machine type, such as those defined in ISO 6165, ISO 22242, and ISO 9849.
 */
export type AssetType =
  | 'backhoe_loader'
  | 'compact_tool_carrier'
  | 'dozer'
  | 'driller'
  | 'dumper'
  | 'excavator'
  | 'grader'
  | 'horizontal_directional_drill'
  | 'landfill_compactor'
  | 'loader'
  | 'paver'
  | 'piler'
  | 'pipe_layer'
  | 'roller'
  | 'scraper'
  | 'survey_equipment'
  | 'trencher'
  | 'other';

export const AssetType = {
  BackhoeLoader: 'backhoe_loader' as AssetType,
  CompactToolCarrier: 'compact_tool_carrier' as AssetType,
  Dozer: 'dozer' as AssetType,
  Driller: 'driller' as AssetType,
  Dumper: 'dumper' as AssetType,
  Excavator: 'excavator' as AssetType,
  Grader: 'grader' as AssetType,
  HorizontalDirectionalDrill: 'horizontal_directional_drill' as AssetType,
  LandfillCompactor: 'landfill_compactor' as AssetType,
  Loader: 'loader' as AssetType,
  Paver: 'paver' as AssetType,
  Piler: 'piler' as AssetType,
  PipeLayer: 'pipe_layer' as AssetType,
  Roller: 'roller' as AssetType,
  Scraper: 'scraper' as AssetType,
  SurveyEquipment: 'survey_equipment' as AssetType,
  Trencher: 'trencher' as AssetType,
  Other: 'other' as AssetType
};
