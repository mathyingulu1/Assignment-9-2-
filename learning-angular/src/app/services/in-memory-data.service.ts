import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { BUNCHOFFOOD } from '../../helper-files/contentDb';
import { Food } from '../../helper-files/Food';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    // setting it to the value of our array of content
    const food : Food[] = BUNCHOFFOOD;
    return {food};
  }
  
  genId(content: Food[]): number {
    return content.length > 0 ?
    Math.max(...content.map(c => c.id ?? 0)) + 1 : 2000;
  }
}
