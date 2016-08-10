import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { EmailService } from './email.service';
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
          <input id="nameField" [(ngClass)]="name" class="inputField oneLineField" type="text" required>
          <label for="nameField" class="inputField placeholder">Name</label>
          <span class="inputField underline"></span>
          <span class="inputField bar"></span>
        </div>
        <div class="inputField">
          <input id="emailField" [(ngClass)]="email" class="inputField oneLineField" type="email" required>
          <label for="emailField" class="inputField placeholder">Email</label>
          <span class="inputField underline"></span>
          <span class="inputField bar"></span>
        </div>
        <div class="inputField">
          <input id="titleField" [(ngClass)]="title" class="inputField oneLineField" type="text" required>
          <label for="titleField" class="inputField placeholder">Subject</label>
          <span class="inputField underline"></span>
          <span class="inputField bar"></span>
        </div>
        <div class="inputField">
          <textarea id="messageField" [(ngClass)]="message" class="inputField multiLineField" type="text" required></textarea>
          <label for="messageField" class="inputField placeholder">Message</label>
        </div>
        <ul>
          <li>
            <button class="roundedButton cancel" (click)="close()">Cancel</button>
          </li>
          <li>
            <button class="roundedButton default" (click)="close('send')">Send</button>
          </li>
        </ul>
      </form>
    </div>
  </div>
  `
  ,
  styleUrls: [
        'app/assets/stylesheets/css/contactUsSheet.css',
        'app/assets/stylesheets/css/inputField.css',
        'app/assets/stylesheets/css/roundedButton.css'
    ]
  ,
  providers: [EmailService]
})
export class ContactSheetComponent implements OnInit{
  @Input() toShow:boolean;
  @Output() change:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private emailService:EmailService) {}

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

  validify()
  {//check fields and google reCAPTCHA
    this.sendEmail();
  }

  sendEmail()
  {
    //only once send succeeds
    this.emailService.sendEmail(this.name, this.email, this.title, this.message).subscribe();
    this.toShow = false;
    this.change.emit(this.toShow);
  }

  dismissSheet()
  {
    this.toShow = false;
    this.change.emit(this.toShow);
  }
}
