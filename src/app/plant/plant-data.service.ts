import { Injectable } from '@angular/core';
import { Plant } from './plant.model';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { map, tap, catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlantDataService {
  private _reloadPlants$ = new BehaviorSubject<boolean>(true);

  deletePlant(plant: Plant) {
    return this.http.delete(`${environment.apiUrl}/plants/${plant.id}`)
     .pipe(tap(console.log), catchError(this.handleError))
     .subscribe(()=> {
       this._reloadPlants$.next(true);
     })
  }
 // private _plants = PLANTS; geen mock cus backend data
 private _plants: Plant[];
 private _plants$ = new BehaviorSubject<Plant[]>([]);

  constructor(private http: HttpClient) {
    // this.plants$.subscribe((plants:Plant[])=> {
    //   this._plants = plants;
    //   this._plants$.next(this._plants);
    // })

   }
  //  get allPlants$(): Observable<Plant[]> {
  //   return this._plants$;
  //  }
 
  get plants$(): Observable < Plant[] >{
    return this.http.get(`${environment.apiUrl}/plants/`).pipe(
      catchError(this.handleError),
      tap(console.log),
      map(
        (list: any[]): Plant[] => list.map(Plant.fromJSON)  
      )
    );
  }
  
  handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err instanceof HttpErrorResponse) {
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = `an unknown error occurred ${err}, google has all solutions. Bow to our lord stackOverflow`;
    }
    console.error(err);
    return throwError(errorMessage); 
  }

  addNewPlant(plant:Plant){
    //this._plants= [...this._plants, plant];
    return this.http
      .post(`${environment.apiUrl}/plants/`, plant.toJSON())
      .pipe(catchError(this.handleError), map(Plant.fromJSON))
      .pipe(
        catchError((err) => {
          return throwError(err);
        }),
        tap((rec: Plant) => {
          this._reloadPlants$.next(true);
        })
      );
      // .subscribe((pla: Plant) => {
      //   this._plants = [...this._plants, pla];
      //   this._plants$.next(this._plants);
      // });
  }

  getPlant$(id:string): Observable<Plant> {

    return this.http
      .get(`${environment.apiUrl}/plants/${id}`)
      .pipe(catchError(this.handleError), map( Plant.fromJSON));
      //map(Plant.fromJSON)
  }

  getPlants$(plantName?: string) {
    return this._reloadPlants$.pipe(
      switchMap(() => this.fetchPlants$(plantName))
    );
  }

  fetchPlants$(plantName?: string) {
    let params = new HttpParams();
    params = plantName ? params.append('plantName', plantName) : params;
    return this.http.get(`${environment.apiUrl}/plants/`, { params }).pipe(
      catchError(this.handleError),
      map((list: any[]): Plant[] => list.map(Plant.fromJSON))
    );
  }


}