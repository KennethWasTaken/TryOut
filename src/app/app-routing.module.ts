import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, PreloadAllModules, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlantListComponent } from './plant/plant-list/plant-list.component'
import { AuthGuard } from './user/auth.guard';
import { PlantDetailComponent } from './plant/plant-detail/plant-detail.component';

const appRoutes: Routes = [
  {
    path: 'plant',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./plant/plant.module').then(mod => mod.PlantModule),
        data: {preload :true},
  },
  //{path: 'plant/detail/:id', component : PlantDetailComponent},//-> in plantModule gedefinieerd
  {
    path: 'add',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./plant/plant.module').then(mod => mod.PlantModule),
        data: {preload :true},
  }, //dus alles met plant in url plant.module laten awerken
  { path: '', redirectTo: 'plant/list', pathMatch:'full'}, // , pathMatch: 'full'
  { path: '**', component: PageNotFoundComponent }
   //It is important to do this when redirecting empty-path routes. Otherwise, 
  //because an empty path is a prefix of any URL, 
  //the router would apply the redirect even when navigating to the redirect destination,
  // creating an endless loop.
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
