import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';

import { PlantComponent } from './plant/plant.component';
import { VerzorgingComponent } from './verzorging/verzorging.component';
import { EigenschapComponent } from './eigenschap/eigenschap.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { AddPlantComponent } from './add-plant/add-plant.component';
import { PlantFilterPipe } from './plant-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { PlantResolver } from './PlantResolver';
import { SearchComponent } from './search/search.component';


const plantRoutes: Routes = [
  { path: 'list', component: PlantListComponent },
  { path: 'plant', component: AddPlantComponent },
//  { path: 'detail', component: PlantDetailComponent },
  { path: 'search', component: SearchComponent }
  // , resolve: { plant: PlantResolver }
];

@NgModule({
  declarations: [
    PlantComponent,
    VerzorgingComponent,
    EigenschapComponent,
    PlantListComponent,
    AddPlantComponent,
    PlantFilterPipe,
    PlantDetailComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(plantRoutes)//hebt al de rest ingeladen van RouterModule door de forRoot in app.module
  ],
  exports: [AddPlantComponent, PlantListComponent]
})
export class PlantModule { }
