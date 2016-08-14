import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactSheetService
{
  constructor(private http: Http) { }

  gRecaptchaPost(response)
  {
    console.log("gRecaptchaPost called");
    let body = JSON.stringify({ 'g-recaptcha-response' : response });
    console.log(`gRecaptchaPost body: ${body}`);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('/gRECAPTCHA', body, options);
  }
}
