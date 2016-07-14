import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template:
  `
  <div>
    <!-- Navigation Bar -->
    <navbar class=navbar>
      <ul>
        <!-- test logo. replace with proair logo -->
        <a href="/">
          <img src="http://whitelions.org/wp-content/uploads/2013/08/1-Info-icon-logo-50x50.png" alt="Proair">
        </a>
        <li><a href="#Careers">Careers</a></li>
        <li><a href="#ContactUs">Contact</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Home">Home</a></li>
      </ul>
    </navbar>
  </div>
  <div>
    <!-- Main Body -->
    <!-- Banner -->
    <banner class=banner>
      <img src="http://www.9newz.com/wp-content/uploads/2011/02/freedom.jpg" alt="Proair Sdn Bhd">
    </banner>
  </div>
  `
  ,
  styleUrls: [
        'app/assets/stylesheets/css/navbar.css'
        'app/assets/stylesheets/css/banner.css'
    ]
})
export class AppComponent {

}
