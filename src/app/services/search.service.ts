import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Image } from '../model/image';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  api = 'api/';

  constructor(private http: HttpClient) {}

  getIds(search): Observable<any>{
    // console.log("service ....")
    return this.http.get<Image[]>(`api/findByKey/?keywordEn=${search}`)
    // return this.http.get(" http://localhost:3000/employees")
    .pipe(tap(images=> this.log('fetched images')),
  catchError(this.handleError('getIds',[])));
  }

  getFiles( id): Observable<any> {
    return this.http.get('/api/'+id)
  }






  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    // console.log(`HeroService: ${message}`);
  }
}
