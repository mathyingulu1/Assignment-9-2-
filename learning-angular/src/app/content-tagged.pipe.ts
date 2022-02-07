import { Pipe, PipeTransform } from '@angular/core';
import { Food } from 'src/helper-files/Food';

@Pipe({
  name: 'contentTagged'
})
export class ContentTaggedPipe implements PipeTransform {

  transform(foodList: Food[]): Food[] {
    return foodList.filter(f =>
      f.tags != null ? f.tags.length != 0 : false
    );
  }

}
