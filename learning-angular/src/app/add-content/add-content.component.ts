import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Food } from '../../helper-files/Food';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {
  @Output() newFoodEvent: EventEmitter<Food> = new EventEmitter<Food>();
  newFood?: Food;

  constructor() { }

  ngOnInit(): void {
  }

  addFood(id: string, name: string, imageUrl: string, body: string, tags: string): void {
    this.newFood = {
      id: parseInt(id),
      name: name,
      imageUrl: imageUrl,
      body: body,
      tags: tags.split(",")
    };
    this.newFoodEvent.emit(this.newFood);
  }

}
