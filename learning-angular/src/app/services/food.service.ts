import { Injectable } from '@angular/core';
import { BUNCHOFFOOD } from '../../helper-files/contentDb';
import { Food } from '../../helper-files/Food';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getContent(): Food[] { // get the content synchronously - not real world
    return BUNCHOFFOOD;
  }

  getContentObs(): Observable<Food[]> { //async function
    return of(BUNCHOFFOOD);
  }
}
