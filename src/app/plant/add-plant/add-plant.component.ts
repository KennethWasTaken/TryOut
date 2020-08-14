import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Plant } from '../plant.model';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormArray
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Verzorging } from '../verzorging.model';
import { Eigenschap } from '../eigenschap.model';
import { PlantDataService } from '../plant-data.service';
import { debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';


@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent implements OnInit {
  public readonly waterQuantityOptions = ['Weinig', 'Gemiddeld', 'Veel'];
  public readonly lightQuantityOptions = ['Schaduw', 'Half schaduw', 'Zon'];
  public readonly maintenance = ['Gemakkelijk', 'Gemiddeld', 'Moeilijk'];
  //@Output() public newPlant = new EventEmitter<Plant>();
  public plant: FormGroup;
 public confirmationMessage: string ='';
 public errorMessage: string = '';


  constructor(private fb: FormBuilder, private _plantDataService: PlantDataService) { 
  }

  get eigenschappen(): FormArray { // Haal eigenschappen en verzorgingen op uit hun formgroup
    return <FormArray>this.plant.get('eigenschappen');
  }

  get verzorgingen(): FormArray {///get return of type AbstractControl so cast to FormArray
    return <FormArray>this.plant.get('verzorgingen');
  }

  ngOnInit(): void {
    this.plant = this.fb.group({
      plantName: this.fb.control('',
        [Validators.required, Validators.minLength(2)]),
      eigenschappen: this.fb.array([this.createEigenschappen()]),
      verzorgingen: this.fb.array([this.createVerzorgingen()]),
      beschrijving: this.fb.control('')
    });

    this.verzorgingen.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe();
      // verList => {
      //   const lastElement = verList[verList.length - 1];
      //   if (lastElement.water) {
      //     this.verzorgingen.push(this.createVerzorgingen());
      //   }
      // }

      // eigList => {
      //   const lastElement = eigList[eigList.length - 1];
      //   if (lastElement.locatie) {
      //     this.eigenschappen.push(this.createEigenschappen());
      //   }
      // }
    this.eigenschappen.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe();
  }

  createEigenschappen(): FormGroup {
    return this.fb.group(
      {
        locatie: [''],
        hoogte: [''],
        bloemkleur: ['']
      }
    );
  }
  createVerzorgingen(): FormGroup {
    return this.fb.group(
      {
        water: ['', [Validators.required]],
        licht: ['', [Validators.required]],
        onderhoud: ['', [Validators.required]],
      }
    );
  }

  onSubmit() {
    let verzorgingen = this.plant.value.verzorgingen.map(Verzorging.fromJSON);
    // verzorgingen = verzorgingen
    // .filter((ver) => ver.water.length > 2);

    let eigenschappen = this.plant.value.eigenschappen.map(Eigenschap.fromJSON);
    eigenschappen = eigenschappen;
    // .filter((eig) => eig.locatie.length > 2)
    let beschrijving = this.plant.value.beschrijving; //evt. checks?
 
    this._plantDataService
      .addNewPlant(new Plant(this.plant.value.plantName, eigenschappen, verzorgingen, beschrijving))
      .pipe(
        catchError((err) => {
          this.errorMessage = err;
          return EMPTY;
        })
      )
      .subscribe((pl: Plant) => {
        this.confirmationMessage = `plant ${pl.plantName} was successfully added`;
      });

    this.plant = this.fb.group({
            plantName: ['', [Validators.required, Validators.minLength(2)]],
            verzorgingen: this.fb.array([this.createVerzorgingen()]),
            eigenschappen: this.fb.array([this.createEigenschappen()]),
            beschrijving: ['']
          });
  }

  

  getErrorMessage(errors: any): string {
    if (errors.required) {
      return 'is required';
    } else if (errors.minLength) {
      return `needs at least ${errors.minlength.requiredLength} characters (has ${errors.minlength.actualLength})`;
    }
  }
}
