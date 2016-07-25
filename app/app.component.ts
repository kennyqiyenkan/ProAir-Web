import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template:
  `
  <div (window:resize)="onResize($event)"> <!-- Navigation Bar -->
    <navbar class=navbar id="navBar">
      <ul>
        <!-- test logo. replace with proair logo -->
        <a href="/">
          <img src="http://whitelions.org/wp-content/uploads/2013/08/1-Info-icon-logo-50x50.png" alt="Proair">
        </a>
        <li *ngIf="!isMobileSizedWidth"><a href="#Careers">Careers</a></li>
        <li *ngIf="!isMobileSizedWidth"><a href="#ContactUs">Contact</a></li>
        <li *ngIf="!isMobileSizedWidth"><a href="#Services">Services</a></li>
        <li *ngIf="!isMobileSizedWidth"><a href="#About">About</a></li>
        <li *ngIf="isMobileSizedWidth"><button>☰</button></li>
      </ul>
    </navbar>
  </div>

  <div style="margin-top:-20px;">
    <section class="module parallax parallax-1" id="sectionHome">
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

    <section class="module parallax parallax-2" id="sectionAbout">
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

    <section class="module parallax parallax-3" id="sectionServices">
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

    <section class="module parallax parallax-3" id="sectionContact">
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

    <section class="module parallax parallax-3" id="sectionCareers">
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
        'app/assets/stylesheets/css/navbar.css'
        'app/assets/stylesheets/css/parallaxMain.css'
        'app/assets/stylesheets/css/footer.css'
    ]
})
export class AppComponent implements OnInit{
  private isMobileSizedWidth = true;

  ngOnInit()
  {
    this.isMobileSizedWidth = this.checkMobileSized();
  }

  onResize()
  {
    this.isMobileSizedWidth = this.checkMobileSized();
  }

  checkMobileSized()
  {
    if(window.innerWidth <= 680) { return true; }
    else{ return false; }
  }
}
