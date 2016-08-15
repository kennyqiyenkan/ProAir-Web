import { Component, ViewChild, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { EmailService } from './email.service';
import { GoogleRecaptchaDirective } from './recaptcha.component';
import {ContactSheetService } from './contactsheet.service';
@Component({
  selector: 'contact-sheet',
  template:
  `
  <div class="contactUsSheet" [ngClass]="{ 'inactive' : !toShow }">
    <div class="contactUsSheet div" [ngClass]="{ 'inactive' : !toShow }">
      <h2>Leave Us A Message</h2>
      <p>We will get back to you as soon as possible. Please note that solicitors and third parties will not be entertained.</p>
      <form>
        <div class="inputField">
          <input id="nameField" [(ngModel)]="name" class="inputField oneLineField" type="text" required>
          <label for="nameField" class="inputField placeholder">Name</label>
          <span class="inputField underline"></span>
          <span class="inputField bar"></span>
        </div>
        <div class="inputField">
          <input id="emailField" [(ngModel)]="email" class="inputField oneLineField" type="email" required>
          <label for="emailField" class="inputField placeholder">Email</label>
          <span class="inputField underline"></span>
          <span class="inputField bar"></span>
        </div>
        <div class="inputField">
          <input id="titleField" [(ngModel)]="title" class="inputField oneLineField" type="text" required>
          <label for="titleField" class="inputField placeholder">Subject</label>
          <span class="inputField underline"></span>
          <span class="inputField bar"></span>
        </div>
        <div class="inputField">
          <textarea id="messageField" [(ngModel)]="message" class="inputField multiLineField" type="text" required></textarea>
          <label for="messageField" class="inputField placeholder">Message</label>
        </div>
        <div style="padding:5px;" googlerecaptcha
    (resolve)="resolved($event)" [site-key]="siteKey"></div>

      </form>
      <ul>
        <li>
          <button class="roundedButton cancel" (click)="close()">Cancel</button>
        </li>
        <li>
          <button class="roundedButton default" (click)="close('send')">Send</button>
        </li>
      </ul>
    </div>
  </div>
  `
  ,
  styles: [
    require('./assets/stylesheets/css/contactUsSheet.css'),
    require('./assets/stylesheets/css/inputField.css'),
    require('./assets/stylesheets/css/roundedButton.css'),
  ]
  ,
  directives: [GoogleRecaptchaDirective]
  ,
  providers: [EmailService, ContactSheetService]
})
export class ContactSheetComponent implements OnInit{
  @Input() toShow:boolean;
  @Output() change:EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild(GoogleRecaptchaDirective) gRecaptchaElement;

  constructor(private emailService:EmailService, private contactSheetService:ContactSheetService) {}

  private siteKey = "6LfZuiYTAAAAAMRzu7e-qsNfljAvyQkSvKpmSa4S";

  private name:string;
  private email:string;
  private title:string;
  private message:string;

  ngOnInit() { }

  close(command = "cancel")
  {
    if(command === "cancel")
    {
      this.dismissSheet();
    }else{
      this.validify();
    }
  }

  resolved(response)
  {
    console.log("gRECAPTCHA response: " + response);
    this.contactSheetService.gRecaptchaPost(response);
  }

  validify()
  {//check fields and google reCAPTCHA
    if(this.contactSheetService.notARobot)
    {
      alert("recaptcha succeeded");
      //this.sendEmail();
    }else{
      //TODO: make it look nice
      alert("recaptcha failed");
    }
  }

  sendEmail()
  {
    //only once send succeeds
    this.emailService.postEmail(this.name, this.email, this.title, this.message).subscribe(
        response => this.handleResponse(response),
        error => this.handleResponse(error)
      );
    this.dismissSheet();
  }

  handleResponse(response)
  {
    //TODO: MAKE IT LOOK NICE
      if(response.status =='success'){
        alert('Thank you for contacting us. We will get back to you as soon as possible.');
      }

      if(response.status =='error'){
        alert('There was an issue in contacting us. If the problem persists. Please email us directly at proair@proairmarine.com. Thank you for your understanding.');
      }
    }

  dismissSheet()
  {
    this.name = "";
    this.email = "";
    this.title = "";
    this.message = "";
    this.toShow = false;
    this.gRecaptchaElement.reset();
    this.change.emit(this.toShow);
  }
}
