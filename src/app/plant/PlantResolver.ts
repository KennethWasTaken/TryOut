import { Injectable } from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Plant } from './plant.model';
import { PlantDataService } from './plant-data.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PlantResolver implements Resolve<Plant> {
    constructor(private plantService: PlantDataService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Plant> {
        return this.plantService.getPlant$(route.params['id']);
    }
}
