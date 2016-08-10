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
var email_service_1 = require('./email.service');
var ContactSheetComponent = (function () {
    function ContactSheetComponent(emailService) {
        this.emailService = emailService;
        this.change = new core_1.EventEmitter();
    }
    ContactSheetComponent.prototype.ngOnInit = function () { };
    ContactSheetComponent.prototype.close = function (command) {
        if (command === void 0) { command = "cancel"; }
        if (command === "cancel") {
            this.dismissSheet();
        }
        else {
            this.validify();
        }
    };
    ContactSheetComponent.prototype.validify = function () {
        this.sendEmail();
    };
    ContactSheetComponent.prototype.sendEmail = function () {
        //only once send succeeds
        this.emailService.sendEmail(this.name, this.email, this.title, this.message).subscribe();
        this.toShow = false;
        this.change.emit(this.toShow);
    };
    ContactSheetComponent.prototype.dismissSheet = function () {
        this.toShow = false;
        this.change.emit(this.toShow);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ContactSheetComponent.prototype, "toShow", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ContactSheetComponent.prototype, "change", void 0);
    ContactSheetComponent = __decorate([
        core_1.Component({
            selector: 'contact-sheet',
            template: "\n  <div class=\"contactUsSheet\" [ngClass]=\"{ 'inactive' : !toShow }\">\n    <div class=\"contactUsSheet div\" [ngClass]=\"{ 'inactive' : !toShow }\">\n      <h2>Leave Us A Message</h2>\n      <p>We will get back to you as soon as possible. Please note that solicitors and third parties will not be entertained.</p>\n      <form>\n        <div class=\"inputField\">\n          <input id=\"nameField\" [(ngClass)]=\"name\" class=\"inputField oneLineField\" type=\"text\" required>\n          <label for=\"nameField\" class=\"inputField placeholder\">Name</label>\n          <span class=\"inputField underline\"></span>\n          <span class=\"inputField bar\"></span>\n        </div>\n        <div class=\"inputField\">\n          <input id=\"emailField\" [(ngClass)]=\"email\" class=\"inputField oneLineField\" type=\"email\" required>\n          <label for=\"emailField\" class=\"inputField placeholder\">Email</label>\n          <span class=\"inputField underline\"></span>\n          <span class=\"inputField bar\"></span>\n        </div>\n        <div class=\"inputField\">\n          <input id=\"titleField\" [(ngClass)]=\"title\" class=\"inputField oneLineField\" type=\"text\" required>\n          <label for=\"titleField\" class=\"inputField placeholder\">Subject</label>\n          <span class=\"inputField underline\"></span>\n          <span class=\"inputField bar\"></span>\n        </div>\n        <div class=\"inputField\">\n          <textarea id=\"messageField\" [(ngClass)]=\"message\" class=\"inputField multiLineField\" type=\"text\" required></textarea>\n          <label for=\"messageField\" class=\"inputField placeholder\">Message</label>\n        </div>\n        <ul>\n          <li>\n            <button class=\"roundedButton cancel\" (click)=\"close()\">Cancel</button>\n          </li>\n          <li>\n            <button class=\"roundedButton default\" (click)=\"close('send')\">Send</button>\n          </li>\n        </ul>\n      </form>\n    </div>\n  </div>\n  ",
            styleUrls: [
                'app/assets/stylesheets/css/contactUsSheet.css',
                'app/assets/stylesheets/css/inputField.css',
                'app/assets/stylesheets/css/roundedButton.css'
            ],
            providers: [email_service_1.EmailService]
        }), 
        __metadata('design:paramtypes', [email_service_1.EmailService])
    ], ContactSheetComponent);
    return ContactSheetComponent;
}());
exports.ContactSheetComponent = ContactSheetComponent;
//# sourceMappingURL=contactsheet.component.js.map