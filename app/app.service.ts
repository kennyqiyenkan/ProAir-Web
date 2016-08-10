import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import './rxjs-operators';

@Injectable()
export class AppService {
  private contentHomeURL = "app/assets/content/home.content.json";
  private contentAboutURL = "app/assets/content/about.content.json";
  private contentServicesURL = "app/assets/content/services.content.json";
  private contentContactURL = "app/assets/content/contact.content.json";
  private contentCareersURL = "app/assets/content/careers.content.json";

  constructor(private http: Http) { }

  private extractData(res: Response) {
    let body = res.json();
    return body || "{ }";
  }

  handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  getHomeContent()
  {
    return this.http.get(this.contentHomeURL)
                .map(this.extractData)
                .catch(this.handleError);
  }

  getAboutContent()
  {
    return this.http.get(this.contentAboutURL)
                .map(this.extractData)
                .catch(this.handleError);
  }

  getServicesContent()
  {
    return this.http.get(this.contentServicesURL)
                .map(this.extractData)
                .catch(this.handleError);
  }

  getContactContent()
  {
    return this.http.get(this.contentContactURL)
                .map(this.extractData)
                .catch(this.handleError);
  }

  getCareersContent()
  {
    return this.http.get(this.contentCareersURL)
                .map(this.extractData)
                .catch(this.handleError);
  }
}
