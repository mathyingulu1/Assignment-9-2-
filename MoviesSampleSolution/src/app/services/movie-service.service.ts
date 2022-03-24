import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { MOVIELIST } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private messageService: MessageService) { }

  getMovieList(): Observable<Content[]> {
    this.messageService.add("Content array loaded!");
    return of(MOVIELIST);
  }

  getSingleMovie(id: number): Observable<Content> {
    // if (id < MOVIELIST.length && id >= 0)
    // {
    //   return of(MOVIELIST[id]);
      
    // }
    // else {
    //   this.messageService.add("id is invalid");
    // }
    
    let filteredMovieList: Content[] = MOVIELIST.filter(movieItem => movieItem.id === id);
    // if the id is out of range, below 0 or above the length, the filter will return an empty array
    if (filteredMovieList.length)
    {
      this.messageService.add(`Content Item at id: ${id}`);
      return of(filteredMovieList[0]);
    }
    else {
      this.messageService.add("Invalid id number entered");
      return of({
        id: -1,
        title: "Invalid id entered",
        description: "n/a",
        creator: "nobody"
      });
    }

  }
}
