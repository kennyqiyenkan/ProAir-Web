import {Injectable}               from '@angular/core';
import {Http, Response}           from '@angular/http';
import {Headers, RequestOptions}  from '@angular/http';
import {Observable}               from 'rxjs/Observable';

import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmailService {
  constructor (private http: Http) {}

  postEmail(name, email, title, message): Observable<Response>
  {
    let body = {name:name,
                email:email,
                title:title,
                message:message};
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return new Observable<Response>(observer =>
      {
        this.http.post('/mailgun', body, options)
          .subscribe(res =>
            {
              observer.next(res.json());
              observer.complete();
            });
      });
  }

  private handleError (error: Response)
  {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error('Error in retrieving news: ' + error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
