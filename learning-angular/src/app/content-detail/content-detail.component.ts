import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../../helper-files/Food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  id?: number;
  foodItem?: Food;
  constructor(private route: ActivatedRoute, private foodService: FoodService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? "0"); // uses the + unary operator
      this.foodService.getContentItem(this.id).subscribe(
        (c) => {
          this.foodItem = c;
        });
    });
  }

}
