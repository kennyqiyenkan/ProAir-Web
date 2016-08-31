import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
@Component({
  selector: 'career-listings',
  template:
  `
  <div>
    <ul class="careerListings">
      <li *ngFor="let listing of careerListings | async">
        <div class="listing">
          <p class="title">{{listing.title}}</p>
          <a href="{{listing.link}}">
            <button class="roundedButton default">Apply</button>
          </a>
        </div>
        <div class="bar"></div>
      </li>
    </ul>
  </div>
  `
  ,
  styles: [
    require('./assets/stylesheets/css/roundedButton.css'),
    require('./assets/stylesheets/css/careerListings.css')
  ]
})
export class CareerListingsComponent implements OnInit
{
  private careerListings:any;

  constructor(private af: AngularFire) { }
  ngOnInit()
  {
     this.careerListings = this.af.database.list('/careers/listings');
  }
}
