import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PlantModule } from './plant/plant.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { PlantListComponent } from './plant/plant-list/plant-list.component';
import { AddPlantComponent } from './plant/add-plant/add-plant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlantComponent } from './plant/plant/plant.component';
import { VerzorgingComponent } from './plant/verzorging/verzorging.component';
import { EigenschapComponent } from './plant/eigenschap/eigenschap.component';
import { PlantFilterPipe } from './plant/plant-filter.pipe';
import { RouterModule, Routes, PreloadingStrategy, PreloadAllModules} from '@angular/router'
import { PlantResolver } from './plant/PlantResolver';
import { UserModule } from './user/user.module';
import { httpInterceptorProviders } from './interceptor/providers';
import { AppRoutingModule } from './app-routing.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({ 
  declarations: [
    AppComponent,
    PageNotFoundComponent, 
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PlantModule,
    HttpClientModule,
    MaterialModule,
    UserModule,
    AppRoutingModule
    
  ],
  providers: [httpInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
