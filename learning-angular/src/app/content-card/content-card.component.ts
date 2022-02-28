import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../../helper-files/Food';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() foodItem: Food;
  // @Input() foodList: Food[];
  specialColor = 'blue';

  constructor() {
    // this.foodList = [];
    this.foodItem = { id: 0, name: '', body: '', imageUrl: '' };
  }

  ngOnInit(): void {
    // console.log("Food list passed to the child ", this.foodList);
    // this.foodList.push({
    //   id: 0,
    //   type: "vegetable",
    //   name: 'Broccoli',
    //   imageUrl: "",
    //   body: "An broccoli a day is useful",
    //   taste: "water"
    // });

  }
  // returnhtml(): string {
  //   return `<div class="type">${this.apple ? this.apple.type : ""}</div>
  //   <div class="body">{{ apple ? apple.body : "" }}</div>
  //   <div class="image"><img [src]="apple ? apple.imageUrl : ''"></div>
  //   <div class="taste">{{ apple ? apple.taste : "" }}</div>`;
  // }

}
