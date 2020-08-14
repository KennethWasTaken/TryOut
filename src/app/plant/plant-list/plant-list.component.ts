import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant.model';
import { PlantDataService } from '../plant-data.service';
import { Subject, Observable, EMPTY } from 'rxjs';
import { distinctUntilChanged, debounceTime, map, filter, catchError, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { isUndefined } from 'util';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  public filterPlantName: string= '';
  public filterPlant$ = new Subject<string>(); //elke getypte letter = nieuwe "event" op stream
  private _fetchPlants$: Observable<Plant[]>
  public errorMessage: string = '';


  /*private in constr creates member var + initializes it*/
  constructor(private _plantDataService: PlantDataService,
    private _router: Router,
    private _route: ActivatedRoute) {
    this.filterPlant$
      .pipe(
        distinctUntilChanged(),
        debounceTime(100),
        // map(val => val.toLowerCase())
      )
      .subscribe((val) => { //subscribe op elke nieuwe event op stream, aka elke keystrok
        const params = val ? { queryParams: { filter: val } } : undefined;
        this._router.navigate(['/plant/list'], params);
      });

    this._fetchPlants$ = this._route.queryParams
      .pipe(
        switchMap((newParams) => {
          // set the value of the input field with the url parameter as well
          if (newParams['filter']) {
            this.filterPlantName = newParams['filter'];
          }
          // when the queryparameter changes, take the filter parameter and use it to ask
          // the service for all recipes with this filter in their name
          // this._recipeDataService.getRecipes$(params['filter']).subscribe(
          return this._plantDataService.getPlants$(newParams['filter']);
        })
      )
      .pipe(
        catchError((err) => {
          this.errorMessage = err;
          return EMPTY;
        })
      );

  }
  ngOnInit(): void {
  }

  applyFilter(filter: string) {
    this.filterPlantName = filter;
  }

  get plants$(): Observable<Plant[]> {
    return this._fetchPlants$;
  }
}

