import { Component, OnInit } from '@angular/core';
import { Food } from 'src/helper-files/Food';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  banana: Food;
  constructor() {
    this.banana = {
      id: 1,
      type: "fruit",
      imageUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg",
      body: "Yellow > Green",
      taste: "Sweet"
    };

  }

  ngOnInit(): void {
  }

}
