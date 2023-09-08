import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import faker from '@faker-js/faker';
import { State } from '../schema/state';
import { AssetConfiguration } from '../schema/assetConfiguration';
import { Replicate } from '../schema/replicate';
import { Component as ComponentSchema } from '../schema/component';
import { ModelInterface } from '../schema/modelInterface';
import { InterfacePosition } from '../schema/interfacePosition';
import { PositionLocal } from '../schema/positionLocal';
import { PositionWgs } from '../schema/positionWgs';
import { InterfaceNodes } from '../schema/interfaceNodes';
import { NodesNode } from '../schema/nodesNode';
import { InterfacePointsOfInterest } from '../schema/interfacePointsOfInterest';
import { PoiPoint } from '../schema/poiPoint';
import { InterfaceCollisionShapes } from '../schema/interfaceCollisionShapes';
import { CollisionShape } from '../schema/collisionShape';
import { InterfaceAsbuiltShapes } from '../schema/interfaceAsbuiltShapes';
import { AsbuiltShape } from '../schema/asbuiltShape';
import { AsbuiltVertex } from '../schema/asbuiltVertex';
import { AsbuiltConstant } from '../schema/asbuiltConstant';
import { InterfaceReplicate } from '../schema/interfaceReplicate';
import { ReplicateManifestItem } from '../schema/replicateManifestItem';
import { ReplicateDiscrete } from '../schema/replicateDiscrete';
import { InterfaceAttach } from '../schema/interfaceAttach';
import { InterfaceRenderAssets } from '../schema/interfaceRenderAssets';
import { RenderAsset } from '../schema/renderAsset';
import { RenderShape } from '../schema/renderShape';
import { RenderResource } from '../schema/renderResource';
import { FormControl } from '@angular/forms';
import { AbprodSorMetadata } from '../schema/abprodSorMetadata';
import { AbprodRtMetadata } from '../schema/abprodRtMetadata';
import { SurfaceSimulationFunctionIEnum } from '../schema/surfaceSimulationFunctionIEnum';
import { ReplicateManifestItemInt } from '../schema/replicateManifestItemInt';
import { ReplicateManifestItemReal } from '../schema/replicateManifestItemReal';
import { MachineType } from '../schema/machineType';
import { InterfaceUnknown } from '../schema/interfaceUnknown';
import { PositionWgs84 } from '../schema/positionWgs84';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rt-type',
  templateUrl: './rt-type.component.html',
  styleUrls: ['./rt-type.component.scss'],
})
export class RtTypeComponent implements OnInit {
  
  // Fetch SMS asset
  smsAsset!: any;
  
  //Meta
  abprodRtMeta!: AbprodRtMetadata;
  projectType!: string[];

  //State
  stateData!: string;
  inputValueState!: number;
  stateResponse!: State;
  multipleStateResponse = [] as any;

  //Replicate
  replicateData!: string;
  inputValueReplicate!: number;
  replicateResponse!: Replicate;
  multipleReplicateResponse = [] as any;

  //AssetConfiguration
  assetConfigData!: string;
  inputValueAssetConfig!: number;
  assetConfigResponse!: AssetConfiguration;
  multipleAssetConfigResponse = [] as any;
  components!: ComponentSchema;
  //AssetConfiguration Interfaces
  interfaceUnknown!: InterfaceUnknown;
  interfacePosition!: InterfacePosition;
  positionLocal!: PositionLocal;
  positionWgs!: PositionWgs84;
  interfacePositionType!: string[];
  interfaceNodes!: InterfaceNodes;
  nodes!: NodesNode;
  interfacePointsOfInterest!: InterfacePointsOfInterest;
  poiPoint!: PoiPoint;
  interfaceCollisionShapes!: InterfaceCollisionShapes;
  shapes!: CollisionShape;
  collisionShape!: string[];
  interfaceAsbuiltShapes!: InterfaceAsbuiltShapes;
  asBuiltShapes!: AsbuiltShape;
  asBuiltfunctionsEnum!: string[];
  asBuiltTypeEnum!: string[];
  vertices!: AsbuiltVertex;
  surfaceSimulationFunctionIEnum!: string[];
  asbuiltConstant!: AsbuiltConstant;
  asbuiltConstantFunctionEnum!: string[];
  interfaceReplicate!: InterfaceReplicate;
  replicateManifestItem!: ReplicateManifestItem;
  replicateManifestItemReal!: ReplicateManifestItemInt
  replicateManifestItemInt!: ReplicateManifestItemReal
  replicateDiscrete!: ReplicateDiscrete;
  replicateManifestItemTypeEnum!: string[];
  interfaceAttach!: InterfaceAttach;
  interfaceRenderAssets!: InterfaceRenderAssets;
  renderAssets!: RenderAsset;
  renderAssetViewEnum!: string[];
  renderShape!: RenderShape;
  renderResource!: RenderResource;
  interfaceTypes!: {
    interfaceType: string;
    value: string;
  }[];
  selectedInterface = new FormControl();
  // tempNamespace = {}
  interfaceArray!: Array<
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

  selectedWorksite = new FormControl();
  worksites: string[] = []
  assets: string[] = []
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.inputValueState = 1;
    this.inputValueAssetConfig = 1;
    this.inputValueReplicate = 1;
    this.interfaceTypes = [
      { interfaceType: 'interfaceNodes', value: '0' },
      {
        interfaceType: 'interfacePointsOfInterest',
        value: '1',
      },
      {
        interfaceType: 'interfaceCollisionShapes',
        value: '2',
      },
      // {
      //   interfaceType: 'interfaceAsbuiltShapes',
      //   value: '3',
      // },
      { interfaceType: 'interfaceReplicate', value: '4' },
      { interfaceType: 'interfaceAttach', value: '5' },
      { interfaceType: 'interfaceRenderAssets', value: '6' },
      { interfaceType: 'interfacePosition', value: '7' },
      { interfaceType: 'interfaceUnknown', value: '8' }
    ];
    this.asBuiltfunctionsEnum = ['height', 'pass', 'temp', 'cv'];
    this.collisionShape = ['aabb', 'sphere'];
    this.asBuiltTypeEnum = ['height', 'pass', 'temp', 'cv'];
    this.asBuiltTypeEnum = ['line', 'quad'];
    this.surfaceSimulationFunctionIEnum = [
      'false',
      'true',
      'lower_or_no_current',
      'higher_or_no_current',
      'has_current',
      'lower_and_has_current',
      'higher_and_has_current',
    ];
    this.asbuiltConstantFunctionEnum = ['temp', 'cv'];
    this.replicateManifestItemTypeEnum = [
      'float',
      'double',
      'int8',
      'int16',
      'int32',
    ];
    this.renderAssetViewEnum = ['top', 'front', 'right', '3d'];
    this.projectType = [
      'project',
      'asset',
      'operator',
      'localization',
      'quality_plan',
      'codelist',
      'dataset',
      'file_entry',
      'filepackage',
      'material',
      'rtk',
      'work_order',
      'assignment',
    ];
    this.interfacePositionType = ['local', 'wgs'];
    this.http.get('http://localhost:3000/api/v0/2024/worksite_directory?limit=100&page=1').subscribe((response:any) => {
      this.worksites = response.data.map((item:any) =>{
        return item.worksite_base_url.split('/').pop()
      });
    })
  }

  fetchStateData() {
    if (this.selectedWorksite.value == null || this.selectedWorksite?.value?.length === 0){
      alert('Select the Worksite first');
    }
    else {
      this.http.get(`http://localhost:3000/api/v0/worksite/${this.selectedWorksite.value}/2024/types/assets?limit=100&page=1`).subscribe((response:any) => {
        this.assets = response.data.map((item:any) =>{
          return item.id
        });	
		
        this.multipleStateResponse = [];
        for (let i = 0; i < this.inputValueState; i++) {
          this.abprodRtMeta = {
            asset: this.assets[Math.floor(Math.random() * this.assets.length)],
            at: faker.random.number({ min: 1000000000000 }),
            type: 'state',
            v: 'version'
          };
          this.stateResponse = {
            meta: this.abprodRtMeta,
            ns: 'pd',
            s: this.projectType[
              Math.floor(Math.random() * this.projectType.length)
            ],
            v: faker.random.uuid(),
          };
          this.multipleStateResponse.push(this.stateResponse);
        }
        this.stateData = JSON.stringify(this.multipleStateResponse, null, 2);
		
})
}
    
  }
  fetchAssetConfigData() {
    if (this.selectedWorksite.value == null || this.selectedWorksite?.value?.length === 0){
      alert('Select the Worksite first');
    }
    else {
      this.http.get(`http://localhost:3000/api/v0/worksite/${this.selectedWorksite.value}/2024/types/assets?limit=100&page=1`).subscribe((response:any) => {
        this.assets = response.data.map((item:any) =>{
          return item.id
        });	
		
        this.multipleAssetConfigResponse = [];
        for (let i = 0; i < this.inputValueAssetConfig; i++) {
            this.abprodRtMeta = {
                asset: this.assets[Math.floor(Math.random() * this.assets.length)],
                at: faker.random.number({ min: 1000000000000 }),
                type: 'asset_configuration',
                v: 'version'
            };
          this.positionLocal = {
            easting: faker.random.number({ min: 1, max: 1000 }),
            elevation: faker.random.number({ min: 1, max: 1000 }),
            id: 'local',
            northing: faker.random.number({ min: 1, max: 1000 }),
            pitch: faker.random.number({ min: 0, max: 6 }),
            roll: faker.random.number({ min: 0, max: 6 }),
            yaw: faker.random.number({ min: 0, max: 6 }),
          };
          this.positionWgs = {
            alt: faker.random.number({ min: 1, max: 1000 }),
            dir: faker.random.number({ min: 0, max: 360 }),
            id: 'wgs',
            lat: faker.random.number({ min: -90, max: 90 }),
            lon: faker.random.number({ min: -180, max: 180 }),
          };
          this.interfacePosition = {
            interface_type: 'iso.position',
            local: this.positionLocal,
            type: faker.random.arrayElement([InterfacePosition.TypeEnum.Local, InterfacePosition.TypeEnum.Wgs84]),
            wgs84: this.positionWgs,
          };
          this.nodes = {
            id: faker.random.uuid(),
            nodes: [],
            rx: faker.random.number({ min: 0, max: 6 }),
            ry: faker.random.number({ min: 0, max: 6 }),
            rz: faker.random.number({ min: 0, max: 6 }),
            sx: faker.random.number({ min: 0, max: 6 }),
            sy: faker.random.number({ min: 0, max: 6 }),
            sz: faker.random.number({ min: 0, max: 6 }),
            tx: faker.random.number({ min: 1, max: 1000 }),
            ty: faker.random.number({ min: 1, max: 1000 }),
            tz: faker.random.number({ min: 1, max: 1000 }),
          };
          this.interfaceNodes = {
            interface_type: 'iso.nodes',
            nodes: [this.nodes],
          };
          this.poiPoint = {
            id: faker.random.uuid(),
            nodeRef: faker.random.uuid(),
            tx: faker.random.number({ min: 1, max: 1000 }),
            ty: faker.random.number({ min: 1, max: 1000 }),
            tz: faker.random.number({ min: 1, max: 1000 }),
          };
          this.interfacePointsOfInterest = {
            interface_type: 'iso.points_of_interest',
            points: [this.poiPoint],
          };
          this.shapes = {
            cx: faker.random.number({ min: 1, max: 1000 }),
            cy: faker.random.number({ min: 1, max: 1000 }),
            cz: faker.random.number({ min: 1, max: 1000 }),
            hex: faker.random.number({ min: 1, max: 1000 }),
            hey: faker.random.number({ min: 1, max: 1000 }),
            hez: faker.random.number({ min: 1, max: 1000 }),
            id: faker.random.uuid(),
            nodeRef: faker.random.uuid(),
            radius: faker.random.number({ min: 1, max: 100 }),
            type: faker.random.arrayElement([CollisionShape.TypeEnum.Aabb, CollisionShape.TypeEnum.Sphere]),
          };
          this.interfaceCollisionShapes = {
            interface_type: 'iso.collision_shapes',
            shapes: [this.shapes],
          };
          this.asbuiltConstant = {
            _function: faker.random.arrayElement([AsbuiltConstant.FunctionEnum.Cv, AsbuiltConstant.FunctionEnum.Temp]),
            valueRef: faker.random.uuid(),
          };
          this.vertices = {
            constants: [this.asbuiltConstant],
            pointRef: faker.random.uuid(),
          };
          this.asBuiltShapes = {
            functions: [ faker.random.arrayElement([AsbuiltShape.FunctionsEnum.Cv,AsbuiltShape.FunctionsEnum.Height,
                AsbuiltShape.FunctionsEnum.Pass, AsbuiltShape.FunctionsEnum.Temp
            ])
            ],
            id: faker.random.uuid(),
            ssf: faker.random.arrayElement([SurfaceSimulationFunctionIEnum.NUMBER_0, SurfaceSimulationFunctionIEnum.NUMBER_1,
                SurfaceSimulationFunctionIEnum.NUMBER_2, SurfaceSimulationFunctionIEnum.NUMBER_3, SurfaceSimulationFunctionIEnum.NUMBER_4,
                SurfaceSimulationFunctionIEnum.NUMBER_5, SurfaceSimulationFunctionIEnum.NUMBER_6
            ]),
            type: faker.random.arrayElement([AsbuiltShape.TypeEnum.Line,AsbuiltShape.TypeEnum.Quad]),
            vertices: [this.vertices],
          };
          this.interfaceAsbuiltShapes = {
            interface_type: 'iso.asbuilt_shapes',
            shapes: [this.asBuiltShapes],
          };
          this.replicateDiscrete = {
            discreteMax: faker.random.number({ min: 1, max: 10 }),
            discreteMin: faker.random.number({ min: 1, max: 10 }),
            max: faker.random.number({ min: 1, max: 100 }),
            min: faker.random.number({ min: 1, max: 100 }),
          };
          this.replicateManifestItem = {
            discrete: this.replicateDiscrete,
            type: faker.random.arrayElement([ReplicateManifestItem.TypeEnum.Double, ReplicateManifestItem.TypeEnum.Float,
                ReplicateManifestItem.TypeEnum.Int16, ReplicateManifestItem.TypeEnum.Int32, ReplicateManifestItem.TypeEnum.Int8]),
            valueRef: faker.random.uuid(),
          };
          this.interfaceReplicate = {
            interface_type: 'iso.replicate',
            manifest: [this.replicateManifestItemReal],
          };
          this.interfaceAttach = {
            interface_type: 'iso.attach',
            local_node_ref: faker.random.uuid(),
            parent_component_index: faker.random.number({ min: 1, max: 10 }),
            parent_node_ref: faker.random.uuid(),
          };
          this.renderResource = {
            href: 'href',
            mimeType: 'model/vnd.collada+xml',
          };
          this.renderShape = {
            assetTransform: 'assetTransform',
            asx: faker.random.number({ min: 0, max: 100 }),
            asy: faker.random.number({ min: 0, max: 100 }),
            asz: faker.random.number({ min: 0, max: 100 }),
            id: faker.random.uuid(),
            nodeRef: faker.random.uuid(),
            sx: faker.random.number({ min: 0, max: 100 }),
            sy: faker.random.number({ min: 0, max: 100 }),
            sz: faker.random.number({ min: 0, max: 100 }),
          };
          this.renderAssets = {
            resource: this.renderResource,
            shapes: [this.renderShape],
            view: faker.random.arrayElement([RenderAsset.ViewEnum.Front, RenderAsset.ViewEnum.Right,
                RenderAsset.ViewEnum.Top, RenderAsset.ViewEnum._3d
            ]),
          };
          this.interfaceRenderAssets = {
            assets: [this.renderAssets],
            interface_type: 'iso.render_assets',
          };
          this.interfaceUnknown = {
            interface_type: 'iso.interface_unknown'
          }
          this.interfaceArray = [
            this.interfaceNodes,
            this.interfacePointsOfInterest,
            this.interfaceCollisionShapes,
            // this.interfaceAsbuiltShapes,
            this.interfaceReplicate,
            this.interfaceAttach,
            this.interfaceRenderAssets,
            this.interfacePosition,
            this.interfaceUnknown
          ];
    
          this.components = {
            component_type: ComponentSchema.ComponentTypeEnum.MainBody,
            interfaces: [],
          };
          if (this.selectedInterface.value == null || this.selectedInterface?.value?.length === 0)
            alert('Select the Interface Type');
          else {
            this.selectedInterface.value.forEach((element: string) => {
              this.interfaceTypes.find((item, index) => {
                if (element == item.value) {
                  console.log('item', item.interfaceType);
                  this.components.interfaces.push(this.interfaceArray[index]);
                }
              });
            });
            this.assetConfigResponse = {
              asset_class: faker.random.arrayElement([MachineType.BackhoeLoader, MachineType.CompactToolCarrier,
                MachineType.Dozer, MachineType.Driller, MachineType.Dumper, MachineType.Excavator,
                MachineType.Grader, MachineType.HorizontalDirectionalDrill, MachineType.LandfillCompactor,
                MachineType.Loader, MachineType.Other, MachineType.Paver, MachineType.Piler, MachineType.PipeLayer,
                MachineType.Roller, MachineType.Scraper, MachineType.SurveyEquipment, MachineType.Trencher
            ]),
              components: [this.components],
              meta: this.abprodRtMeta,
              uuid: faker.random.uuid(),
            };
            this.multipleAssetConfigResponse.push(this.assetConfigResponse);
          }
          this.assetConfigData = JSON.stringify(
            this.multipleAssetConfigResponse,
            null,
            2
          );
        }
		
})
}
   
  }
  fetchReplicateData() {
    if (this.selectedWorksite.value == null || this.selectedWorksite?.value?.length === 0){
      alert('Select the Worksite first');
    }
    else {
      this.http.get(`http://localhost:3000/api/v0/worksite/${this.selectedWorksite.value}/2024/types/assets?limit=100&page=1`).subscribe((response:any) => {
        this.assets = response.data.map((item:any) =>{
          return item.id
        });	
		
        this.multipleReplicateResponse = [];
        for (let i = 0; i < this.inputValueReplicate; i++) {
            this.abprodRtMeta = {
                asset: this.assets[Math.floor(Math.random() * this.assets.length)],
                at: faker.random.number({ min: 1000000000000 }),
                type: 'replicate',
                v: 'version'
            }
          this.replicateResponse = {
            ac: faker.random.uuid(),
            cm: ['cm'],
            meta: this.abprodRtMeta,
          };
          this.multipleReplicateResponse.push(this.replicateResponse);
        }
        this.replicateData = JSON.stringify(
          this.multipleReplicateResponse,
          null,
          2
        );
		
})
}
    
  }

  home() {
    this.router.navigate(['']);
  }
}
