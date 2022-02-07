import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../helper-files/Food';

@Pipe({
  name: 'defaultType'
})
export class DefaultTypePipe implements PipeTransform {

  transform(foodItem: Food, dType?: string): string {
    return foodItem.type ?? dType ?? "News";
  }

}
