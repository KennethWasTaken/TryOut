import { Component, OnInit } from '@angular/core';
import { PlantDataService } from '../plant-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public filterPlantId:string= '1';
  public plant:any;
  constructor(private _plantDataService: PlantDataService,
    private route: ActivatedRoute,) {
    this.plant=null;
  }

  ngOnInit(): void {
  }
  onSearch(){
     this._plantDataService.getPlant$(this.filterPlantId).subscribe(p=>{
       this.plant=p;})
      // this.route.paramMap.subscribe(pl =>
      //     this._plantDataService.getPlant$(pl.get('id'))
      //       .subscribe(item => (this.plant = item)));
    }
  

}
