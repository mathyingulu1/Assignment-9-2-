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
  birthday: Date;

  constructor() {
    this.birthday = new Date();

    this.bunchOfFood = [{
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


    //promises example 1
    // setTimeout(function () {
    //   console.log("Second console log");
    // }, 0);
    // Promise.resolve().then(function () {
    //   console.log("Third console log");
    // });

    let ourPromise = new Promise((success, fail) => {
      let testPass = false;
      if (testPass) {
        success("Success was achieved!");
      }
      else {
        fail("Failure :(");
      }
    });

    console.log("First console log");

    ourPromise
      .then(function (successMessage) {
        console.log("The promise succeeded and came back with the following message: ", successMessage);
      })
      .catch(function (failureMessage) {
        console.log("The promise failed and came back with the following message: ", failureMessage);
      });

    console.log("Fourth console log");

    let getStuff = async function () {
      return "stuff";
    }
    // function async getStuffUsingOldFunctionDefinition(): string{
    //   return "stuff";
    // }
    let getTheSameStuff = async function () {
      return "Similar stuff";
    }

    //different way to represent functions
    let getAllTheStuff = async () => {
      const theFirstStuff = getStuff();
      const theSecondStuff = getTheSameStuff();
      //returns both promises
      return await Promise.all([theFirstStuff, theSecondStuff]);
    }
    getAllTheStuff().then((value) => {
      console.log("First value from the getAllTheStuff method: ", value[0]);
      console.log("Second value from the getAllTheStuff method: ", value[1]);
    });

  }

  updatePage(cardNameOnTheTypescriptSide: string): void {
    console.log("We did it, ", cardNameOnTheTypescriptSide);
    cardNameOnTheTypescriptSide = "somethingelse"
    console.log("after I tried changing it, ", cardNameOnTheTypescriptSide);

    this.title = "Changed it from the submit button";
  }


  addFoodToList(newFoodFromChild: Food) {
    console.log("old array values ", this.bunchOfFood);

    this.bunchOfFood.push(newFoodFromChild);

    // We need to clone the array for the pipe to work
    // This is an old way of cloning an object
    // this.bunchOfFood = Object.assign([], this.bunchOfFood);

    // This is a newer, faster way to clone an array
    this.bunchOfFood = [...this.bunchOfFood]; // using the spread operator

    console.log("Did the item get added? ", newFoodFromChild);
    console.log("new array values ", this.bunchOfFood);
  }
}
