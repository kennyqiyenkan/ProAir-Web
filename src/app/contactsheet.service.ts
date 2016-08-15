import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactSheetService
{
  notARobot = false;
  constructor(private http: Http) { }
  gRecaptchaPost(response)
  {
    let body = JSON.stringify({ 'g-recaptcha-response' : response });
    console.log(`gRecaptchaPost called with body ${body}`);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('/grecaptcha', body, options)
      .subscribe(res => this.notARobot =
        (res.json().responseDesc === 'Success') ? true : false);
  }
  private handleError (error: Response)
  {
  // in a real world app, we may send the server to some remote logging infrastructure
  // instead of just logging it to the console
  console.error('Error in retrieving news: ' + error);
  return Observable.throw(error.json().error || 'Server error');
  }

}
