import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { MovieServiceService } from './services/movie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MoviesSampleSolution';
  someMovie?: Content;
  constructor(private mService: MovieServiceService) { }

  ngOnInit(): void{
    this.mService.getSingleMovie(1).subscribe(movie => this.someMovie = movie);
  }
  displayMovieItem(id: string): void{
    this.mService.getSingleMovie(parseInt(id)).subscribe(movie => this.someMovie = movie);
  }
}
