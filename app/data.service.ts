import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Main }           from './nvd3.component.ts';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {
  constructor (private http: Http) {}
  
  private dataUrl = 'data.json';  // URL to web API
  
  getData (): Observable<any> {
     return this.http.get(this.dataUrl)
               .map(this.extractData)
               .catch(this.handleError);
  }
  
  private extractData(res: Response) {
    return res.json().data;
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

