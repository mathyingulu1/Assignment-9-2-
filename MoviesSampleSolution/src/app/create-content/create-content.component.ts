import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface'

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  newContent: Content = {
    id: -1, title: "", description: '', creator: '', type: undefined
  };
  tempId: string = "";
  tempTags: string = '';
  errorMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addContentFromChild(): void {

    let moviePromise = new Promise((success, fail) => {
      if (!this.tempId || !this.newContent.title || !this.newContent.description || !this.newContent.creator)
      {
        fail("something is missing");
        return;
      }
      // part of the promise
      console.log("child is working");
      this.newContent.tags = this.tempTags.split(';');
      this.newContent.id = parseInt(this.tempId);
      this.newContentEvent.emit(this.newContent);
      success("content added successfully " + this.newContent.id + ", title is: " + this.newContent.title);      
    });
    moviePromise.then((successMessage) => { 
      // success function stuff
      console.log(successMessage);
      this.newContent = {
        id: -1, title: "", description: '', creator: '', type: undefined
      };
      this.tempId = "";
      this.tempTags = ""
      this.errorMessage = "";
    }).catch(failMessage => {
      this.errorMessage = "It failed terribly! - " + failMessage;
    });
  }

}
