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
var app_service_1 = require("./app.service");
require('./rxjs-operators');
var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.logoSource = "app/assets/images/proairlogo.png";
        this.isMobileSizedWidth = true;
        this.isMenuShown = false;
        this.isFormShown = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.isMobileSizedWidth = this.checkIfMobileSized();
        this.getAllContent();
    };
    AppComponent.prototype.onResize = function () {
        this.isMobileSizedWidth = this.checkIfMobileSized();
    };
    AppComponent.prototype.checkIfMobileSized = function () {
        if (window.innerWidth <= 680) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.toggleMenu = function () {
        this.isMenuShown = !(this.isMenuShown);
    };
    AppComponent.prototype.showForm = function (toShow, cancel) {
        this.isFormShown = toShow;
        if (!toShow) {
            if (!cancel) {
            }
        }
    };
    AppComponent.prototype.dismissMenu = function () {
        if (this.isMenuShown == true) {
            this.isMenuShown = false;
        }
    };
    AppComponent.prototype.getAllContent = function () {
        this.getHomeContent();
        this.getAboutContent();
        this.getServicesContent();
        this.getContactContent();
        this.getCareersContent();
    };
    AppComponent.prototype.getHomeContent = function () {
        var _this = this;
        this.appService.getHomeContent()
            .subscribe(function (content) { return _this.contentHome = content; }, function (error) { return console.log("app.component:getHomeContent() - \n" + error); });
    };
    AppComponent.prototype.getAboutContent = function () {
        var _this = this;
        this.appService.getAboutContent()
            .subscribe(function (content) { return _this.contentAbout = content; }, function (error) { return console.log("app.component:getAboutContent() - \n" + error); });
    };
    AppComponent.prototype.getServicesContent = function () {
        var _this = this;
        this.appService.getServicesContent()
            .subscribe(function (content) { return _this.contentServices = content; }, function (error) { return console.log("app.component:getServicesContent() - \n" + error); });
    };
    AppComponent.prototype.getContactContent = function () {
        var _this = this;
        this.appService.getContactContent()
            .subscribe(function (content) { return _this.contentContact = content; }, function (error) { return console.log("app.component:getContactContent() - \n" + error); });
    };
    AppComponent.prototype.getCareersContent = function () {
        var _this = this;
        this.appService.getCareersContent()
            .subscribe(function (content) { return _this.contentCareers = content; }, function (error) { return console.log("app.component:getCareersContent() - \n" + error); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div (window:resize)=\"onResize($event)\"> <!-- Navigation Bar -->\n    <navbar class=navbar id=\"navBar\">\n      <ul>\n        <!-- test logo. replace with proair logo\u0095\u0095\u0095 -->\n        <a href=\"#Home\">\n          <img src={{logoSource}} alt=\"Proair\">\n        </a>\n        <li *ngIf=\"!isMobileSizedWidth\"><a href=\"#Careers\">Careers</a></li>\n        <li *ngIf=\"!isMobileSizedWidth\"><a href=\"#Contact\">Contact</a></li>\n        <li *ngIf=\"!isMobileSizedWidth\"><a href=\"#Services\">Services</a></li>\n        <li *ngIf=\"!isMobileSizedWidth\"><a href=\"#About\">About</a></li>\n        <li *ngIf=\"isMobileSizedWidth\"><button (click)=\"toggleMenu($event)\">\u2630</button></li>\n      </ul>\n    </navbar>\n  </div>\n  <div *ngIf=\"isMenuShown\" (window:scroll)=\"dismissMenu($event)\"> <!-- Navigation Menu Dropdown -->\n    <navMenu class=navMenu>\n      <ul>\n        <li><a href=\"#About\">About</a></li>\n        <li><a href=\"#Services\">Services</a></li>\n        <li><a href=\"#Contact\">Contact</a></li>\n        <li><a href=\"#Careers\">Careers</a></li>\n      </ul>\n    </navMenu>\n  </div>\n   <!-- Parallax Body -->\n  <div style=\"margin-top:50px;\" id=\"Home\">\n    <section class=\"module parallax parallax-1\">\n      <div class=\"container\">\n        <img src={{logoSource}} alt=\"Proair\">\n        <h1 style=\"margin:5px;\">Proair</h1>\n      </div>\n    </section>\n\n    <section class=\"module content\">\n      <div class=\"container\">\n        <h2>{{contentHome?.title}}</h2>\n        <p>{{contentHome?.content}}</p>\n      </div>\n    </section>\n\n    <section class=\"module parallax parallax-2\" id=\"About\">\n      <div class=\"container\">\n        <h1>About</h1>\n      </div>\n    </section>\n\n    <section class=\"module content\">\n      <div class=\"container\">\n        <h2>{{contentAbout?.title}}</h2>\n        <p>{{contentAbout?.content}}</p>\n      </div>\n    </section>\n\n    <section class=\"module parallax parallax-3\" id=\"Services\">\n      <div class=\"container\">\n        <h1>Services</h1>\n      </div>\n    </section>\n\n    <section class=\"module content\">\n      <div class=\"container\">\n        <h2>{{contentServices?.title}}</h2>\n        <p>{{contentServices?.content}}</p>\n      </div>\n    </section>\n\n    <section class=\"module parallax parallax-3\" id=\"Contact\">\n      <div class=\"container\">\n        <h1>Contact</h1>\n      </div>\n    </section>\n\n    <section class=\"module content\">\n      <div class=\"container\" [ngClass]=\"{ 'inactive' : isFormShown }\">\n        <h2>{{contentContact?.title}}</h2>\n        <p>{{contentContact?.content}}</p>\n        <button class=\"roundedButton default\" (click)=\"showForm(true,false)\">Contact Us</button>\n      </div>\n    </section>\n\n    <section class=\"module parallax parallax-3\" id=\"Careers\">\n      <div class=\"container\">\n        <h1>Careers</h1>\n      </div>\n    </section>\n\n    <section class=\"module content\">\n      <div class=\"container\">\n        <h2>{{contentCareers?.title}}</h2>\n        <p>{{contentCareers?.content}}</p>\n      </div>\n    </section>\n  </div>\n  <div class=\"contactUsSheet\" [ngClass]=\"{ 'inactive' : !isFormShown }\">\n    <div class=\"contactUsSheet div\" [ngClass]=\"{ 'inactive' : !isFormShown }\">\n      <h2>Leave Us A Message</h2>\n      <p>We will get back to you as soon as possible. Please note that solicitors and third parties will not be entertained.</p>\n      <div class=\"inputField\">\n        <input id=\"nameField\" class=\"inputField oneLineField\" type=\"text\" required>\n        <label for=\"nameField\" class=\"inputField placeholder\">Name</label>\n        <span class=\"inputField underline\"></span>\n        <span class=\"inputField bar\"></span>\n      </div>\n      <div class=\"inputField\">\n        <input id=\"emailField\" class=\"inputField oneLineField\" type=\"email\" required>\n        <label for=\"emailField\" class=\"inputField placeholder\">Email</label>\n        <span class=\"inputField underline\"></span>\n        <span class=\"inputField bar\"></span>\n      </div>\n      <div class=\"inputField\">\n        <input id=\"titleField\" class=\"inputField oneLineField\" type=\"text\" required>\n        <label for=\"titleField\" class=\"inputField placeholder\">Subject</label>\n        <span class=\"inputField underline\"></span>\n        <span class=\"inputField bar\"></span>\n      </div>\n      <div class=\"inputField\">\n        <textarea id=\"messageField\" class=\"inputField multiLineField\" type=\"text\" required></textarea>\n        <label for=\"messageField\" class=\"inputField placeholder\">Message</label>\n      </div>\n      <ul>\n        <li>\n          <button class=\"roundedButton cancel\" (click)=\"showForm(false,false)\">Cancel</button>\n        </li>\n        <li>\n          <button class=\"roundedButton default\" (click)=\"showForm(false,false)\">Send</button>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n  <div>\n    <footer class=\"footer\">\n      <p>Proair Sdn. Bhd.</p>\n    </footer>\n  </div>\n  ",
            styleUrls: [
                'app/assets/stylesheets/css/navbar.css',
                'app/assets/stylesheets/css/navMenu.css',
                'app/assets/stylesheets/css/parallaxMain.css',
                'app/assets/stylesheets/css/footer.css',
                'app/assets/stylesheets/css/contactUsSheet.css',
                'app/assets/stylesheets/css/inputField.css',
                'app/assets/stylesheets/css/roundedButton.css'
            ],
            providers: [app_service_1.AppService]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map