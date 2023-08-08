/**
 * A component is defined as a collection of interfaces, which provides an extensible way to define a component.
 */
 export interface ModelInterface {
  /**
   * Broken into two parts separated by a dot. The first part is a namespace, which represents a company or organization defining the interface. The second part names their interface. Matches ˆ[a-z_]+\\.[a-z_]+$.
   */
  interfaceType: string;
}
