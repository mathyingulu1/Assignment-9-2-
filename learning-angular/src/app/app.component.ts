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
  birthday: Date;

  constructor(private foodService: FoodService) {
    this.birthday = new Date();


    this.title = 'Header 1';

  }

  ngOnInit(): void {
  }

}
