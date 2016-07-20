"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.myFunction = function () {
        var x = document.getElementById("navBar");
        if (x.className === "navbar") {
            x.className += " responsive";
        }
        else {
            x.className = "navbar";
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\n  <div>\n    <!-- Navigation Bar -->\n    <navbar class=navbar id=\"navBar\">\n      <ul>\n        <!-- test logo. replace with proair logo\u0095\u0095\u0095 -->\n        <a href=\"/\">\n          <img src=\"http://whitelions.org/wp-content/uploads/2013/08/1-Info-icon-logo-50x50.png\" alt=\"Proair\">\n        </a>\n        <li><a href=\"#Careers\">Careers</a></li>\n        <li><a href=\"#ContactUs\">Contact</a></li>\n        <li><a href=\"#Services\">Services</a></li>\n        <li><a href=\"#About\">About</a></li>\n        <li><a href=\"#Home\">Home</a></li>\n        <li class=icon>\n          <a href=\"javascript:void(0);\" style=\"font-size:15px;\" onclick=\"myFunction()\">\u2630</a>\n        </li>\n      </ul>\n    </navbar>\n\n  </div>\n  <div>\n    <section class=\"module parallax parallax-1\">\n      <div class=\"container\">\n        <h1>Serene</h1>\n      </div>\n      </section>\n\n      <section class=\"module content\">\n      <div class=\"container\">\n        <h2>Lorem Ipsum Dolor</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>\n      </div>\n      </section>\n\n      <section class=\"module parallax parallax-2\">\n      <div class=\"container\">\n        <h1>Rise</h1>\n      </div>\n      </section>\n\n      <section class=\"module content\">\n      <div class=\"container\">\n        <h2>Lorem Ipsum Dolor</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>\n      </div>\n    </section>\n\n    <section class=\"module parallax parallax-3\">\n      <div class=\"container\">\n        <h1>Calm</h1>\n      </div>\n    </section>\n\n    <section class=\"module content\">\n      <div class=\"container\">\n        <h2>Lorem Ipsum Dolor</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>\n      </div>\n    </section>\n  </div>\n  <div>\n\n    <!-- Main Body -->\n    <!-- Banner -->\n    <banner class=banner>\n      <img src=\"http://www.9newz.com/wp-content/uploads/2011/02/freedom.jpg\" alt=\"Proair Sdn Bhd\">\n    </banner>\n  </div>\n\n\n  ",
            styleUrls: [
                'app/assets/stylesheets/css/navbar.css',
                'app/assets/stylesheets/css/banner.css',
                'app/assets/stylesheets/css/parallaxMain.css'
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map