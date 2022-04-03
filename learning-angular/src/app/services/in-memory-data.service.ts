import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { BUNCHOFFOOD } from '../../helper-files/contentDb';
import { Food } from '../../helper-files/Food';

interface FoodChild extends Food{
  specialprop?: string;
}

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    // setting it to the value of our array of content
    let fooditem: FoodChild = {
      id: 0,
      type: "fruit",
      name: 'Apple',
      imageUrl: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202201181338",
      body: "An apple a day is delicious",
      taste: "Sweet",
      tags: ["mutsu"],
      specialprop: "something"
    };
    let foodchild: Food[] = [
      fooditem,
      {
        id: 0,
        type: "fruit",
        name: 'Apple',
        imageUrl: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202201181338",
        body: "An apple a day is delicious",
        taste: "Sweet",
        tags: ["mutsu"]
    },
    {
        id: 1,
        name: 'Sushi',
        imageUrl: "",
        body: "Everybody loves sushi, apparently",
        taste: 'general',
        tags: ["sashimi", "hand roll"]
    },
    {
        id: 2,
        name: 'Potato',
        type: 'vegetable',
        imageUrl: '',
        body: 'The basis of many good dishes'
    }    ];
    const food : Food[] = foodchild;
    return {food};
  }

  genId(content: Food[]): number {
    return content.length > 0 ?
    Math.max(...content.map(c => c.id ?? 0)) + 1 : 2000;
  }
}
