import { Component } from '@angular/core';
//import {SimplePageScroll} from 'ng2-simple-page-scroll';
@Component({
  selector: 'my-app',
  template:
  `
  <div (window:resize)="onResize($event)"> <!-- Navigation Bar -->
    <navbar class=navbar id="navBar">
      <ul>
        <!-- test logo. replace with proair logo -->
        <a href="#Home">
          <img src="http://whitelions.org/wp-content/uploads/2013/08/1-Info-icon-logo-50x50.png" alt="Proair">
        </a>
        <li *ngIf="!isMobileSizedWidth"><a href="#Careers">Careers</a></li>
        <li *ngIf="!isMobileSizedWidth"><a href="#ContactUs">Contact</a></li>
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
        <li><a href="#ContactUs">Contact</a></li>
        <li><a href="#Careers">Careers</a></li>
      </ul>
    </navMenu>
  </div>
   <!-- Parallax Body -->
  <div style="margin-top:50px;">
    <section class="module parallax parallax-1" name="Home">
      <div class="container">
        <h1>Proair</h1>
      </div>
    </section>

    <section class="module content">
      <div class="container">
        <h2>We Settle All Your Marine HVAC Needs</h2>
        <p>Company introduction here. Please get contents from a file</p>
      </div>
    </section>

    <section class="module parallax parallax-2" name="About">
      <div class="container">
        <h1>About</h1>
      </div>
    </section>

    <section class="module content">
      <div class="container">
        <h2>Who We Are</h2>
        <p>Information about the company here. Please get contents from a file</p>
      </div>
    </section>

    <section class="module parallax parallax-3" name="Services">
      <div class="container">
        <h1>Services</h1>
      </div>
    </section>

    <section class="module content">
      <div class="container">
        <h2>What We Do</h2>
        <p>List of services here. Please get contents from a file</p>
      </div>
    </section>

    <section class="module parallax parallax-3" name="Contact">
      <div class="container">
        <h1>Contact</h1>
      </div>
    </section>

    <section class="module content">
      <div class="container">
        <h2>Where We Are</h2>
        <p>Contact information here. Please get contents from a file</p>
      </div>
    </section>

    <section class="module parallax parallax-3" name="Careers">
      <div class="container">
        <h1>Careers</h1>
      </div>
    </section>

    <section class="module content">
      <div class="container">
        <h2>Want To Work Here?</h2>
        <p>List of openings here. Please get contents from a file</p>
      </div>
    </section>
  </div>
  <div>
    <footer class="footer">
      <p>Proair Sdn. Bhd.</p>
    </footer>
  </div>
  `
  ,
  styleUrls: [
        'app/assets/stylesheets/css/navbar.css',
        'app/assets/stylesheets/css/navMenu.css',
        'app/assets/stylesheets/css/parallaxMain.css',
        'app/assets/stylesheets/css/footer.css'
    ]
  // ,
  // directives: [SimplePageScroll]
})
export class AppComponent{
  private isMobileSizedWidth = true;
  private isMenuShown = false;
  ngOnInit()
  {
    this.isMobileSizedWidth = this.checkIfMobileSized();
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
}
