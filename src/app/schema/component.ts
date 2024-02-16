import { ComponentTypeEnum } from './componentTypeEnum';
import { InterfaceAsbuiltShapes } from './interfaceAsbuiltShapes';
import { InterfaceAttach } from './interfaceAttach';
import { InterfaceCollisionShapes } from './interfaceCollisionShapes';
import { InterfaceNodes } from './interfaceNodes';
import { InterfacePointsOfInterest } from './interfacePointsOfInterest';
import { InterfacePosition } from './interfacePosition';
import { InterfaceRenderAssets } from './interfaceRenderAssets';
import { InterfaceReplicate } from './interfaceReplicate';
import { InterfaceUnknown } from './interfaceUnknown';

/**
 * An asset_configuration is defined as a collection of components. The main body of an asset is represented by a component. Accordingly, an asset_configuration shall contain at least one component. Implements which may be changed, such as an excavator bucket, may be represented by further components.
 */
export interface Component {
  /**
   * A registered name for the category of component.
   */
  component_type: ComponentTypeEnum;
  /**
   * The set of interface which define the component.
   */
  interfaces: Array<
    | InterfacePosition
    | InterfaceNodes
    | InterfacePointsOfInterest
    | InterfaceCollisionShapes
    | InterfaceAsbuiltShapes
    | InterfaceReplicate
    | InterfaceAttach
    | InterfaceRenderAssets
    | InterfaceUnknown
  >;
}
