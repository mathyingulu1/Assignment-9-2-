import { Component, OnInit } from '@angular/core';
import { Food } from '../../helper-files/Food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  bunchOfFood: Food[];

  constructor(private foodService: FoodService) {
    this.bunchOfFood = [];

  }

  ngOnInit(): void {
    this.getFoodFromServer();

  }
  getFoodFromServer(): void{
    this.foodService.getContent().subscribe(foodArray => this.bunchOfFood = foodArray);
  }
  updatePage(cardNameOnTheTypescriptSide: string): void {
    console.log("We did it, ", cardNameOnTheTypescriptSide);
    cardNameOnTheTypescriptSide = "somethingelse"
    console.log("after I tried changing it, ", cardNameOnTheTypescriptSide);

//    this.title = "Changed it from the submit button";
  }


  updateFoodInList(contentItem: Food): void {
    // let id = this.bunchOfFood.find(foodItem => foodItem.id == contentItem.id);

    this.foodService.updateContent(contentItem).subscribe(() => {
      console.log("Content updated successfully");
      this.getFoodFromServer();
    });
  }

  addFoodToList(newFoodFromChild: Food): void {
    this.foodService.addContent(newFoodFromChild).subscribe(newContentFromServer => {
      console.log("New content from server: ", newContentFromServer);
      // potentially useful if the server data is frequently updated
      // this.getFoodFromServer();


      // more efficient way of getting just 1 new item and adding it to the list
      this.bunchOfFood.push(newContentFromServer);
      this.bunchOfFood = [...this.bunchOfFood]; // using the spread operator

    });
  }
  // addFoodToList(newFoodFromChild: Food) {
  //   console.log("old array values ", this.bunchOfFood);

  //   this.bunchOfFood.push(newFoodFromChild);
  //   // This is a newer, faster way to clone an array
  //   this.bunchOfFood = [...this.bunchOfFood]; // using the spread operator

  //   console.log("Did the item get added? ", newFoodFromChild);
  //   console.log("new array values ", this.bunchOfFood);
  // }

}
