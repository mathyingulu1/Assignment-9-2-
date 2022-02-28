import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { DefaultTypePipe } from './default-type.pipe';
import { ContentTaggedPipe } from './content-tagged.pipe';
import { HighlightDirective } from './highlight.directive';
import { AddContentComponent } from './add-content/add-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    DefaultTypePipe,
    ContentTaggedPipe,
    HighlightDirective,
    AddContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
