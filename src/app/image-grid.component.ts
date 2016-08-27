import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
@Component({
  selector: 'image-grid',
  template:
  `
  <div>
    <ul class="grid">
      <li class="content" *ngFor="let image of imageSource | async">
        <a href="{{image.link}}"><img src="{{image.img}}" alt="{{image.name}}"></a>
      </li>
    </ul>
  </div>
  `
  ,
  styles: [
    require('./assets/stylesheets/css/imageGrid.css')
  ]
})
export class ImageGridComponent implements OnInit
{
  private imageSource:any;

  constructor(private af: AngularFire) { }
  ngOnInit()
  {
     this.imageSource = this.af.database.list('/about/partners');
  }
}
