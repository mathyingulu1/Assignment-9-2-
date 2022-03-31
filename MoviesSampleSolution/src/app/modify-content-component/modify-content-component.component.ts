import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/message.service';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.css']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  
  movieListForCheckingValidId: Content[] =[];
  newContent: Content = {
    title: "", description: '', creator: '', type: undefined
  };
  tempId: string = "";
  tempTags: string = '';
  errorMessage: string = '';

  constructor(private movieService: MovieServiceService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe(list => {
      this.movieListForCheckingValidId = list;
    });
  }

  addContentFromChild(): void {
    if (this.tempId === "") {
      this.newContent.tags = this.tempTags.split(';');
      this.movieService.addContent(this.newContent).subscribe((newContentFromServer) => {
        this.messageService.add("Movie successfully added to the server!");
        this.newContentEvent.emit(newContentFromServer);
      });

      // this.newContentEvent.emit(this.newContent);
      this.newContent = {
        title: "", description: '', creator: '', type: undefined
      };
      this.tempId = "";
      this.tempTags = ""
      // this.errorMessage = "";
    }
    else {
      this.newContent.id = parseInt(this.tempId);
      if (this.newContent.id !== undefined
        && this.movieListForCheckingValidId.some(movie => movie.id === this.newContent.id)) {
          this.newContent.tags = this.tempTags.split(';');
          this.movieService.updateContent(this.newContent).subscribe(() => {
            this.messageService.add("Movie successfully updated on the server!");
            this.newContentEvent.emit(this.newContent);
          });
    
          // this.newContentEvent.emit(this.newContent);
          this.newContent = {
            title: "", description: '', creator: '', type: undefined
          };
          this.tempId = "";
          this.tempTags = ""
          // this.errorMessage = "";
    

      }
      
    }

  }
}
