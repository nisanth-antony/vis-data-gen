import { NodesNode } from './nodesNode';

/**
 * The nodes interface defines an articulated hierarchy for the component. It models the skeletal structure of an asset (such as the body, boom, stick hierarchy in an excavator). This allows asset updates to send only the forward kinematic terms such as for boom angle, stick angle to replicate the asset remotely. interface_nodes depends on either interface_position or interface_attach.
 */
export interface InterfaceNodes {
  /**
   * Constant value
   */
  interface_type: string;
  /**
   * Root nodes, which inherit the spatial reference frame of defined by interface_position or interface_attach.
   */
  nodes: Array<NodesNode>;
}
