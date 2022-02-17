import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'contentTypeFilter'
})
export class ContentTypeFilterPipe implements PipeTransform {

  transform(contentList: Content[], filterByThisType?: string): Content[] {
    console.log("filter value: ", filterByThisType);
    // return contentList.filter(c => c.type == filterByThisType);
    return contentList.filter(c => {
      if (filterByThisType) {
        return c.type == filterByThisType;
      } else { // filterByThisType is not set
        return !c.type; // keep items where type is not set as well
      }
    });
  }

}
