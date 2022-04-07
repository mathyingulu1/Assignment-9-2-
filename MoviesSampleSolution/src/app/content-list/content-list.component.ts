import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  searchMessage: string = "";
  searchFlag: boolean = false;
  movieList: Content[];
  constructor(private movieService: MovieServiceService) {
    this.movieList = [];
  }

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe(list => {
      this.movieList = list;
    });
  }

  checkForTitle(searchValue: string): void {
    let searchList = this.movieList.filter(c => c.title == searchValue);
    if (searchList.length > 0) {
      this.searchMessage = "Found the movie!";
      this.searchFlag = true;
    }
    else {
      this.searchMessage = "No movie with that title";
      this.searchFlag = false;
    }
  }
  addContentToList(newContentItem: Content): void {
    // this.movieList.push(newContentItem);
    // this.movieList = [...this.movieList];

    this.movieService.getMovieList().subscribe(list => {
      this.movieList = list;
    });
  }
}
