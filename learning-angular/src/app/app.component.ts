import { Component } from '@angular/core';
import { Food } from '../helper-files/Food';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  bunchOfFood: Food[];

  constructor() {
    this.bunchOfFood = [{
      id: 0,
      type: "fruit",
      name: 'Apple',
      imageUrl: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202201181338",
      body: "An apple a day is delicious",
      taste: "Sweet"
    },
    {
      id: 1,
      name: 'Sushi',
      type: 'dinner',
      imageUrl: "",
      body: "Everybody loves sushi, apparently",
      taste: 'general'
    },
    {
      id: 2,
      name: 'Potato',
      type: 'vegetable',
      imageUrl: '',
      body: 'The basis of many good dishes'
    }];

    this.title = 'Header 1';
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



  }

  updatePage(cardNameOnTheTypescriptSide: string): void {
    console.log("We did it, ", cardNameOnTheTypescriptSide);
    cardNameOnTheTypescriptSide = "somethingelse"
    console.log("after I tried changing it, ", cardNameOnTheTypescriptSide);

    this.title = "Changed it from the submit button";
  }


}
