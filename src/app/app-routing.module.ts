import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbprodDataComponent } from './abprod-data/abprod-data.component';
// import { DateConverterComponent } from './date-converter/date-converter.component';
import { HomeComponent } from './home/home.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { RtTypeComponent } from './rt-type/rt-type.component';
import { VisComponent } from './vis/vis.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'vis', component: VisComponent},
  {path:'abprodData', component: AbprodDataComponent},
  {path:'rtTypeData', component: RtTypeComponent},
  // {path:'dateConverter', component: DateConverterComponent},
  {path:'jsonFormatter', component: JsonFormatterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
