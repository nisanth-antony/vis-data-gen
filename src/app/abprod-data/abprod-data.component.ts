import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import faker from '@faker-js/faker';
import { MetaInterface } from '../schema/meta';
import { AssetInfo } from '../schema/asset-info';
import { Streak } from '../schema/streak';
import { StreakFragment } from '../schema/streakFragment';
import { StreakFragmentMeasurement } from '../schema/streakFragmentMeasurement';
import { StreakFragmentState } from '../schema/streakFragmentState';
import { StreakShape } from '../schema/streakShape';
import { ProjRef } from '../schema/projRef';
import { ShapeConfiguration } from '../schema/shapeConfiguration';
import { IcSensorInfo } from '../schema/icSensorInfo';
import { ReferenceObject } from '../schema/referenceObject';
import { ProjectFileRev } from '../schema/projectFileRev';
import { Tin } from '../schema/tin';
import { TinState } from '../schema/tinState';
import { Survey } from '../schema/survey';
import { SurveyPoint } from '../schema/surveyPoint';
import { SurveyState } from '../schema/surveyState';
import { RefSurvey } from '../schema/refSurvery';
import { Router } from '@angular/router';
import { AbprodSorMetadata } from '../schema/abprodSorMetadata';
import { CodelistAttributeValue } from '../schema/codelistAttributeValue';
import { PurposeEnum } from '../schema/purposeEnum';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SurfaceModellingFunctionEnum } from '../schema/surfaceModellingFunctionEnum';
import { SurfaceSimulationFunctionEnum } from '../schema/surfaceSimulationFunctionEnum';
import { CharacterString255 } from '../schema/characterString255';
import { WorkingToolEffectEnum } from '../schema/workingToolEffectEnum';

@Component({
  selector: 'app-abprod-data',
  templateUrl: './abprod-data.component.html',
  styleUrls: ['./abprod-data.component.scss'],
})
export class AbprodDataComponent implements OnInit {
  // Asset
  // assetClass!: string[];
  // assetData!: string;
  // inputValueAsset!: number;
  // assetResponse!: AssetInfo;
  // multipleAssetResponse = [] as any;

  //Meta
  abprodSorMeta!: AbprodSorMetadata;

  //Streak
  inputValueStreak!: number;
  streakData!: string;
  streakResponse!: Streak;
  multipleStreakResponse = [] as any;

  streakFragments!: StreakFragment;
  measurements!: StreakFragmentMeasurement[];
  streakFragmentMeasurement!: StreakFragmentMeasurement;
  streakShape!: StreakShape;
  streakFragmentState!: StreakFragmentState;
  projRef!: ProjRef;
  purposeSt!: string[];
  sensorQuality!: string[];
  shapeConfiguration!: ShapeConfiguration;
  icSensorInfo!: IcSensorInfo;
  icSensorKindEnum!: string[];
  referenceObject!: ReferenceObject;
  projectFileRev!: ProjectFileRev;
  surfaceSimulationFunctionEnum!: string[];
  attributes!: CodelistAttributeValue[];
  codelistAttributeValue!: CodelistAttributeValue;

  //Tin
  inputValueTin!: number;
  tinData!: string;
  tinResponse!: Tin;
  multipleTinResponse = [] as any;
  tinState!: TinState;

  //Survey
  inputValueSurvey!: number;
  surveyData!: string;
  surveyResponse!: Survey;
  multipleSurveyResponse = [] as any;
  surveyPoint!: SurveyPoint;
  surveyState!: SurveyState;
  deletedPoints!: CharacterString255;
  
  //RefSurvey
  inputValueRefSurvey!: number;
  refSurveyData!: string;
  refSurveyResponse!: RefSurvey;
  multipleRefSurveyResponse = [] as any;

  selectedWorksite = new FormControl();
  worksites: string[] = []
  assets: string[] = []
  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    this.inputValueStreak = 1;
    this.inputValueTin = 1;
    this.inputValueSurvey = 1;
    this.inputValueRefSurvey = 1;
    this.purposeSt = ['asbuilt', 'current'];
    this.sensorQuality = [
      'rtk',
      'total_station',
      'other',
    ];
    this.surfaceSimulationFunctionEnum = [
      'false',
      'true',
      'lower_or_no_current',
      'higher_or_no_current',
      'has_current',
      'lower_and_has_current',
      'higher_and_has_current',
    ];
    this.icSensorKindEnum = [
      'evib1',
      'evib2',
      'hmv',
      'cmv',
      'kb',
      'mdp',
      'omega',
      'fdvk',
      'ccv',
      'other',
    ];
    this.http.get('http://localhost:3000/api/v0/2024/worksite_directory?limit=100&page=1').subscribe((response:any) => {
      this.worksites = response.data.map((item:any) =>{
        return item.worksite_base_url.split('/').pop()
      });
    })
    
  }
  // fetchAssetData() {
  //   this.multipleAssetResponse = [];
  //   for (let i = 0; i < this.inputValueAsset; i++) {
  //     this.meta = {
  //       asset: faker.random.uuid(),
  //       at: faker.date.future()
  //       type: 'asset_info',
  //     };
  //     this.assetResponse = {
  //       type: 'asset_info',
  //       asset_class:
  //         this.assetClass[Math.floor(Math.random() * this.assetClass.length)],
  //       equipment_id: faker.random.uuid(),
  //       meta: this.meta,
  //       oem_iso_id: faker.vehicle.vin(),
  //       serial_number: faker.vehicle.vrm(),
  //     };
  //     this.multipleAssetResponse.push(this.assetResponse);
  //   }
  //   this.assetData = JSON.stringify(this.multipleAssetResponse, null, 2);
  // }
  async fetchStreakData() {
    if (this.selectedWorksite.value == null || this.selectedWorksite?.value?.length === 0){
      alert('Select the Worksite first');
    }
    else {
      this.http.get(`http://localhost:3000/api/v0/worksite/${this.selectedWorksite.value}/2024/types/assets?limit=100&page=1`).subscribe((response:any) => {
        this.assets = response.data.map((item:any) =>{
          return item.id
        });
        this.multipleStreakResponse = [];
      for (let i = 0; i < this.inputValueStreak; i++) {
        this.streakShape = {
          auto: faker.random.boolean(),
          cv: [faker.random.number()],
          ncv: [faker.random.number()],
          p: [
            [
              parseInt(faker.address.longitude()),
              parseInt(faker.address.latitude()),
              faker.random.number({min:1,max:5000})
            ],
            [
              parseInt(faker.address.longitude()),
              parseInt(faker.address.latitude()),
              faker.random.number({min:1,max:5000})
            ],
            [
              parseInt(faker.address.longitude()),
              parseInt(faker.address.latitude()),
              faker.random.number({min:1,max:5000})
            ],
          ],
          q: [
            [10, 12],
            [13, 14],
          ],
          smf: faker.random.arrayElement([SurfaceSimulationFunctionEnum.False, SurfaceSimulationFunctionEnum.HasCurrent, SurfaceSimulationFunctionEnum.HigherAndHasCurrent, SurfaceSimulationFunctionEnum.HigherOrNoCurrent, SurfaceSimulationFunctionEnum.LowerAndHasCurrent, SurfaceSimulationFunctionEnum.LowerOrNoCurrent, SurfaceSimulationFunctionEnum.True
          ]),
          t: [32.0],
          va: faker.random.number({ min: 1, max: 10 }),
          vf: faker.random.number({ min: 1, max: 100 }),
          vj: faker.random.boolean(),
          vs: faker.random.boolean(),
        };
        this.streakFragmentMeasurement = {
          at: faker.random.number(),
          h: faker.random.number(),
          reverse: faker.random.boolean(),
          s: [this.streakShape],
          v: faker.random.number(),
        };
        this.projectFileRev = {
          id: faker.random.uuid(),
          rev: 'revision',
        };
        this.referenceObject = {
          element_name: 'referenceObjectElementName',
          file: this.projectFileRev,
        };
        this.codelistAttributeValue = {
          attribute: 'codelistAttributeValue',
          value: 'valueProperty'
        }
        this.projRef = {
          attributes: [this.codelistAttributeValue],
          category_code: 'categoryCode',
          code: 'code',
          code_list: faker.random.uuid(),
          material: faker.random.uuid(),
          operator: faker.random.uuid(),
          reference_object: this.referenceObject,
          work_order: faker.random.uuid(),
        };
        this.icSensorInfo = {
          kind: this.icSensorKindEnum[
            Math.floor(Math.random() * this.icSensorKindEnum.length)
          ],
        };
        this.shapeConfiguration = {
          ic_sensors: [this.icSensorInfo],
          n: 3,
          wte: faker.random.arrayElement([WorkingToolEffectEnum.Cv, WorkingToolEffectEnum.Height, WorkingToolEffectEnum.Pass, WorkingToolEffectEnum.Temp])
        };
        this.streakFragmentState = {
          id: faker.random.uuid(),
          proj_ref: this.projRef,
          purpose_st:
            this.purposeSt[Math.floor(Math.random() * this.purposeSt.length)],
          sensor_quality: this.sensorQuality[Math.floor(Math.random() * this.sensorQuality.length)],
          shapes: [this.shapeConfiguration],
        };
        this.streakFragments = {
          measurements: [
            this.streakFragmentMeasurement,
            this.streakFragmentMeasurement,
          ],
          state: this.streakFragmentState,
        };
       
        this.abprodSorMeta = {
          id: faker.random.uuid(),
          asset: this.assets[Math.floor(Math.random() * this.assets.length)],
          // asset: 'ed58d7b8-3445-59ba-2d9b-13f02f3eb780',
          type: 'streak',
          v: 'version'
        };
        this.streakResponse = {
          fragments: [this.streakFragments],
          meta: this.abprodSorMeta,
        };
        this.multipleStreakResponse.push(this.streakResponse);
      } 
      this.streakData = JSON.stringify(this.multipleStreakResponse, null, 2);
      })
    }
  }

  fetchTinData() {
    if (this.selectedWorksite.value == null || this.selectedWorksite?.value?.length === 0){
      alert('Select the Worksite first');
    }
    else {
      this.http.get(`http://localhost:3000/api/v0/worksite/${this.selectedWorksite.value}/2024/types/assets?limit=100&page=1`).subscribe((response:any) => {
        this.assets = response.data.map((item:any) =>{
          return item.id
        });	
        this.multipleTinResponse = [];
        for (let i = 0; i < this.inputValueTin; i++) {
          this.abprodSorMeta = {
            id: faker.random.uuid(),
            asset: this.assets[Math.floor(Math.random() * this.assets.length)],
            type: 'tin',
            v: 'version'
          }
          this.projectFileRev = {
            id: faker.random.uuid(),
            rev: 'revision',
          };
          this.referenceObject = {
            element_name: 'referenceObjectElementName',
            file: this.projectFileRev,
          };
          this.codelistAttributeValue = {
            attribute: 'codelistAttributeValue',
            value: 'valueProperty'

          }
          this.projRef = {
            attributes: [this.codelistAttributeValue],
            category_code: 'categoryCode',
            code: 'code',
            code_list: faker.random.uuid(),
            material: faker.random.uuid(),
            operator: faker.random.uuid(),
            reference_object: this.referenceObject,
            work_order: faker.random.uuid(),
          };
          this.tinState = {
            proj_ref: this.projRef,
            purpose_st:faker.random.arrayElement([PurposeEnum.Asbuilt, PurposeEnum.Current]),
            sensor_quality: this.sensorQuality[Math.floor(Math.random() * this.sensorQuality.length)],
          };
          this.tinResponse = {
            at: faker.random.number({ min: 1000000000000 }),
            faces: [
              [
                faker.random.number({ min: 1, max: 1000 }),
                faker.random.number({ min: 1, max: 1000 }),
                faker.random.number({ min: 1, max: 1000 }),
              ],
            ],
            meta: this.abprodSorMeta,
            points: [
              [
                parseInt(faker.address.longitude()),
                parseInt(faker.address.latitude()),
                parseInt(faker.address.longitude()),
              ],
            ],
            state: this.tinState,
          };
          this.multipleTinResponse.push(this.tinResponse);
        }
        this.tinData = JSON.stringify(this.multipleTinResponse, null, 2);
		
		
})
}

  }

  fetchSurveyData() {
    if (this.selectedWorksite.value == null || this.selectedWorksite?.value?.length === 0){
      alert('Select the Worksite first');
    }
    else {
      this.http.get(`http://localhost:3000/api/v0/worksite/${this.selectedWorksite.value}/2024/types/assets?limit=100&page=1`).subscribe((response:any) => {
        this.assets = response.data.map((item:any) =>{
          return item.id
        });	
        this.multipleSurveyResponse = [];
        for (let i = 0; i < this.inputValueSurvey; i++) {
          this.abprodSorMeta = {
            id: faker.random.uuid(),
            asset: this.assets[Math.floor(Math.random() * this.assets.length)],
            type: 'survey',
            v: 'version'
          };
          this.projectFileRev = {
            id: faker.random.uuid(),
            rev: 'revision',
          };
          this.referenceObject = {
            element_name: 'referenceObjectElementName',
            file: this.projectFileRev,
          };
          this.codelistAttributeValue = {
            attribute: 'codelistAttributeValue',
          value: 'valueProperty'

          }
          this.projRef = {
            attributes: [this.codelistAttributeValue],
            category_code: 'categoryCode',
            code: 'code',
            code_list: faker.random.uuid(),
            material: faker.random.uuid(),
            operator: faker.random.uuid(),
            reference_object: this.referenceObject,
            work_order: faker.random.uuid(),
          }
          this.surveyPoint = {
            at: faker.random.number({ min: 1000000000000 }),
            attr: [this.codelistAttributeValue],
            dh: faker.random.number({ min: 1, max: 100 }),
            dn: faker.random.number({ min: 1, max: 100 }),
            dz: faker.random.number({ min: 1, max: 100 }),
            id: faker.random.uuid(),
            line_id: faker.random.uuid(),
            p: [
              parseInt(faker.address.longitude()),
              parseInt(faker.address.latitude()),
              parseInt(faker.address.longitude()),
            ],
            projRef: this.projRef,
            q: [
              faker.random.number({ min: 1, max: 10 }),
              faker.random.number({ min: 1, max: 10 }),
            ],
          };
          this.surveyState = {
            proj_ref: this.projRef,
            purpose_st: faker.random.arrayElement([PurposeEnum.Asbuilt, PurposeEnum.Current]),
            sensor_quality: this.sensorQuality[Math.floor(Math.random() * this.sensorQuality.length)],
          };
          this.deletedPoints =  faker.random.uuid();
          this.surveyResponse = {
            deleted_points: [this.deletedPoints],
            meta: this.abprodSorMeta,
            points: [this.surveyPoint],
            state: this.surveyState,
          };
          this.multipleSurveyResponse.push(this.surveyResponse);
        }
        this.surveyData = JSON.stringify(this.multipleSurveyResponse, null, 2);
		
		
})
}
 
  }

  fetchRefSurveyData() {
    if (this.selectedWorksite.value == null || this.selectedWorksite?.value?.length === 0){
      alert('Select the Worksite first');
    }
    else {
      this.http.get(`http://localhost:3000/api/v0/worksite/${this.selectedWorksite.value}/2024/types/assets?limit=100&page=1`).subscribe((response:any) => {
        this.assets = response.data.map((item:any) =>{
          return item.id
        });	
      
        this.multipleRefSurveyResponse = [];
    for (let i = 0; i < this.inputValueRefSurvey; i++) {
      this.abprodSorMeta = {
        id: faker.random.uuid(),
        asset: this.assets[Math.floor(Math.random() * this.assets.length)],
        type: 'ref_survey',
        v: 'version'
      };
      this.projectFileRev = {
        id: faker.random.uuid(),
        rev: 'revision',
      };
      this.referenceObject = {
        element_name: 'referenceObjectElementName',
        file: this.projectFileRev,
      };
      this.codelistAttributeValue = {
        attribute: 'codelistAttributeValue',
        value: 'valueProperty'

      }
      this.projRef = {
        attributes: [this.codelistAttributeValue],
        category_code: 'categoryCode',
        code: 'code',
        code_list: faker.random.uuid(),
        material: faker.random.uuid(),
        operator: faker.random.uuid(),
        reference_object: this.referenceObject,
        work_order: faker.random.uuid(),
      };
      this.surveyState = {
        proj_ref: this.projRef,
        purpose_st: faker.random.arrayElement([PurposeEnum.Asbuilt, PurposeEnum.Current]),
        sensor_quality: this.sensorQuality[Math.floor(Math.random() * this.sensorQuality.length)],
      };
      this.refSurveyResponse = {
        meta: this.abprodSorMeta,
        state: this.surveyState,
        survey: this.referenceObject
      };
      this.multipleRefSurveyResponse.push(this.refSurveyResponse);
    }
    this.refSurveyData = JSON.stringify(this.multipleRefSurveyResponse, null, 2);
		
		
})
}
  
  }
  home(){
    this.router.navigate([''])
  }
}


