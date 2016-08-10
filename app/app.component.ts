import { Component } from '@angular/core';
import { AppService } from "./app.service";
import { ContactSheetComponent } from "./contactsheet.component";
import './rxjs-operators';

@Component({
  selector: 'my-app',
  template:
  `
  <div (window:resize)="onResize($event)"> <!-- Navigation Bar -->
    <navbar class=navbar id="navBar">
      <ul>
        <!-- test logo. replace with proair logo -->
        <a href="#Home">
          <img src={{logoSource}} alt="Proair">
        </a>
        <li *ngIf="!isMobileSizedWidth"><a href="#Careers">Careers</a></li>
        <li *ngIf="!isMobileSizedWidth"><a href="#Contact">Contact</a></li>
        <li *ngIf="!isMobileSizedWidth"><a href="#Services">Services</a></li>
        <li *ngIf="!isMobileSizedWidth"><a href="#About">About</a></li>
        <li *ngIf="isMobileSizedWidth"><button (click)="toggleMenu($event)">☰</button></li>
      </ul>
    </navbar>
  </div>
  <div *ngIf="isMenuShown" (window:scroll)="dismissMenu($event)"> <!-- Navigation Menu Dropdown -->
    <navMenu class=navMenu>
      <ul>
        <li><a href="#About">About</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Contact">Contact</a></li>
        <li><a href="#Careers">Careers</a></li>
      </ul>
    </navMenu>
  </div>
   <!-- Parallax Body -->
  <div id="Home">
    <section style="padding-top:70px;" class="module parallax parallaxImage-Home">
      <div class="container">
        <img src={{logoSource}} alt="Proair">
        <h1 style="margin:5px;">Proair</h1>
      </div>
    </section>

    <section class="module content">
      <div class="container">
        <h2>{{contentHome?.title}}</h2>
        <p>{{contentHome?.content}}</p>
      </div>
    </section>

    <section class="module parallax parallaxImage-About" id="About">
      <div class="container">
        <h1>About</h1>
      </div>
    </section>

    <section class="module content">
      <div class="container">
        <h2>{{contentAbout?.title}}</h2>
        <p>{{contentAbout?.content}}</p>
      </div>
    </section>

    <section class="module parallax parallaxImage-Services" id="Services">
      <div class="container">
        <h1>Services</h1>
      </div>
    </section>

    <section class="module content">
      <div class="container">
        <h2>{{contentServices?.title}}</h2>
        <p>{{contentServices?.content}}</p>
      </div>
    </section>

    <section class="module parallax parallaxImage-Contact" id="Contact">
      <div class="container">
        <h1>Contact</h1>
      </div>
    </section>

    <section class="module content">
      <div class="container" [ngClass]="{ 'inactive' : isFormShown }">
        <h2>{{contentContact?.title}}</h2>
        <p>{{contentContact?.content}}</p>
        <button class="roundedButton default" (click)="isFormShown=true">Contact Us</button>
      </div>
    </section>

    <section class="module parallax parallaxImage-Careers" id="Careers">
      <div class="container">
        <h1>Careers</h1>
      </div>
    </section>

    <section class="module content">
      <div class="container">
        <h2>{{contentCareers?.title}}</h2>
        <p>{{contentCareers?.content}}</p>
      </div>
    </section>
  </div>
  <contact-sheet [toShow]="isFormShown" (change)="onContactSheetEvent($event)"></contact-sheet>
  <div>
    <footer class="footer">
      <p>Proair Sdn Bhd</p>
    </footer>
  </div>
  `
  ,
  styleUrls: [
        'app/assets/stylesheets/css/navbar.css',
        'app/assets/stylesheets/css/navMenu.css',
        'app/assets/stylesheets/css/parallaxMain.css',
        'app/assets/stylesheets/css/footer.css',
        'app/assets/stylesheets/css/contactUsSheet.css',
        'app/assets/stylesheets/css/inputField.css',
        'app/assets/stylesheets/css/roundedButton.css'
    ]
  ,
  providers: [AppService],
  directives: [ContactSheetComponent]
})
export class AppComponent{
  private errorMessage: string;

  private logoSource = "app/assets/images/proairlogo.png";

  private isMobileSizedWidth = true;
  private isMenuShown = false;
  private isFormShown = false;

  private contentHome:Object;
  private contentAbout:Object;
  private contentServices:Object;
  private contentContact:Object;
  private contentCareers:Object;

  constructor(private appService: AppService) { }
  ngOnInit()
  {
    this.isMobileSizedWidth = this.checkIfMobileSized();
    this.getAllContent();
  }

  onResize()
  {
    this.isMobileSizedWidth = this.checkIfMobileSized();
  }

  checkIfMobileSized()
  {
    if(window.innerWidth <= 680) { return true; }
    else{ return false; }
  }

  toggleMenu()
  {
    this.isMenuShown = !(this.isMenuShown);
  }

  dismissMenu()
  {
    if(this.isMenuShown == true) { this.isMenuShown = false; }
  }

  getAllContent()
  {
    this.getHomeContent();
    this.getAboutContent();
    this.getServicesContent();
    this.getContactContent();
    this.getCareersContent();
  }

  getHomeContent()
  {
    this.appService.getHomeContent()
                     .subscribe(
                       content => this.contentHome = content,
                       error =>  console.log("app.component:getHomeContent() - \n" + <any>error));
  }

  getAboutContent()
  {
    this.appService.getAboutContent()
                     .subscribe(
                       content => this.contentAbout = content,
                       error =>  console.log("app.component:getAboutContent() - \n" + <any>error));
  }

  getServicesContent()
  {
    this.appService.getServicesContent()
                     .subscribe(
                       content => this.contentServices = content,
                       error =>  console.log("app.component:getServicesContent() - \n" + <any>error));
  }

  getContactContent()
  {
    this.appService.getContactContent()
                     .subscribe(
                       content => this.contentContact = content,
                       error =>  console.log("app.component:getContactContent() - \n" + <any>error));
  }

  getCareersContent()
  {
    this.appService.getCareersContent()
                     .subscribe(
                       content => this.contentCareers = content,
                       error =>  console.log("app.component:getCareersContent() - \n" + <any>error));
  }

  onContactSheetEvent(toShow)
  {
    this.isFormShown = toShow;
  }
}
