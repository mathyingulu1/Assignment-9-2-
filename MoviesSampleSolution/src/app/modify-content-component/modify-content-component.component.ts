import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/message.service';
import { MovieServiceService } from '../services/movie-service.service';

export interface DialogData {
  newContent: Content;
  tempTags: string;
}

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  movieListForCheckingValidId: Content[] = [];
  @Input() newContent: Content = {
    title: "", description: '', creator: '', type: undefined
  };
  tempId: string = "";
  tempTags: string = '';
  errorMessage: string = '';

  constructor(public dialog: MatDialog, private movieService: MovieServiceService, private messageService: MessageService) { }

  ngOnInit(): void {

    // moved the getContent out of here because we only need it if we modify something
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      data: this.newContent,
    });

    dialogRef.afterClosed().subscribe((result: DialogData) => {
      console.log('The dialog was closed', result);
      // this.animal = result;

      this.newContent = result.newContent;
      this.tempTags = result.tempTags;
      this.addContentFromChild();
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
      if (this.newContent.id !== undefined) {
        // only get content list from the server if we need to validate against it
        this.movieService.getMovieList().subscribe(list => {
          this.movieListForCheckingValidId = list;


          if (this.movieListForCheckingValidId.some(movie => movie.id === this.newContent.id)) {
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

        });
      }

    }

  }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  tempId: string = "";
  tempTags: string = '';
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Content,
  ) {
    this.tempId = data.id + "";
    if (data.tags) {
      this.tempTags = data.tags.join(";");
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendDataUp(): void {
    this.data.tags = this.tempTags.split(';');
    this.dialogRef.close(this.data); // if the content the afterCLosed was expecting was just a content Item
  }
}
