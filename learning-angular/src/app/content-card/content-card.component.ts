import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../../helper-files/Food';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() foodItem: Food;
  specialColor = 'blue';

  constructor() {
    this.foodItem = { id: 0, name: '', body: '', imageUrl: '' };
  }

  ngOnInit(): void {

  }
  // returnhtml(): string {
  //   return `<div class="type">${this.apple ? this.apple.type : ""}</div>
  //   <div class="body">{{ apple ? apple.body : "" }}</div>
  //   <div class="image"><img [src]="apple ? apple.imageUrl : ''"></div>
  //   <div class="taste">{{ apple ? apple.taste : "" }}</div>`;
  // }

}
