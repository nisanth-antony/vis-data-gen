/**
 * The attach interface is used to connect hierarchies of components within an asset_configuration together. For example, a bucket node in an implement component can be attached to an excavator stick node in a body component. interface_attach shall be stated in the child component. interface_attach depends on the interface_nodes. Within a component, interface_attach is mutually exclusive with interface_position. Multiple interface_attach may form a hierarchy more than one level deep (components attached to components attached to components). Accordingly, MFK implementations should build a dependency chain of attachments, and update interface_nodes transforms according to the dependency order inferred from the dependency chain.
 */
export interface InterfaceAttach {
  interface_type: string;
  /**
   * A 3 dot object reference to a root nodes_node in this component. Matches ^iso\\.nodes\\.[a-z_]+$. TODO: can we remove this?
   */
  local_node_ref?: string;
  /**
   * The index of the parent component within the asset_configuration components array.
   */
  parent_component_index: number;
  /**
   * A 3 dot object reference to a nodes_node in the parent component at which this component attaches. Matches ^iso\\.nodes\\.[a-z_]+$.
   */
  parent_node_ref: string;
}
