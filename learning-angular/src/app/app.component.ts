import { Component } from '@angular/core';
import { Food } from 'src/helper-files/Food';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  lotsOfFood: FoodList;

  constructor() {
    this.title = '<em>Header 1</em>';
    // let name: string; // sets the type explicitly to a string
    // name = 'Peter';

    // name = 10;

    let name: any; // sets the type implicitly to a string
    // const lastName = 'Nikita';
    name = {
      value: 'Peter',
      position: 'Coordinator'
    };
    name = 10;


    // this.lotsOfFood = new FoodList(apple);
    // console.log(this.lotsOfFood.items);
    // this.lotsOfFood.items = [];

    // let anotherList: FoodList;
    // anotherList = new FoodList(apple);

  }

  processFood(foodItem: Food): string {
    console.log(foodItem.body);
    return foodItem.body;
  }

}


class FoodList {
  static foodCount = 0;
  private _items: Food[];

  constructor(item: Food) {
    this._items = []; // initialize array
    this._items[0] = item;
    this.increaseCount();
  }

  get items(): Food[] {
    return this._items;
  }
  set items(newItems: Food[]) {
    this._items = newItems;
  }

  increaseCount() {
    return ++FoodList.foodCount;
  }
}
