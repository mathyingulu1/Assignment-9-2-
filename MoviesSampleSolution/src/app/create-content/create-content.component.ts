import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface'

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  constructor() { }

  ngOnInit(): void {
  }

  addContentFromChild(id: string, title: string, imgURL: string, description: string, type: string, creator: string, tags: string): void {
    
  }

}
