module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/School/Desktop/Personal Projects/Proair-Web";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";
	__webpack_require__(1);
	var path = __webpack_require__(2);
	var express = __webpack_require__(3);
	var bodyParser = __webpack_require__(4);
	var cookieParser = __webpack_require__(5);
	var core_1 = __webpack_require__(6);
	var angular2_universal_1 = __webpack_require__(7);
	core_1.enableProdMode();
	var app = express();
	var ROOT = path.join(path.resolve(__dirname, '..'));
	app.engine('.html', angular2_universal_1.expressEngine);
	app.set('views', __dirname);
	app.set('view engine', 'html');
	app.use(cookieParser('Angular 2 Universal'));
	app.use(bodyParser.json());
	app.use('/assets', express.static(path.join(__dirname, 'assets'), { maxAge: 30 }));
	app.use(express.static(path.join(ROOT, 'dist/client'), { index: false }));
	var api_1 = __webpack_require__(8);
	app.get('/data.json', api_1.serverApi);
	var main_node_1 = __webpack_require__(11);
	app.get('/', main_node_1.ngApp);
	function indexFile(req, res) {
	    res.sendFile('/index.html', { root: __dirname });
	}
	app.get('*', function (req, res) {
	    res.setHeader('Content-Type', 'application/json');
	    var pojo = { status: 404, message: 'No Content' };
	    var json = JSON.stringify(pojo, null, 2);
	    res.status(404).send(json);
	});
	var server = app.listen(process.env.PORT || 3000, function () {
	    console.log("Listening on: http://localhost:" + server.address().port);
	});

	/* WEBPACK VAR INJECTION */}.call(exports, "src"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal/polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var db_1 = __webpack_require__(9);
	var cache_1 = __webpack_require__(10);
	var USER_ID = 'f9d98cf1-1b96-464e-8755-bcc2a5c09077';
	function serverApi(req, res) {
	    var key = USER_ID + '/data.json';
	    var cache = cache_1.fakeDemoRedisCache.get(key);
	    if (cache !== undefined) {
	        console.log('/data.json Cache Hit');
	        return res.json(cache);
	    }
	    console.log('/data.json Cache Miss');
	    db_1.fakeDataBase.get()
	        .then(function (data) {
	        cache_1.fakeDemoRedisCache.set(key, data);
	        return data;
	    })
	        .then(function (data) { return res.json(data); });
	}
	exports.serverApi = serverApi;


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	exports.fakeDataBase = {
	    get: function () {
	        var res = { data: 'This fake data came from the db on the server.' };
	        return Promise.resolve(res);
	    }
	};


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	var _fakeLRUcount = 0;
	exports.fakeDemoRedisCache = {
	    _cache: {},
	    get: function (key) {
	        var cache = exports.fakeDemoRedisCache._cache[key];
	        _fakeLRUcount++;
	        if (_fakeLRUcount >= 10) {
	            exports.fakeDemoRedisCache.clear();
	            _fakeLRUcount = 0;
	        }
	        return cache;
	    },
	    set: function (key, data) { return exports.fakeDemoRedisCache._cache[key] = data; },
	    clear: function () { return exports.fakeDemoRedisCache._cache = {}; }
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var angular2_universal_1 = __webpack_require__(7);
	var router_1 = __webpack_require__(12);
	var common_1 = __webpack_require__(13);
	var my_home_component_1 = __webpack_require__(14);
	var app_routes_1 = __webpack_require__(15);
	function ngApp(req, res) {
	    var baseUrl = '/';
	    var url = req.originalUrl || '/';
	    var config = {
	        directives: [
	            my_home_component_1.MyHomeComponent
	        ],
	        platformProviders: [
	            { provide: angular2_universal_1.ORIGIN_URL, useValue: 'http://localhost:3000' },
	            { provide: common_1.APP_BASE_HREF, useValue: baseUrl },
	        ],
	        providers: [
	            { provide: angular2_universal_1.REQUEST_URL, useValue: url },
	            angular2_universal_1.NODE_HTTP_PROVIDERS,
	            router_1.provideRouter(app_routes_1.routes),
	            angular2_universal_1.NODE_LOCATION_PROVIDERS
	        ],
	        async: true,
	        preboot: false
	    };
	    res.render('index', config);
	}
	exports.ngApp = ngApp;


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("@angular/common");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(6);
	var router_1 = __webpack_require__(12);
	var MyHomeComponent = (function () {
	    function MyHomeComponent() {
	    }
	    MyHomeComponent = __decorate([
	        core_1.Component({
	            selector: 'my-home',
	            template: '<router-outlet></router-outlet>',
	            directives: router_1.ROUTER_DIRECTIVES.slice()
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MyHomeComponent);
	    return MyHomeComponent;
	}());
	exports.MyHomeComponent = MyHomeComponent;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var app_component_1 = __webpack_require__(16);
	exports.routes = [
	    { path: '', component: app_component_1.AppComponent },
	    { path: '**', redirectTo: '' }
	];


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(6);
	var contactsheet_component_1 = __webpack_require__(17);
	var angularfire2_1 = __webpack_require__(25);
	var AppComponent = (function () {
	    function AppComponent(af) {
	        this.af = af;
	        this.logoSource = "./assets/images/proairlogo.png";
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
	        this.contentHome = this.af
	            .database
	            .object('/home');
	    };
	    AppComponent.prototype.getAboutContent = function () {
	        this.contentAbout = this.af
	            .database
	            .object('/about');
	    };
	    AppComponent.prototype.getServicesContent = function () {
	        this.contentServices = this.af
	            .database
	            .object('/services');
	    };
	    AppComponent.prototype.getContactContent = function () {
	        this.contentContact = this.af
	            .database
	            .object('/contact');
	    };
	    AppComponent.prototype.getCareersContent = function () {
	        this.contentCareers = this.af
	            .database
	            .object('/careers');
	    };
	    AppComponent.prototype.onContactSheetEvent = function (toShow) {
	        this.isFormShown = toShow;
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: "\n  <div (window:resize)=\"onResize($event)\"> <!-- Navigation Bar -->\n    <navbar class=navbar id=\"navBar\">\n      <ul>\n        <!-- test logo. replace with proair logo\u0095\u0095\u0095 -->\n        <a href=\"#Home\">\n          <img src={{logoSource}} alt=\"Proair\">\n        </a>\n        <li *ngIf=\"!isMobileSizedWidth\"><a href=\"#Careers\">Careers</a></li>\n        <li *ngIf=\"!isMobileSizedWidth\"><a href=\"#Contact\">Contact</a></li>\n        <li *ngIf=\"!isMobileSizedWidth\"><a href=\"#Services\">Services</a></li>\n        <li *ngIf=\"!isMobileSizedWidth\"><a href=\"#About\">About</a></li>\n        <li *ngIf=\"isMobileSizedWidth\"><button (click)=\"toggleMenu($event)\">\u2630</button></li>\n      </ul>\n    </navbar>\n  </div>\n  <div *ngIf=\"isMenuShown\" (window:scroll)=\"dismissMenu($event)\"> <!-- Navigation Menu Dropdown -->\n    <navMenu class=navMenu>\n      <ul>\n        <li><a href=\"#About\">About</a></li>\n        <li><a href=\"#Services\">Services</a></li>\n        <li><a href=\"#Contact\">Contact</a></li>\n        <li><a href=\"#Careers\">Careers</a></li>\n      </ul>\n    </navMenu>\n  </div>\n   <!-- Parallax Body -->\n  <div id=\"Home\">\n    <section style=\"padding-top:70px;\" class=\"module parallax parallaxImage-Home\">\n      <div class=\"container\">\n        <img src={{logoSource}} alt=\"Proair\">\n        <h1 style=\"margin:5px;\">Proair</h1>\n      </div>\n    </section>\n\n    <section class=\"module content\">\n      <div class=\"container\">\n        <h2>{{(contentHome | async)?.title}}</h2>\n        <p>{{(contentHome | async)?.content}}</p>\n      </div>\n    </section>\n\n    <section class=\"module parallax parallaxImage-About\" id=\"About\">\n      <div class=\"container\">\n        <h1>About</h1>\n      </div>\n    </section>\n\n    <section class=\"module content\">\n      <div class=\"container\">\n        <h2>{{(contentAbout | async)?.title}}</h2>\n        <p>{{(contentAbout | async)?.content}}</p>\n      </div>\n    </section>\n\n    <section class=\"module parallax parallaxImage-Services\" id=\"Services\">\n      <div class=\"container\">\n        <h1>Services</h1>\n      </div>\n    </section>\n\n    <section class=\"module content\">\n      <div class=\"container\">\n        <h2>{{(contentServices | async)?.title}}</h2>\n        <p>{{(contentServices | async)?.content}}</p>\n      </div>\n    </section>\n\n    <section class=\"module parallax parallaxImage-Contact\" id=\"Contact\">\n      <div class=\"container\">\n        <h1>Contact</h1>\n      </div>\n    </section>\n\n    <section class=\"module content\">\n      <div class=\"container\" [ngClass]=\"{ 'inactive' : isFormShown }\">\n        <h2>{{(contentContact | async)?.title}}</h2>\n        <p>{{(contentContact | async)?.content}}</p>\n        <button class=\"roundedButton default\" (click)=\"isFormShown=true\">Contact Us</button>\n      </div>\n    </section>\n\n    <section class=\"module parallax parallaxImage-Careers\" id=\"Careers\">\n      <div class=\"container\">\n        <h1>Careers</h1>\n      </div>\n    </section>\n\n    <section class=\"module content\">\n      <div class=\"container\">\n        <h2>{{(contentCareers | async)?.title}}</h2>\n        <p>{{(contentCareers | async)?.content}}</p>\n      </div>\n    </section>\n  </div>\n  <contact-sheet [toShow]=\"isFormShown\" (change)=\"onContactSheetEvent($event)\"></contact-sheet>\n  <div>\n    <footer class=\"footer\">\n      <p>Proair Sdn Bhd</p>\n    </footer>\n  </div>\n  ",
	            styles: [
	                __webpack_require__(26),
	                __webpack_require__(27),
	                __webpack_require__(28),
	                __webpack_require__(29),
	                __webpack_require__(22),
	                __webpack_require__(23),
	                __webpack_require__(24)
	            ],
	            directives: [contactsheet_component_1.ContactSheetComponent]
	        }), 
	        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(6);
	var email_service_1 = __webpack_require__(18);
	var recaptcha_component_1 = __webpack_require__(21);
	var ContactSheetComponent = (function () {
	    function ContactSheetComponent(emailService) {
	        this.emailService = emailService;
	        this.change = new core_1.EventEmitter();
	        this.siteKey = "6LfZuiYTAAAAAMRzu7e-qsNfljAvyQkSvKpmSa4S";
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
	    ContactSheetComponent.prototype.resolved = function (response) {
	    };
	    ContactSheetComponent.prototype.validify = function () {
	        this.sendEmail();
	    };
	    ContactSheetComponent.prototype.sendEmail = function () {
	        this.emailService.sendEmail(this.name, this.email, this.title, this.message);
	        this.dismissSheet();
	    };
	    ContactSheetComponent.prototype.dismissSheet = function () {
	        this.name = "";
	        this.email = "";
	        this.title = "";
	        this.message = "";
	        this.toShow = false;
	        this.gRecaptchaElement.reset();
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
	    __decorate([
	        core_1.ViewChild(recaptcha_component_1.GoogleRecaptchaDirective), 
	        __metadata('design:type', Object)
	    ], ContactSheetComponent.prototype, "gRecaptchaElement", void 0);
	    ContactSheetComponent = __decorate([
	        core_1.Component({
	            selector: 'contact-sheet',
	            template: "\n  <div class=\"contactUsSheet\" [ngClass]=\"{ 'inactive' : !toShow }\">\n    <div class=\"contactUsSheet div\" [ngClass]=\"{ 'inactive' : !toShow }\">\n      <h2>Leave Us A Message</h2>\n      <p>We will get back to you as soon as possible. Please note that solicitors and third parties will not be entertained.</p>\n      <form>\n        <div class=\"inputField\">\n          <input id=\"nameField\" [(ngModel)]=\"name\" class=\"inputField oneLineField\" type=\"text\" required>\n          <label for=\"nameField\" class=\"inputField placeholder\">Name</label>\n          <span class=\"inputField underline\"></span>\n          <span class=\"inputField bar\"></span>\n        </div>\n        <div class=\"inputField\">\n          <input id=\"emailField\" [(ngModel)]=\"email\" class=\"inputField oneLineField\" type=\"email\" required>\n          <label for=\"emailField\" class=\"inputField placeholder\">Email</label>\n          <span class=\"inputField underline\"></span>\n          <span class=\"inputField bar\"></span>\n        </div>\n        <div class=\"inputField\">\n          <input id=\"titleField\" [(ngModel)]=\"title\" class=\"inputField oneLineField\" type=\"text\" required>\n          <label for=\"titleField\" class=\"inputField placeholder\">Subject</label>\n          <span class=\"inputField underline\"></span>\n          <span class=\"inputField bar\"></span>\n        </div>\n        <div class=\"inputField\">\n          <textarea id=\"messageField\" [(ngModel)]=\"message\" class=\"inputField multiLineField\" type=\"text\" required></textarea>\n          <label for=\"messageField\" class=\"inputField placeholder\">Message</label>\n        </div>\n        <div style=\"padding:5px;\" googlerecaptcha\n    (resolve)=\"resolved($event)\" [site-key]=\"siteKey\"></div>\n\n      </form>\n      <ul>\n        <li>\n          <button class=\"roundedButton cancel\" (click)=\"close()\">Cancel</button>\n        </li>\n        <li>\n          <button class=\"roundedButton default\" (click)=\"close('send')\">Send</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n  ",
	            styles: [
	                __webpack_require__(22),
	                __webpack_require__(23),
	                __webpack_require__(24),
	            ],
	            directives: [recaptcha_component_1.GoogleRecaptchaDirective],
	            providers: [email_service_1.EmailService]
	        }), 
	        __metadata('design:paramtypes', [email_service_1.EmailService])
	    ], ContactSheetComponent);
	    return ContactSheetComponent;
	}());
	exports.ContactSheetComponent = ContactSheetComponent;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(6);
	var http_1 = __webpack_require__(19);
	var Observable_1 = __webpack_require__(20);
	var EmailService = (function () {
	    function EmailService(http) {
	        this.http = http;
	    }
	    EmailService.prototype.sendEmail = function (name, email, title, content) {
	        var message = "\n      From    : " + name + "\n      Email   : " + email + "\n      Title   : " + title + "\n      Message :\n      " + content + "\n    ";
	    };
	    EmailService.prototype.handleError = function (error) {
	        var errMsg = (error.message) ? error.message :
	            error.status ? error.status + " - " + error.statusText : 'Server error';
	        console.error(errMsg);
	        return Observable_1.Observable.throw(errMsg);
	    };
	    EmailService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], EmailService);
	    return EmailService;
	}());
	exports.EmailService = EmailService;


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Observable");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(6);
	var common_1 = __webpack_require__(13);
	var GoogleRecaptchaDirective = (function () {
	    function GoogleRecaptchaDirective(el, model) {
	        this.model = model;
	        this.resolve = new core_1.EventEmitter();
	        this._el = el.nativeElement;
	        this.modelValue = this.model;
	        var input = this._el;
	    }
	    GoogleRecaptchaDirective.prototype.ngOnInit = function () {
	        var _this = this;
	        setTimeout(function () {
	            grecaptcha.render(_this._el, {
	                'sitekey': _this.siteKey,
	                'callback': function (data) {
	                    if (data) {
	                        _this.resolve.emit(data);
	                    }
	                }
	            });
	        }, 1000);
	    };
	    GoogleRecaptchaDirective.prototype.reset = function () {
	        setTimeout(function () {
	            grecaptcha.reset();
	        }, 1000);
	    };
	    __decorate([
	        core_1.Input('site-key'), 
	        __metadata('design:type', String)
	    ], GoogleRecaptchaDirective.prototype, "siteKey", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], GoogleRecaptchaDirective.prototype, "resolve", void 0);
	    GoogleRecaptchaDirective = __decorate([
	        core_1.Directive({
	            selector: '[googlerecaptcha]',
	            providers: [common_1.NgModel],
	            host: {
	                '(input)': 'onInputChange()'
	            }
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, common_1.NgModel])
	    ], GoogleRecaptchaDirective);
	    return GoogleRecaptchaDirective;
	}());
	exports.GoogleRecaptchaDirective = GoogleRecaptchaDirective;


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = ".contactUsSheet{position:fixed;display:flex;flex-direction:column;align-content:center;justify-content:center;overflow:auto;padding:15px;left:0;top:0;width:calc(100% - 30px);height:calc(100% - 30px);background-color:rgba(0,0,0,0.8);-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s;font-family:\"Muli\",sans-serif;z-index:300;visibility:visible;opacity:1}.contactUsSheet.inactive{visibility:hidden;opacity:0}.contactUsSheet div{position:relative;display:block;margin:0 auto;padding:25px;border-radius:5px;width:calc(100% - 50px);max-width:calc(900px - 50px);max-height:calc(650px - 50px);overflow-x:hidden;overflow-y:scroll;background-color:#fff;color:#333;opacity:1;-webkit-transition:all 0.5s ease-in-out 0s;transition:all 0.5s ease-in-out 0s}.contactUsSheet div ul{display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;justify-content:center;width:100%;padding:0;list-style:none}.contactUsSheet div ul li{padding:5px 25px}.contactUsSheet div.g-recaptcha{margin:auto !important;width:auto !important;height:auto !important;overflow-y:hidden;text-align:-webkit-center;text-align:-moz-center;text-align:-o-center;text-align:-ms-center}.contactUsSheet div.inactive{transform:translate3d(0, -25vw, 0);opacity:0}\n"

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = ".inputField{position:relative;display:block;font-family:\"Muli\",sans-serif;min-width:200px;padding:0;margin:0}.inputField .bar{position:relative;display:block}.inputField .bar:before,.inputField .bar:after{content:'';height:2px;width:100%;bottom:-3px;left:0;position:absolute;background:#363DA7;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s}.inputField .underline{position:relative;display:block}.inputField .underline:before,.inputField .underline:after{position:absolute;left:0;content:'';height:2px;width:100%;bottom:-3px;background:#b3b3b3}.inputField .placeholder{position:absolute;color:#b3b3b3;width:100%;height:10px;font-size:20px;top:25px;left:35px;bottom:0;-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s}.inputField .placeholder:hover{cursor:text}.inputField .oneLineField{position:relative;font-size:20px;width:calc(100% - 20px);border:none;padding-left:10px;padding-right:10px}.inputField .oneLineField:focus{outline:none}.inputField .oneLineField:focus ~ .bar:before,.inputField .oneLineField:focus ~ .bar:after{-webkit-transform:scaleX(1);transform:scaleX(1)}.inputField .oneLineField:focus ~ .placeholder{color:#333;left:25px;font-size:12px;top:10px}.inputField .oneLineField:valid ~ .bar:before,.inputField .oneLineField:valid ~ .bar:after{-webkit-transform:scaleX(1);transform:scaleX(1)}.inputField .oneLineField:valid ~ .placeholder{color:#333;left:25px;font-size:12px;top:10px}.inputField .oneLineField.incomplete ~ .bar:before,.inputField .oneLineField.incomplete ~ .bar:after{background:#e74c3c;-webkit-transform:scaleX(1);transform:scaleX(1)}.inputField .oneLineField.incomplete ~ .placeholder{color:#333;left:25px;font-size:12px;top:10px}.inputField .multiLineField{font-size:20px;width:calc(100% - 20px);height:300px;border:1px solid;padding:10px;border-radius:10px;border-color:#b3b3b3;resize:none;-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s}.inputField .multiLineField ~ .placeholder{top:37px}.inputField .multiLineField:focus{outline:none;border-color:#363DA7}.inputField .multiLineField:focus ~ .placeholder{color:#333;left:25px;font-size:12px;top:10px}.inputField .multiLineField:valid{border-color:#363DA7}.inputField .multiLineField:valid ~ .placeholder{color:#333;left:25px;font-size:12px;top:10px}.inputField .multiLineField.incomplete{border-color:#e74c3c}.inputField .multiLineField.incomplete ~ .placeholder{color:#333;left:25px;font-size:12px;top:10px}\n"

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = ".roundedButton{padding:0;font-family:\"Muli\",sans-serif;font-size:1.0em;line-height:1.0em;color:#333;background-color:transparent;border:2px solid;border-radius:25px;border-color:#363DA7;width:200px;height:40px;-webkit-transition:all 0.2s ease-in-out 0s;transition:all 0.2s ease-in-out 0s}.roundedButton:focus{outline:none}.roundedButton:hover{font-size:1.1em}.roundedButton.cancel:hover{border-color:#e74c3c;background-color:#e74c3c;color:#fff}.roundedButton.default:hover{background-color:#363DA7;color:#fff}\n"

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("angularfire2");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = ".navbar{font-family:\"Muli\",sans-serif;position:fixed;width:100%;z-index:150}.navbar ul{padding:0;margin:0;top:0;height:70px;list-style:none;overflow:hidden;background-color:#333;box-shadow:0 2px 3px rgba(0,0,0,0.4)}.navbar ul img{float:left;margin-left:25px;padding:12px;max-width:45px;max-height:45px}.navbar ul li{float:right;padding:25px 25px;display:flex;align-items:center;justify-content:center}.navbar ul li a{padding-top:3px;position:relative;display:inline-block;color:#fff;text-align:center;opacity:0.8;text-decoration:none;font-size:16px;-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s}.navbar ul li a:before{content:\"\";position:absolute;width:100%;height:2px;bottom:-3px;left:0px;background-color:#fff;visibility:hidden;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s}.navbar ul li a:hover:before{visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1)}.navbar ul li a:hover{opacity:1.0}.navbar ul li button{background:transparent;color:#fff;font-size:16px;border:none;text-align:center;text-decoration:none;display:inline-block;cursor:pointer}.navbar ul li button:focus{outline:none}.navbar ul li:last-child{border-left:none}.navbar ul li .icon{display:none}\n"

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = ".navMenu{font-family:\"Muli\",sans-serif;position:fixed;right:0;z-index:151}.navMenu ul{padding:0;margin-right:0;list-style:none;overflow:hidden;background-color:#333;box-shadow:0 2px 3px rgba(0,0,0,0.4)}.navMenu ul li{padding:10px 40px;display:flex;align-items:center;justify-content:center}.navMenu ul li a{position:relative;display:block;color:#fff;text-align:center;opacity:0.8;text-decoration:none;font-size:16px;-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s}.navMenu ul li a:before{content:\"\";position:absolute;width:100%;height:2px;bottom:-3px;left:0px;background-color:#fff;visibility:hidden;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s}.navMenu ul li a:hover:before{visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1)}.navMenu ul li a:hover{opacity:1.0}.navMenu ul li button{background:transparent;color:#fff;font-size:16px;border:none;text-align:center;text-decoration:none;display:inline-block;cursor:pointer}.navMenu ul li:last-child{border-left:none}.navMenu ul li .icon{display:none}\n"

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = ".container{max-width:960px;overflow:auto}.module{font-family:\"Muli\",sans-serif;color:#333;position:relative;text-align:center;padding:0;width:100%;overflow:hidden;display:flex;align-items:center;justify-content:center;flex-wrap:nowrap}.module:last-child{margin-bottom:0}.module h2{padding:10px;font-size:30px}.module p{white-space:pre-wrap;max-width:960px;word-wrap:break-word;padding:25px;margin-bottom:40px;font-size:16px}.module p:last-child{margin-bottom:0}.module.content{padding:100px 0;background:#fff}.module.parallax{height:400px;background-position:50% 50%;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;background-color:transparent;display:flex;align-items:center;justify-content:center}.module.parallax h1{font-family:\"Raleway\",sans-serif;color:rgba(255,255,255,0.8);font-size:48px;text-transform:uppercase;text-shadow:0 0 10px rgba(0,0,0,0.2)}.module.parallax img{margin-top:50px;width:100px;height:auto;max-width:200px;max-height:200px}.module.parallaxImage-Home{background-image:linear-gradient(rgba(20,20,20,0.3), rgba(20,20,20,0.3)),url(\"../../../../assets/images/proair-web-home-alt.jpg\")}.module.parallaxImage-About{background-image:linear-gradient(rgba(20,20,20,0.3), rgba(20,20,20,0.3)),url(\"../../../../assets/images/proair-web-about.jpg\")}.module.parallaxImage-Services{background-image:linear-gradient(rgba(20,20,20,0.3), rgba(20,20,20,0.3)),url(\"../../../../assets/images/proair-web-services.jpg\")}.module.parallaxImage-Contact{background-image:linear-gradient(rgba(20,20,20,0.3), rgba(20,20,20,0.3)),url(\"../../../../assets/images/proair-web-contact.jpg\")}.module.parallaxImage-Careers{background-image:linear-gradient(rgba(20,20,20,0.3), rgba(20,20,20,0.3)),url(\"../../../../assets/images/proair-web-careers.jpg\")}@media all and (min-width: 600px){.module h2{font-size:42px}.module p{font-size:20px}.module.parallax{height:450px}.module.parallax h1{font-size:96px}.module.parallax img{width:150px;height:auto}}@media all and (min-width: 960px){.module.parallax{height:500px}.module.parallax h1{font-size:160px}.module.parallax img{width:auto;height:200px}}\n"

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = ".footer{font-family:\"Muli\",sans-serif;position:relative;display:block;padding:0;min-height:50px;max-height:300px;background-color:#333;display:flex;align-items:center;justify-content:center}.footer p{color:#fff}\n"

/***/ }
/******/ ]);