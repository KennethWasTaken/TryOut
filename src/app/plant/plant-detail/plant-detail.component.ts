import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant.model';
import { ActivatedRoute } from '@angular/router';
import { PlantDataService } from '../plant-data.service';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit {
  public plant: Plant;
  filterPlantId:string="0";

  onSearch(){
    this.plantDataService.getPlant$(this.filterPlantId).subscribe(p=>{
      this.plant=p;
    })
  }

  constructor(private route: ActivatedRoute,
    private plantDataService: PlantDataService) {
      this.plant=null;
     }

   
  ngOnInit(): void {
    //this.route.data.subscribe(item => (this.plant = item['plant']));
  }

    // const id = this.route.snapshot.paramMap.get('id');
    // if(!id){
    //   this.plantDataService.getPlant$('1')
    //   .subscribe(item => this.plant = item);
    // }
    // else{
    
    // this.plantDataService.getPlant$(id)
    //   .subscribe(item => this.plant = item);
 
    //this.plantDataService.getPlants$

    // this.route.paramMap.subscribe(pl =>
    //   this.plantDataService.getPlant$(pl.get('id'))
    //     .subscribe(item => (this.plant = item))
    // );
  }

