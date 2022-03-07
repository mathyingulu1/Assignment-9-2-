import { Component, OnInit } from '@angular/core';
import { Food } from '../helper-files/Food';
import { FoodService } from './services/food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  bunchOfFood: Food[];
  birthday: Date;

  constructor(private foodService: FoodService) {
    this.birthday = new Date();

    this.bunchOfFood = [];

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
        success("Victory!");
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

  ngOnInit(): void {
    // synchronous call, this isn't real world for retrieving data
    // this.bunchOfFood = this.foodService.getContent();

    // asynchronous call, using an arrow function
    this.foodService.getContentObs().subscribe(foodArray => this.bunchOfFood = foodArray);

    // asynchronous call, using a larger structured arrow function, which effectively works the same
    this.foodService.getContentObs().subscribe(foodArray => {
      return this.bunchOfFood = foodArray; // access bunch of food in the AppComponent object scope
    });

    // asynchronous call, not using an arrow function
    // this.foodService.getContentObs().subscribe(function (foodArray) {
    //   this.bunchOfFood = foodArray; // can't use the keyword this, because it tries to access values in this functions scope, not the object scope
    // });
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
