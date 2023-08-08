/**
 * A machine type, as discussed in ISO 6165.
 */
 export type MachineType =
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
 | 'survey equipment'
 | 'trencher'
 | 'other';

export const MachineType = {
 BackhoeLoader: 'backhoe_loader' as MachineType,
 CompactToolCarrier: 'compact_tool_carrier' as MachineType,
 Dozer: 'dozer' as MachineType,
 Driller: 'driller' as MachineType,
 Dumper: 'dumper' as MachineType,
 Excavator: 'excavator' as MachineType,
 Grader: 'grader' as MachineType,
 HorizontalDirectionalDrill: 'horizontal_directional_drill' as MachineType,
 LandfillCompactor: 'landfill_compactor' as MachineType,
 Loader: 'loader' as MachineType,
 Paver: 'paver' as MachineType,
 Piler: 'piler' as MachineType,
 PipeLayer: 'pipe_layer' as MachineType,
 Roller: 'roller' as MachineType,
 Scraper: 'scraper' as MachineType,
 SurveyEquipment: 'survey equipment' as MachineType,
 Trencher: 'trencher' as MachineType,
 Other: 'other' as MachineType
};
