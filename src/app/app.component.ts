import { Component } from '@angular/core';
import { ContactSheetComponent } from "./contactsheet.component";
import { ImageGridComponent } from "./image-grid.component";
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app',
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
        <li *ngIf="!isMobileSizedWidth"><a href="#Projects">Projects</a></li>
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
        <li><a href="#Projects">Projects</a></li>
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
        <h2>{{(contentHome | async)?.title}}</h2>
        <p>{{(contentHome | async)?.content}}</p>
      </div>
    </section>

    <section class="module parallax parallaxImage-About" id="About">
      <div class="container">
        <h1>About</h1>
      </div>
    </section>

    <section class="module content">
      <div class="container">
        <h2>{{(contentAbout | async)?.title}}</h2>
        <p>{{(contentAbout | async)?.content}}</p>
        <image-grid></image-grid>
      </div>
    </section>

    <section class="module parallax parallaxImage-Services" id="Services">
      <div class="container">
        <h1>Services</h1>
      </div>
    </section>

    <section class="module content">
      <div class="container">
        <h2>{{(contentServices | async)?.title}}</h2>
        <p>{{(contentServices | async)?.content}}</p>
      </div>
    </section>

    <section class="module parallax parallaxImage-Projects" id="Projects">
      <div class="container">
        <h1>Projects</h1>
      </div>
    </section>

    <section class="module content">
      <div class="container">
        <h2>{{(contentProjects | async)?.title}}</h2>
        <p>{{(contentProjects | async)?.content}}</p>
      </div>
    </section>

    <section class="module parallax parallaxImage-Contact" id="Contact">
      <div class="container">
        <h1>Contact</h1>
      </div>
    </section>

    <section class="module content">
      <div class="container" [ngClass]="{ 'inactive' : isFormShown }">
        <h2>{{(contentContact | async)?.title}}</h2>
        <p>{{(contentContact | async)?.content}}</p>
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
        <h2>{{(contentCareers | async)?.title}}</h2>
        <p>{{(contentCareers | async)?.content}}</p>
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
  styles: [
    require('./assets/stylesheets/css/navbar.css'),
    require('./assets/stylesheets/css/navMenu.css'),
    require('./assets/stylesheets/css/parallaxMain.css'),
    require('./assets/stylesheets/css/footer.css'),
    require('./assets/stylesheets/css/contactUsSheet.css'),
    require('./assets/stylesheets/css/inputField.css'),
    require('./assets/stylesheets/css/roundedButton.css')
  ]
  ,
  directives: [ContactSheetComponent, ImageGridComponent]
})
export class AppComponent{
  private errorMessage: string;

  private logoSource = "./assets/images/proairlogo.png";

  private isMobileSizedWidth = true;
  private isMenuShown = false;
  private isFormShown = false;

  private contentHome:any;
  private contentAbout:any;
  private contentServices:any;
  private contentProjects:any;
  private contentContact:any;
  private contentCareers:any;

  constructor(private af: AngularFire) { }

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
    this.getProjectsContent();
    this.getContactContent();
    this.getCareersContent();
  }

  getHomeContent()
  {
    this.contentHome = this.af
                        .database
                        .object('/home');
  }

  getAboutContent()
  {
    this.contentAbout = this.af
                        .database
                        .object('/about');
  }

  getServicesContent()
  {
    this.contentServices = this.af
                        .database
                        .object('/services');
  }

  getProjectsContent()
  {
    this.contentProjects = this.af
                        .database
                        .object('/projects');
  }

  getContactContent()
  {
    this.contentContact = this.af
                        .database
                        .object('/contact');
  }

  getCareersContent()
  {
    this.contentCareers = this.af
                        .database
                        .object('/careers');
  }

  onContactSheetEvent(toShow)
  {
    this.isFormShown = toShow;
  }
}
