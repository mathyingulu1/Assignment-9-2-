import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'contentTypeFilter'
})
export class ContentTypeFilterPipe implements PipeTransform {
  /* this takes a content array and returns a filtered version
     if filterByThisType is provided, then it will only return items of that type
     if filterByThisType is not provided, then it will return items with no type set or empty string types (anything that's falsy)
  */
  transform(contentList: Content[], filterByThisType?: string): Content[] {
    console.log("filter value: ", filterByThisType);
    // return contentList.filter(c => c.type == filterByThisType);
    return contentList.filter(c => {
      if (filterByThisType) {
        return c.type?.toLowerCase() == filterByThisType.toLowerCase();
      } else { // filterByThisType is not set
        return !c.type; // keep items where type is not set as well
      }
    });
  }

}
