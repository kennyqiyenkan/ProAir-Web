import { Component, ViewChild, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { EmailService } from './email.service';
import { GoogleRecaptchaDirective } from './recaptcha.component';
import { ContactSheetService } from './contactsheet.service';
import { NotificationComponent } from "./notification.component";
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
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
          <input id="nameField" [(ngModel)]="name" class="oneLineField"
          type="text" required>
          <label for="nameField" class="placeholder">Name*</label>
          <span class="underline"></span>
          <span class="bar"></span>
        </div>
        <div class="inputField">
          <input id="emailField" [(ngModel)]="email" (keyup)="validateEmail()"
          class="oneLineField" [ngClass]="{'incomplete': !isEmailComplete}"
          type="email" required>
          <label for="emailField" class="placeholder">Email*</label>
          <span class="underline"></span>
          <span class="bar"></span>
        </div>
        <div class="inputField">
          <input id="titleField" [(ngModel)]="title" class="oneLineField"
          type="text" required>
          <label for="titleField" class="placeholder">Subject*</label>
          <span class="underline"></span>
          <span class="bar"></span>
        </div>
        <div class="inputField">
          <textarea id="messageField" [(ngModel)]="message" class="multiLineField"
          type="text" required></textarea>
          <label for="messageField" class="placeholder">Message*</label>
        </div>
        <div style="padding:5px;" googlerecaptcha
    (resolve)="resolved($event)" [site-key]="siteKey"></div>
        <ul>
          <li>
            <button class="roundedButton cancel" (click)="close()">Cancel</button>
          </li>
          <li>
            <button class="roundedButton default" [disabled]="!isFormValid()"
            type="submit" (click)="close('send')">Send</button>
          </li>
        </ul>
      </form>
    </div>
  </div>
  <notification [shown]="notificationIsShown"
                [isError]="notificationIsError"
                [title]="notificationTitle"
                [message]="notificationMessage"
                (toDismiss)="dismissNotification($event)"></notification>
  `
  ,
  styles: [
    require('./assets/stylesheets/css/contactUsSheet.css'),
    require('./assets/stylesheets/css/inputField.css'),
    require('./assets/stylesheets/css/roundedButton.css'),
  ]
  ,
  directives: [GoogleRecaptchaDirective, NotificationComponent]
  ,
  providers: [EmailService, ContactSheetService]
})
export class ContactSheetComponent implements OnInit{
  @Input() toShow:boolean;
  @Output() change:EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild(GoogleRecaptchaDirective) gRecaptchaElement;

  constructor(private emailService:EmailService,
              private contactSheetService:ContactSheetService,
              private af: AngularFire) {}

  private siteKey = "6LfZuiYTAAAAAMRzu7e-qsNfljAvyQkSvKpmSa4S";

  private name = "";
  private email = "";
  private isEmailComplete = true;
  private title = "";
  private message = "";

  private notifications:any;
  private notificationIsShown = false;
  private notificationIsError = false;
  private notificationTitle = "";
  private notificationMessage = "";

  ngOnInit()
  {
    this.af
      .database
      .object('/notifications').subscribe(n => this.notifications = n);
  }

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
    this.contactSheetService.gRecaptchaPost(response);
  }

  isFormValid()
  {
    if(this.name.trim() !== "" && this.email.trim() !== "" &&
       this.isEmailComplete && this.title.trim() !== "" &&
       this.message.trim() !== "" && this.contactSheetService.notARobot)
    {
      return true
    }
    return false;
  }

  validify()
  {//check fields and google reCAPTCHA
    if(this.contactSheetService.notARobot)
    {
      this.sendEmail();
    }else{
      this.showNotification("Oops!", this.notifications.email_recaptcha_failure, true);
    }
  }

  validateEmail()
  {
    let EMAIL_REGEXP = new RegExp('^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$');
    if(this.email == '')
    {
      this.isEmailComplete = true;
    } else {
      this.isEmailComplete = EMAIL_REGEXP.test(this.email);
    }
  }

  sendEmail()
  {
    //only once send succeeds
    this.emailService.postEmail(this.name, this.email, this.title, this.message).subscribe(
        response => this.handleResponse(response),
        error => this.handleResponse(error)
      );
  }

  handleResponse(response)
  {
    if(response.sent)
    {
      this.showEmailNotification();
    }else{
      this.showEmailNotification(true);
    }
  }

  showEmailNotification(isError = false)
  {
    if(isError)
    {
      this.showNotification("Apologies", this.notifications.email_failure, true);
    }else{
      this.showNotification("Thank You", this.notifications.email_success);
    }
  }

  showNotification(title,message,isError = false)
  {
    this.notificationTitle = title;
    this.notificationMessage = message;
    this.notificationIsError = isError;
    this.notificationIsShown = true;
  }

  dismissNotification()
  {
    this.notificationIsShown = false;
    this.dismissSheet();
  }

  dismissSheet()
  {
    this.name = "";
    this.email = "";
    this.title = "";
    this.message = "";
    this.toShow = false;
    this.gRecaptchaElement.reset();
    this.contactSheetService.notARobot = false;
    this.change.emit(this.toShow);
  }
}
