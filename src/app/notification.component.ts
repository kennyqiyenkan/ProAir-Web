import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'notification',
  template:
  `
  <div class="notification" [ngClass]="{ 'inactive' : !shown }">
    <div class="card">
      <div class="header">
        <h2 class="title">{{title}}</h2>
        <span class="dismiss" (click)="dismiss()"></span>
      </div>
      <div class="underline"
           [ngClass]="{ 'general' : !isError, 'error' : isError }"></div>
      <p>{{message}}</p>
    </div>
  </div>
  `
  ,
  styles: [
    require('./assets/stylesheets/css/notification.css')
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
    this.toDismiss.emit(null);
    this.shown = false;
    this.isError = false;
  }
}
