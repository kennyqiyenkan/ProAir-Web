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
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div>\n    <!-- Navigation Bar -->\n    <navbar class=navbar>\n      <ul>\n        <!-- test logo. replace with proair logo\u0095\u0095\u0095 -->\n        <a href=\"/\">\n          <img src=\"http://whitelions.org/wp-content/uploads/2013/08/1-Info-icon-logo-50x50.png\" alt=\"Proair\">\n        </a>\n        <li><a href=\"#Careers\">Careers</a></li>\n        <li><a href=\"#ContactUs\">Contact</a></li>\n        <li><a href=\"#Services\">Services</a></li>\n        <li><a href=\"#About\">About</a></li>\n        <li><a href=\"#Home\">Home</a></li>\n      </ul>\n    </navbar>\n  </div>\n  <div>\n    <!-- Main Body -->\n    <!-- Banner -->\n    <banner class=banner>\n      <img src=\"http://www.9newz.com/wp-content/uploads/2011/02/freedom.jpg\" alt=\"Proair Sdn Bhd\">\n    </banner>\n  </div>\n  ",
            styleUrls: [
                'app/assets/stylesheets/css/navbar.css',
                'app/assets/stylesheets/css/banner.css'
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map