import { Pipe, PipeTransform } from '@angular/core';
import { Plant } from './plant.model';

@Pipe({
  name: 'plantFilter'
})
export class PlantFilterPipe implements PipeTransform {

  transform(plants: Plant[], plantName:string): Plant[]  {
    if (!plantName || plantName.length === 0) {
      return plants;
    }
    return plants.filter(rec =>
      rec.plantName.toLowerCase().startsWith(plantName.toLowerCase())
    );
  }

}
