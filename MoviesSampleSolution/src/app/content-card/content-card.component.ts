import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() movie?: Content;

  constructor() {

  }


  ngOnInit(): void {
  }

  imageClicked(): void {
    console.log("ID: ", this.movie?.id, ", Title: ", this.movie?.title);
  }

}