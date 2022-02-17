import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  searchMessage: string = "";
  searchFlag: boolean = false;
  movieList: Content[];
  constructor() {
    this.movieList = [{
      id: 0,
      title: "Inception",
      description: "A movie in a movie",
      creator: "Christopher Noland",
      imgURL: "https://m.media-amazon.com/images/I/611ixoDpRLL._AC_.jpg",
      tags: ["movieinamovie", "cool stunts"]
    }, {
      id: 1,
      title: "Kung Fu Panda",
      description: "Jack black if he was a panda",
      creator: "John Stevenson",
      imgURL: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
      type: "cartoon"
    }, {
      id: 2,
      title: "Avengers",
      description: "A movie about getting Shawarma",
      creator: "Joss Wheden",
      imgURL: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
      type: "sci-fi",
      tags: ["lotsOfMainCharacters", "firstofmany"]
    }, {
      id: 3,
      title: "Hocus Pocus",
      description: "She had great hair in this movie",
      creator: "Kenny Ortega",
      imgURL: "",
      type: "drama"
    }, {
      id: 4,
      title: "Avatar",
      description: "They were all really tall",
      creator: "James Cameron",
      imgURL: "",
      type: "sci-fi"
    }, {
      id: 5,
      title: "White Tiger",
      description: "I sure hope there's a tiger in it",
      creator: "Ramin Bahrani",
      imgURL: "",
      type: "drama"
    },{
      id: 6,
      title: "IT",
      description: "It's a movie about a clown",
      creator: "Andrés Muschietti",
      imgURL: ""
    }];
  }

  ngOnInit(): void {
  }

  checkForTitle(searchValue: string): void{
    let searchList = this.movieList.filter(c => c.title == searchValue);
    if (searchList.length > 0){
      this.searchMessage  = "Found the movie!";
      this.searchFlag = true;
    }
    else{
      this.searchMessage  = "No movie with that title";
      this.searchFlag = false;
    }
  }
  donothing(){

  }
}
