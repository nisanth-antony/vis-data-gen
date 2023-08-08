import { PoiPoint } from './poiPoint';

/**
 * The points-of-interest interface defines points of interest on the machine, where each point of interest states a 3 dot objects reference to a nodes_node. interface_points_of_interest depends on interface_nodes. Points of interest are referenced by other interfaces, such as interface_asbuilt_shapes.
 */
export interface InterfacePointsOfInterest {
  interface_type: string;
  points: Array<PoiPoint>;
}
