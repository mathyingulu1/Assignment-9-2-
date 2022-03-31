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
  
  newContent: Content = {
    title: "", description: '', creator: '', type: undefined
  };
  tempId: string = "";
  tempTags: string = '';
  errorMessage: string = '';

  constructor(private movieService: MovieServiceService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  addContentFromChild(): void {

    this.newContent.tags = this.tempTags.split(';');
    this.movieService.addContent(this.newContent).subscribe((newContentFromServer) => {
      this.messageService.add("Movie successfully added to the server!");
      this.newContentEvent.emit(newContentFromServer);
    });

      // this.newContent.id = parseInt(this.tempId);
      // this.newContentEvent.emit(this.newContent);
      this.newContent = {
        title: "", description: '', creator: '', type: undefined
      };
      this.tempId = "";
      this.tempTags = ""
      // this.errorMessage = "";
  }
}
