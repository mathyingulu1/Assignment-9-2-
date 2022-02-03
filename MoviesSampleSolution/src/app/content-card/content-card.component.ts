import { Component, OnInit } from '@angular/core';
import {ContentList} from "../helper-files/content-list";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  myList: ContentList;

  constructor(){

    this.myList = new ContentList();
    console.log("my list contains these items: ", this.myList.items);

    this.myList.addItem({
      id: 0,
      title: "Inception",
      description: "A movie in a movie",
      creator: "Christopher Noland",
      imgURL: "https://m.media-amazon.com/images/I/611ixoDpRLL._AC_.jpg"
    });
    this.myList.addItem({
      id: 1,
      title: "Kung Fu Panda",
      description: "Jack black if he was a panda",
      creator: "John Stevenson",
      imgURL: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
      type: "cartoon"
    });
    this.myList.addItem({
      id: 2,
      title: "Avengers",
      description: "A movie about getting Shawarma",
      creator: "Joss Wheden",
      imgURL: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
      type: "marvel"
    });

    console.log("my list contains these items: ", this.myList.items);


    console.log("The length of the array is:  ", this.myList.numberOfItems());

    console.log("THe html output is: ", this.myList.getHtml(0));

    // myList.items = [];
  }


  ngOnInit(): void {
  }

}
