import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { DefaultTypePipe } from './default-type.pipe';
import { ContentTaggedPipe } from './content-tagged.pipe';
import { HighlightDirective } from './highlight.directive';
import { AddContentComponent } from './add-content/add-content.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  // {
  //   path: "",
  //   redirectTo: "/content",
  //   pathMatch: "full"
  // },
  { path: "content/:id" , component: ContentDetailComponent },
  {
    path: "content",
    component: ContentListComponent
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    ContentCardComponent,
    DefaultTypePipe,
    ContentTaggedPipe,
    HighlightDirective,
    AddContentComponent,
    ContentListComponent,
    ContentDetailComponent,
    PageNotFoundComponent
],
  imports: [
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ], // this hooks up our routes so they work
  exports: [RouterModule]
})
export class AppRoutingModule { }
