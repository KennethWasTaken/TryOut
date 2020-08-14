import { Component, OnInit, Input } from '@angular/core';
import { Plant } from '../plant.model';
import { PlantDataService } from '../plant-data.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {
  @Input() public plant: Plant;


  constructor(private _plantDataService:PlantDataService) {


  }

  ngOnInit(): void {
  }
  deletePlant() {
    this._plantDataService.deletePlant(this.plant);
  }
}
