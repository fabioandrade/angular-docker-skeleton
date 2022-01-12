import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private _uri;

  constructor(protected http: HttpClient) {
    this._uri = `http://localhost:8001/api/categories/1`;
  }

  // get(id: number): Observable<any> {
  //   return this.http.get(this._uri, { }).pipe(
  //     catchError(error => {
  //       return 'erro';
  //       // return this.handleError(error);
  //     })
  //   );
  // }

  get(id: number): Observable<any>{      
      return this.http.request('GET', this._uri, {responseType:'json'});
  }
}