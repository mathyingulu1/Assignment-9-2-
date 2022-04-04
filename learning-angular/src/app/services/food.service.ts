import { Injectable } from '@angular/core';
import { BUNCHOFFOOD } from '../../helper-files/contentDb';
import { Food } from '../../helper-files/Food';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getContent(): Observable<Food[]> { // get the content synchronously - not real world
    console.log("Getting the list");
    return this.http.get<Food[]>("api/food");
  }
  getContentItem(id: number): Observable<Food>{
    console.log("Retrieving OBSERVABLE content item");
    return this.http.get<Food>("api/food/" + id);
  }
  addContent(newContentItem: Food): Observable<Food>{
    console.log("added the new content: ", newContentItem);
    return this.http.post<Food>("api/food", newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Food): Observable<any>{
    return this.http.put("api/food", contentItem, this.httpOptions);
  }
}
