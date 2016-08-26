import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'notification',
  template:
  `
  <div class="notification" [ngClass]="{ 'inactive' : !shown }">
    <div class="notification card"
         [ngClass]="{ 'general' : !isError, 'error' : isError }">
      <h2>{{title}}</h2>
      <div></div>
      <p>{{message}}</p>
      <button class="roundedButton default" (click)="dismiss()">Dismiss</button>
    </div>
  </div>
  `
  ,
  styles: [
    require('./assets/stylesheets/css/notification.css'),
    require('./assets/stylesheets/css/roundedButton.css'),
  ]
})
export class NotificationComponent implements OnInit{
  @Input() shown:boolean;
  @Input() isError:boolean;
  @Input() title:string;
  @Input() message:string;
  @Output() toDismiss:EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() { }

  dismiss()
  {
    this.shown = false;
    this.isError = false;
    this.title = "";
    this.message = "";
    this.toDismiss.emit(null);
  }
}
