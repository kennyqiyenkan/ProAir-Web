import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template:
  `
  <div>
    <!-- Navigation Bar -->
    <navbar class=navbar id="navBar">
      <ul>
        <!-- test logo. replace with proair logo -->
        <a href="/">
          <img src="http://whitelions.org/wp-content/uploads/2013/08/1-Info-icon-logo-50x50.png" alt="Proair">
        </a>
        <li><a href="#Careers">Careers</a></li>
        <li><a href="#ContactUs">Contact</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#About">About</a></li>
        <li class=icon>
          <a href="javascript:void(0);" style="font-size:15px;" onclick="myFunction()">☰</a>
        </li>
      </ul>
    </navbar>
  </div>
  <div>
    <section class="module parallax parallax-1">
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

    <section class="module parallax parallax-2">
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

    <section class="module parallax parallax-3">
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

    <section class="module parallax parallax-3">
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

    <section class="module parallax parallax-3">
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

    <!-- Main Body -->
    <!-- Banner
    <banner class=banner>
      <img src="http://www.9newz.com/wp-content/uploads/2011/02/freedom.jpg" alt="Proair Sdn Bhd">
    </banner>
    -->
  </div>


  `
  ,
  styleUrls: [
        'app/assets/stylesheets/css/navbar.css'
        'app/assets/stylesheets/css/banner.css'
        'app/assets/stylesheets/css/parallaxMain.css'
    ]
})
export class AppComponent {

}
