webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routes/app-routes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__release_management_add_release_add_release_component__ = __webpack_require__("./src/app/release-management/add-release/add-release.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__release_management_add_release_add_files_add_files_component__ = __webpack_require__("./src/app/release-management/add-release/add-files/add-files.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__release_management_add_release_browse_files_browse_files_component__ = __webpack_require__("./src/app/release-management/add-release/browse-files/browse-files.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__release_management_existing_release_existing_release_component__ = __webpack_require__("./src/app/release-management/existing-release/existing-release.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__release_management_add_release_browse_files_files_by_commit_component__ = __webpack_require__("./src/app/release-management/add-release/browse-files/files-by-commit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__auth_login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'addRelease', component: __WEBPACK_IMPORTED_MODULE_4__release_management_add_release_add_release_component__["a" /* AddReleaseComponent */] },
    { path: 'addFiles', component: __WEBPACK_IMPORTED_MODULE_5__release_management_add_release_add_files_add_files_component__["a" /* AddFilesComponent */], pathMatch: 'prefix',
        children: [
            { path: '', redirectTo: 'browseFiles', pathMatch: 'full' },
            { path: 'browseFiles', component: __WEBPACK_IMPORTED_MODULE_6__release_management_add_release_browse_files_browse_files_component__["a" /* BrowseFilesComponent */], pathMatch: 'full' },
            { path: 'filesByCommit', component: __WEBPACK_IMPORTED_MODULE_8__release_management_add_release_browse_files_files_by_commit_component__["a" /* FilesByCommit */], pathMatch: 'full' },
            { path: 'existingRelease', component: __WEBPACK_IMPORTED_MODULE_7__release_management_existing_release_existing_release_component__["a" /* ExistingReleaseComponent */], pathMatch: 'full' }
            //{path: '', redirectTo: 'browseFiles'}, 
        ]
    },
    //{path : 'browseFiles',component:BrowseFilesComponent},
    { path: 'existingRelease', component: __WEBPACK_IMPORTED_MODULE_7__release_management_existing_release_existing_release_component__["a" /* ExistingReleaseComponent */] }
];
var AppRoutesModule = /** @class */ (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutesModule);
    return AppRoutesModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<layout-header></layout-header>\r\n<router-outlet></router-outlet>\r\n<layout-footer></layout-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes_app_routes_module__ = __webpack_require__("./src/app/app-routes/app-routes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_module__ = __webpack_require__("./src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__release_management_release_management_module__ = __webpack_require__("./src/app/release-management/release-management.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_service_jgit_service__ = __webpack_require__("./src/app/shared/service/jgit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_service_release_service__ = __webpack_require__("./src/app/shared/service/release.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared__ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__auth_login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_7__app_routes_app_routes_module__["a" /* AppRoutesModule */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_module__["a" /* HomeModule */], __WEBPACK_IMPORTED_MODULE_9__release_management_release_management_module__["a" /* ReleasemanagementModule */], __WEBPACK_IMPORTED_MODULE_12__shared__["c" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__shared_service_jgit_service__["a" /* JgitService */], __WEBPACK_IMPORTED_MODULE_11__shared_service_release_service__["a" /* ReleaseService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n\tbackground: #e9e9e9;\r\n\tcolor: #666666;\r\n\tfont-family: 'RobotoDraft', 'Roboto', sans-serif;\r\n\tfont-size: 14px;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n  }\r\n  \r\n  /* Pen Title */\r\n  \r\n  .pen-title {\r\n\tpadding: 50px 0;\r\n\ttext-align: center;\r\n\tletter-spacing: 2px;\r\n  }\r\n  \r\n  .pen-title h1 {\r\n\tmargin: 0 0 20px;\r\n\tfont-size: 48px;\r\n\tfont-weight: 300;\r\n  }\r\n  \r\n  .pen-title span {\r\n\tfont-size: 12px;\r\n  }\r\n  \r\n  .pen-title span .fa {\r\n\tcolor: #33b5e5;\r\n  }\r\n  \r\n  .pen-title span a {\r\n\tcolor: #33b5e5;\r\n\tfont-weight: 600;\r\n\ttext-decoration: none;\r\n  }\r\n  \r\n  /* Form Module */\r\n  \r\n  .form-module {\r\n\tposition: relative;\r\n\ttop: 100px;\r\n\tbackground: #ffffff;\r\n\tmax-width: 320px;\r\n\twidth: 100%;\r\n\tborder-top: 5px solid #33b5e5;\r\n\t-webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);\r\n\t        box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);\r\n\tmargin: 0 auto;\r\n  }\r\n  \r\n  .form-module .toggle {\r\n\tcursor: pointer;\r\n\tposition: absolute;\r\n\ttop: -0;\r\n\tright: -0;\r\n\tbackground: #33b5e5;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tmargin: -5px 0 0;\r\n\tcolor: #ffffff;\r\n\tfont-size: 12px;\r\n\tline-height: 30px;\r\n\ttext-align: center;\r\n  }\r\n  \r\n  .form-module .toggle .tooltip {\r\n\tposition: absolute;\r\n\ttop: 5px;\r\n\tright: -65px;\r\n\tdisplay: block;\r\n\tbackground: rgba(0, 0, 0, 0.6);\r\n\twidth: auto;\r\n\tpadding: 5px;\r\n\tfont-size: 10px;\r\n\tline-height: 1;\r\n\ttext-transform: uppercase;\r\n  }\r\n  \r\n  .form-module .toggle .tooltip:before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 5px;\r\n\tleft: -5px;\r\n\tdisplay: block;\r\n\tborder-top: 5px solid transparent;\r\n\tborder-bottom: 5px solid transparent;\r\n\tborder-right: 5px solid rgba(0, 0, 0, 0.6);\r\n  }\r\n  \r\n  .form-module .form {\r\n\tdisplay: none;\r\n\tpadding: 40px;\r\n  }\r\n  \r\n  .form-module .form:nth-child(2) {\r\n\tdisplay: block;\r\n  }\r\n  \r\n  .form-module h2 {\r\n\tmargin: 0 0 20px;\r\n\tcolor: #33b5e5;\r\n\tfont-size: 18px;\r\n\tfont-weight: 400;\r\n\tline-height: 1;\r\n  }\r\n  \r\n  .form-module input {\r\n\toutline: none;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tborder: 1px solid #d9d9d9;\r\n\tmargin: 0 0 20px;\r\n\tpadding: 10px 15px;\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n\tfont-wieght: 400;\r\n\t-webkit-transition: 0.3s ease;\r\n\ttransition: 0.3s ease;\r\n  }\r\n  \r\n  .form-module input:focus {\r\n\tborder: 1px solid #33b5e5;\r\n\tcolor: #333333;\r\n  }\r\n  \r\n  .form-module button {\r\n\tcursor: pointer;\r\n\tbackground: #33b5e5;\r\n\twidth: 100%;\r\n\tborder: 0;\r\n\tpadding: 10px 15px;\r\n\tcolor: #ffffff;\r\n\t-webkit-transition: 0.3s ease;\r\n\ttransition: 0.3s ease;\r\n  }\r\n  \r\n  .form-module button:hover {\r\n\tbackground: #178ab4;\r\n  }\r\n  \r\n  .form-module .cta {\r\n\tbackground: #f2f2f2;\r\n\twidth: 100%;\r\n\tpadding: 15px 40px;\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n\tcolor: #666666;\r\n\tfont-size: 12px;\r\n\ttext-align: center;\r\n  }\r\n  \r\n  .form-module .cta a {\r\n\tcolor: #333333;\r\n\ttext-decoration: none;\r\n  }\r\n  \r\n  body {\r\n\tbackground: #e9e9e9;\r\n\tcolor: #666666;\r\n\tfont-family: 'RobotoDraft', 'Roboto', sans-serif;\r\n\tfont-size: 14px;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n  }\r\n  \r\n  /* Pen Title */\r\n  \r\n  .pen-title {\r\n\tpadding: 50px 0;\r\n\ttext-align: center;\r\n\tletter-spacing: 2px;\r\n  }\r\n  \r\n  .pen-title h1 {\r\n\tmargin: 0 0 20px;\r\n\tfont-size: 48px;\r\n\tfont-weight: 300;\r\n  }\r\n  \r\n  .pen-title span {\r\n\tfont-size: 12px;\r\n  }\r\n  \r\n  .pen-title span .fa {\r\n\tcolor: #33b5e5;\r\n  }\r\n  \r\n  .pen-title span a {\r\n\tcolor: #33b5e5;\r\n\tfont-weight: 600;\r\n\ttext-decoration: none;\r\n  }\r\n  \r\n  /* Form Module */\r\n  \r\n  .form-module {\r\n\tposition: relative;\r\n\ttop: 100px;\r\n\tbackground: #ffffff;\r\n\tmax-width: 320px;\r\n\twidth: 100%;\r\n\tborder-top: 5px solid #33b5e5;\r\n\t-webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);\r\n\t        box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);\r\n\tmargin: 0 auto;\r\n  }\r\n  \r\n  .form-module .toggle {\r\n\tcursor: pointer;\r\n\tposition: absolute;\r\n\ttop: -0;\r\n\tright: -0;\r\n\tbackground: #33b5e5;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tmargin: -5px 0 0;\r\n\tcolor: #ffffff;\r\n\tfont-size: 12px;\r\n\tline-height: 30px;\r\n\ttext-align: center;\r\n  }\r\n  \r\n  .form-module .toggle .tooltip {\r\n\tposition: absolute;\r\n\ttop: 5px;\r\n\tright: -65px;\r\n\tdisplay: block;\r\n\tbackground: rgba(0, 0, 0, 0.6);\r\n\twidth: auto;\r\n\tpadding: 5px;\r\n\tfont-size: 10px;\r\n\tline-height: 1;\r\n\ttext-transform: uppercase;\r\n  }\r\n  \r\n  .form-module .toggle .tooltip:before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 5px;\r\n\tleft: -5px;\r\n\tdisplay: block;\r\n\tborder-top: 5px solid transparent;\r\n\tborder-bottom: 5px solid transparent;\r\n\tborder-right: 5px solid rgba(0, 0, 0, 0.6);\r\n  }\r\n  \r\n  .form-module .form {\r\n\tdisplay: none;\r\n\tpadding: 40px;\r\n  }\r\n  \r\n  .form-module .form:nth-child(2) {\r\n\tdisplay: block;\r\n  }\r\n  \r\n  .form-module h2 {\r\n\tmargin: 0 0 20px;\r\n\tcolor: #33b5e5;\r\n\tfont-size: 18px;\r\n\tfont-weight: 400;\r\n\tline-height: 1;\r\n  }\r\n  \r\n  .form-module input {\r\n\toutline: none;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tborder: 1px solid #d9d9d9;\r\n\tmargin: 0 0 20px;\r\n\tpadding: 10px 15px;\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n\tfont-wieght: 400;\r\n\t-webkit-transition: 0.3s ease;\r\n\ttransition: 0.3s ease;\r\n  }\r\n  \r\n  .form-module input:focus {\r\n\tborder: 1px solid #33b5e5;\r\n\tcolor: #333333;\r\n  }\r\n  \r\n  .form-module button {\r\n\tcursor: pointer;\r\n\tbackground: #33b5e5;\r\n\twidth: 100%;\r\n\tborder: 0;\r\n\tpadding: 10px 15px;\r\n\tcolor: #ffffff;\r\n\t-webkit-transition: 0.3s ease;\r\n\ttransition: 0.3s ease;\r\n  }\r\n  \r\n  .form-module button:hover {\r\n\tbackground: #178ab4;\r\n  }\r\n  \r\n  .form-module .cta {\r\n\tbackground: #f2f2f2;\r\n\twidth: 100%;\r\n\tpadding: 15px 40px;\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n\tcolor: #666666;\r\n\tfont-size: 12px;\r\n\ttext-align: center;\r\n  }\r\n  \r\n  .form-module .cta a {\r\n\tcolor: #333333;\r\n\ttext-decoration: none;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"module form-module\">\n    <div class=\"toggle\"><i class=\"fa fa-times fa-pencil\"></i>\n      <div class=\"tooltip\">Click Me</div>\n    </div>\n    <div class=\"form\">\n      <h2>Login to your account</h2>\n      <form>\n        <input type=\"text\" placeholder=\"Username\" required=\"\"  [(ngModel)]=\"userId\" name=\"username\"/>\n        <input type=\"password\" placeholder=\"Password\"  [(ngModel)]=\"password\"  required=\"\" name=\"password\" />\n        <button value=\"Log in\" (click)=\"navigateTOManualsAdmin()\">Login</button>\n      </form>\n    </div>\n    <!--<div class=\"form\">\n      <h2>Create an account</h2>\n      <form>\n        <input type=\"text\" placeholder=\"Username\"/>\n        <input type=\"password\" placeholder=\"Password\"/>\n        <input type=\"email\" placeholder=\"Email Address\"/>\n        <input type=\"tel\" placeholder=\"Phone Number\"/>\n        <button>Register</button>\n      </form>\n    </div>-->\n    <div class=\"cta\"><a href=\"http://andytran.me\">Forgot your password?</a></div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(_route) {
        this._route = _route;
        this.userId = "";
        this.password = "";
        this.navigateTOManualsAdmin = function () {
            console.log("navigating to manual");
            this._route.navigate(["/home"]);
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.container{\r\n    margin-top: 30px;\r\n}\r\n.nav-tabs .nav-link {\r\n    border: 1px solid transparent;\r\n    border-top-left-radius: 0.25rem;\r\n    border-top-right-radius: 0.25rem;\r\n    background: #33b5e5;\r\n    color: #fff;\r\n    margin-right: 2px;\r\n}\r\n.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {\r\n    color: #ffffff;\r\n    background: #178ab4;\r\n    border-color: #dee2e6 #dee2e6 #fff;\r\n}\r\n.list-group-item{\r\n    background: rgba(51, 181, 229, 0.2);\r\n    color: #178ab4;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section class=\"container py-4\">\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n         \n          <ul id=\"tabsJustified\" class=\"nav nav-tabs\">\n              <li class=\"nav-item\"><a href=\"javasctipt:void(0);\" id=\"releaseAccId\" (click)=\"toggleAccordian('relaseId');addActiveClas('releaseAccId');\"  class=\"nav-link small text-uppercase active\">Release Management</a></li>\n              <li class=\"nav-item\"><a href=\"javasctipt:void(0);\" id=\"pubAccId\" (click)=\"toggleAccordian('publicationId');addActiveClas('pubAccId');\" class=\"nav-link small text-uppercase\">Publication</a></li>\n              <li class=\"nav-item\"><a href=\"javasctipt:void(0);\" id=\"configAccId\" (click)=\"toggleAccordian('configurationId');addActiveClas('configAccId');\"  class=\"nav-link small text-uppercase\">Configuration</a></li>\n          </ul>\n          <br>\n          <div id=\"tabsJustifiedContent\" class=\"tab-content\">\n              <div id=\"relaseId\" class=\"tab-pane fade active show\">\n                  <div class=\"list-group\">\n                          <a href=\"#/addRelease\" class=\"list-group-item d-inline-block\">New Release</a> \n                          <a href=\"javasctipt:void(0);\" class=\"list-group-item d-inline-block\">Existing Release</a>                           \n                   </div>\n              </div>\n              <div id=\"publicationId\" class=\"tab-pane fade\">\n                  <div class=\"list-group\">\n                         \n                              <a href=\"javasctipt:void(0);\" class=\"list-group-item d-inline-block\">Staging</a>\n                              <a href=\"javasctipt:void(0);\" class=\"list-group-item d-inline-block\">Production</a>\n                          \n                  </div>\n              </div>\n              <div id=\"configurationId\" class=\"tab-pane fade\">\n                  <div class=\"list-group\">\n                          \n                                  <a href=\"javasctipt:void(0);\" class=\"list-group-item d-inline-block\">Audiences</a>\n                                  <a href=\"javasctipt:void(0);\" class=\"list-group-item d-inline-block\">Search</a>\n                                  <a href=\"javasctipt:void(0);\" class=\"list-group-item d-inline-block\">Reviews</a>\n                          \n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.toggleAccordian = function (targetId) {
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#tabsJustifiedContent>div.active").removeClass("active");
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#tabsJustifiedContent>div.show").removeClass("show");
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#" + targetId).addClass("active");
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#" + targetId).addClass("show");
        };
        this.addActiveClas = function (targetId) {
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#tabsJustified>li>a.active").removeClass("active");
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#" + targetId).addClass("active");
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/release-management/add-release/add-files/add-files.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 30px;\r\n}\r\n.nav-tabs .nav-link {\r\n    border: 1px solid transparent;\r\n    border-top-left-radius: 0.25rem;\r\n    border-top-right-radius: 0.25rem;\r\n    background: #33b5e5;\r\n    color: #fff;\r\n    margin-right: 2px;\r\n}\r\n.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {\r\n    color: #ffffff;\r\n    background: #178ab4;\r\n    border-color: #dee2e6 #dee2e6 #fff;\r\n}\r\n.list-group-item{\r\n    background: rgba(51, 181, 229, 0.2);\r\n    color: #178ab4;\r\n}\r\n.release-manage-tbl{\r\n    margin-top: 30px;\r\n}\r\n.release-manage-container .row{\r\n    margin-bottom: 15px;\r\n}\r\n.release-manage-container .col-md-4{\r\n    text-align: right;\r\n    font-weight: bold;\r\n}\r\n.btn-action-section{\r\n    margin-top: 30px;\r\n    text-align: center;\r\n}\r\n.btn-action-section div{\r\n    margin-top: 20px;\r\n}\r\n.file-browse-container{\r\n    padding: 30px;\r\n    border:1px solid #ccc;\r\n}\r\n.file-browse-container h3{\r\n    text-align: center;\r\n    color: #33b5e5;\r\n    font-size: 22px;\r\n    margin-bottom: 20px;\r\n}\r\n.breadcrumbs{\r\n    margin-bottom: 20px;\r\n    color: #ccc;\r\n}\r\n.breadcrumbs a{\r\n    color: #33b5e5;\r\n}\r\n.file-browse-container ul{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    list-style: none;\r\n}\r\n.file-browse-container ul li{\r\n    margin-bottom:20px; \r\n}\r\n.file-browse-container ul li label{\r\n    margin-left:15px; \r\n}\r\n.file-browse-container ul li label i{\r\n    margin-right:5px; \r\n}\r\n.left-navigation{\r\n    padding: 0px 0px;\r\n    margin: 0px -15px;\r\n}\r\n.left-navigation ul, .left-navigation ul li{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    list-style: none;\r\n}\r\n.left-navigation ul li a{\r\n    padding: 10px 20px;\r\n    background: #f0f0f0;\r\n    width: 100%;\r\n    display: inline-block;\r\n    margin-bottom: 2px;\r\n    color: #33b5e5;\r\n    text-decoration: none;\r\n}\r\n.left-navigation ul li a:hover, .left-navigation ul li a.active{\r\n    background: #007bff;\r\n    color: #ffffff;\r\n}"

/***/ }),

/***/ "./src/app/release-management/add-release/add-files/add-files.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container py-4\">\n        <div class=\"row\">\n                <div class=\"col-md-3\">\n                        <nav class=\"left-navigation\">\n                            <ul>\n                                <li><a [routerLink]=\"['browseFiles']\" routerLinkActive=\"active\">Add Files By Location</a></li>\n                                <li><a [routerLink]=\"['filesByCommit']\" routerLinkActive=\"active\" >Add Files By Commit</a></li>\n                                <li><a [routerLink]=\"['existingRelease']\" routerLinkActive=\"active\" >Add Files By Existing Release</a></li>\n                            </ul>\n                        </nav>\n                </div>\n       \n                <div class=\"col-md-9\">\n                    <router-outlet></router-outlet>\n                </div>\n        </div>\n\n</section>\n\n<!-- <section>\n    <div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"col-sm-3\">\n            <h2>Add Files</h2>\n            <ul class=\"nav navbar-nav\">\n                    <li><a [routerLink]=\"['browseFiles']\" routerLinkActive=\"active\">Add Files By Location</a></li>\n                    <li><a [routerLink]=\"['existingRelease']\">Add Files By Commit</a></li>\n            </ul>\n        </div>\n\n        <div class=\"col-sm-9\">\n                <router-outlet></router-outlet>\n        </div>\n     </div>    \n    </div>\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n              \n          <div class=\"addfile-container\">\n                  <h2>Add Files</h2>\n              <div class=\"addfile-card\">\n                  <i class=\"fas fa-file-medical fa-4x\"></i>\n                  <h3>Add Files By Commit</h3>                   \n              </div>\n              <div class=\"addfile-card\">\n\n                  <a href=\"/browseFiles\">\n                      <i class=\"fas fa-map-marker fa-4x\"></i>\n                      <h3>Add Files By Location</h3>\n                    </a>\n                  </div>\n                  <div class=\"addfile-card\">\n                          <i class=\"fas fa-sign-out-alt fa-4x\"></i>\n                          <h3>Add Files By Existing Release</h3>\n                      </div>\n          </div>\n         \n      </div>\n  </div> \n</section> -->\n\n"

/***/ }),

/***/ "./src/app/release-management/add-release/add-files/add-files.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Router,ActivatedRoute } from '@angular/router';
var AddFilesComponent = /** @class */ (function () {
    function AddFilesComponent() {
    }
    AddFilesComponent.prototype.ngOnInit = function () {
    };
    AddFilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-files',
            template: __webpack_require__("./src/app/release-management/add-release/add-files/add-files.component.html"),
            styles: [__webpack_require__("./src/app/release-management/add-release/add-files/add-files.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddFilesComponent);
    return AddFilesComponent;
}());



/***/ }),

/***/ "./src/app/release-management/add-release/add-release.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.container{\r\n    margin-top: 30px;\r\n}\r\n.nav-tabs .nav-link {\r\n    border: 1px solid transparent;\r\n    border-top-left-radius: 0.25rem;\r\n    border-top-right-radius: 0.25rem;\r\n    background: #33b5e5;\r\n    color: #fff;\r\n    margin-right: 2px;\r\n}\r\n.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {\r\n    color: #ffffff;\r\n    background: #178ab4;\r\n    border-color: #dee2e6 #dee2e6 #fff;\r\n}\r\n.list-group-item{\r\n    background: rgba(51, 181, 229, 0.2);\r\n    color: #178ab4;\r\n}\r\n.release-manage-tbl{\r\n    margin-top: 30px;\r\n}\r\n.release-manage-container .row{\r\n    margin-bottom: 15px;\r\n}\r\n.release-manage-container .col-md-4{\r\n    text-align: right;\r\n    font-weight: bold;\r\n}\r\n.btn-action-section{\r\n    margin-top: 30px;\r\n    text-align: center;\r\n}\r\n.btn-action-section div{\r\n    margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/release-management/add-release/add-release.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container py-4\">\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n         \n          <ul id=\"tabsJustified\" class=\"nav nav-tabs\">\n              <li class=\"nav-item\"><a href=\"javasctipt:void(0);\" id=\"releaseAccId\" (click)=\"toggleAccordian('relaseId');addActiveClas('releaseAccId');\"  class=\"nav-link small text-uppercase active\">Release Management</a></li>\n              <li class=\"nav-item\"><a href=\"javasctipt:void(0);\" id=\"pubAccId\" (click)=\"toggleAccordian('publicationId');addActiveClas('pubAccId');\" class=\"nav-link small text-uppercase\">Site Management</a></li>\n              <li class=\"nav-item\"><a href=\"javasctipt:void(0);\" id=\"configAccId\" (click)=\"toggleAccordian('configurationId');addActiveClas('configAccId');\"  class=\"nav-link small text-uppercase\">Configuration</a></li>\n          </ul>\n          <br>\n          <div id=\"tabsJustifiedContent\" class=\"tab-content\">\n              <div id=\"relaseId\" class=\"tab-pane fade active show release-manage-container\">\n                  <div class=\"row \"> \n                      <div class=\"col-md-4\">Release Name:</div>\n                      <div class=\"col-md-8\"><input type=\"text\" [(ngModel)]=\"releaseName\"/></div>\n                  </div>\n                  <div class=\"row \"> \n                      <div class=\"col-md-4\">Comment:</div>\n                      <div class=\"col-md-8\"><input type=\"text\" [(ngModel)]=\"comment\"/></div>\n                  </div>\n                  <div class=\"row\">\n                          <div class=\"col-md-4\">Created By:</div>\n                          <div class=\"col-md-8\">Author Name</div>\n                      </div>\n                      <div class=\"row\">\n                              <div class=\"col-md-4\">Created Dte:</div>\n                              <div class=\"col-md-8\">{{currentDate | date: 'MM/dd/yyyy hh:mm a'}}</div>\n                       </div>\n                          <div class=\"row\">\n                                  <div class=\"col-md-4\">Files:</div>\n                                  <div class=\"col-md-8\"></div>\n                              </div>\n\n                      <div class=\"release-manage-tbl\">\n\n                              <table class=\"table\">\n                                      <thead>\n                                        <tr>\n                                          <th>File Name</th>\n                                          <th>Modified By</th>\n                                          <th>Modified Date</th>\n                                          <th>Message</th>\n                                          <th></th>\n                                        </tr>\n                                      </thead>\n                                      <tbody>\n\n                                        <tr *ngFor=\"let sel of selectedFiles\">\n                                            <td>{{sel.name}}</td>\n                                            <td>{{sel.authorName}}</td>\n                                            <td>{{sel.modifiedDate}}</td>\n                                            <td>{{sel.message}}</td>\n                                            <td><i class=\"fas fa-times-circle\"></i></td>\n                                        </tr>\n                                      </tbody>\n                                    </table>\n                                   \n                      </div>\n                      <div class=\"btn-action-section\">\n                              <a href=\"#/addFiles\">Add Files</a>\n                              <div>\n                                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"createRelease()\">Create</button>\n                                  <button type=\"button\" class=\"btn btn-info\">Cancel</button>\n                              </div>\n                      </div>\n                  \n              </div>\n              <div id=\"publicationId\" class=\"tab-pane fade\">\n                  <div class=\"list-group\">\n                         \n                              <a href=\"javasctipt:void(0);\" class=\"list-group-item d-inline-block\">Staging</a>\n                              <a href=\"javasctipt:void(0);\" class=\"list-group-item d-inline-block\">Production</a>\n                          \n                  </div>\n              </div>\n              <div id=\"configurationId\" class=\"tab-pane fade\">\n                  <div class=\"list-group\">\n                          \n                                  <a href=\"javasctipt:void(0);\" class=\"list-group-item d-inline-block\">Audiences</a>\n                                  <a href=\"javasctipt:void(0);\" class=\"list-group-item d-inline-block\">Search</a>\n                                  <a href=\"javasctipt:void(0);\" class=\"list-group-item d-inline-block\">Reviews</a>\n                          \n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/release-management/add-release/add-release.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddReleaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_jgit_service__ = __webpack_require__("./src/app/shared/service/jgit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_release_service__ = __webpack_require__("./src/app/shared/service/release.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddReleaseComponent = /** @class */ (function () {
    function AddReleaseComponent(jgitService, releaseSer) {
        this.jgitService = jgitService;
        this.releaseSer = releaseSer;
        this.currentDate = new Date();
        this.toggleAccordian = function (targetId) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__("#tabsJustifiedContent>div.active").removeClass("active");
            __WEBPACK_IMPORTED_MODULE_3_jquery__("#tabsJustifiedContent>div.show").removeClass("show");
            __WEBPACK_IMPORTED_MODULE_3_jquery__("#" + targetId).addClass("active");
            __WEBPACK_IMPORTED_MODULE_3_jquery__("#" + targetId).addClass("show");
        };
        this.addActiveClas = function (targetId) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__("#tabsJustified>li>a.active").removeClass("active");
            __WEBPACK_IMPORTED_MODULE_3_jquery__("#" + targetId).addClass("active");
        };
    }
    AddReleaseComponent.prototype.ngOnInit = function () {
        this.selectedFiles = this.jgitService.fetchSelectedFiles();
        console.log("INIT METHOD OF AddReleaseComponent::::" + this.selectedFiles.length);
    };
    AddReleaseComponent.prototype.createRelease = function () {
        var _this = this;
        console.log("createRelease METHOD OF AddReleaseComponent::::");
        this.releaseObj = {
            releasename: this.releaseName,
            comment: this.comment,
            createdBy: "test",
            createdDate: new Date(),
            selectedFilesList: this.selectedFiles
        };
        this.releaseSer.createRelease(this.releaseObj).subscribe(function (b) { return _this.res = b; });
        ;
    };
    AddReleaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-release',
            template: __webpack_require__("./src/app/release-management/add-release/add-release.component.html"),
            styles: [__webpack_require__("./src/app/release-management/add-release/add-release.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_jgit_service__["a" /* JgitService */], __WEBPACK_IMPORTED_MODULE_2__shared_service_release_service__["a" /* ReleaseService */]])
    ], AddReleaseComponent);
    return AddReleaseComponent;
}());



/***/ }),

/***/ "./src/app/release-management/add-release/browse-files/browse-files.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 30px;\r\n}\r\n.nav-tabs .nav-link {\r\n    border: 1px solid transparent;\r\n    border-top-left-radius: 0.25rem;\r\n    border-top-right-radius: 0.25rem;\r\n    background: #33b5e5;\r\n    color: #fff;\r\n    margin-right: 2px;\r\n}\r\n.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {\r\n    color: #ffffff;\r\n    background: #178ab4;\r\n    border-color: #dee2e6 #dee2e6 #fff;\r\n}\r\n.list-group-item{\r\n    background: rgba(51, 181, 229, 0.2);\r\n    color: #178ab4;\r\n}\r\n.release-manage-tbl{\r\n    margin-top: 30px;\r\n}\r\n.release-manage-container .row{\r\n    margin-bottom: 15px;\r\n}\r\n.release-manage-container .col-md-4{\r\n    text-align: right;\r\n    font-weight: bold;\r\n}\r\n.btn-action-section{\r\n    margin-top: 30px;\r\n    text-align: center;\r\n}\r\n.btn-action-section div{\r\n    margin-top: 20px;\r\n}\r\n.file-browse-container{\r\n    padding: 30px;\r\n    border:1px solid #ccc;\r\n}\r\n.file-browse-container h3{\r\n    text-align: center;\r\n    color: #33b5e5;\r\n    font-size: 22px;\r\n    margin-bottom: 20px;\r\n}\r\n.breadcrumbs{\r\n    margin-bottom: 20px;\r\n    color: #ccc;\r\n}\r\n.breadcrumbs a{\r\n    color: #33b5e5;\r\n}\r\n.file-browse-container ul{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    list-style: none;\r\n}\r\n.file-browse-container ul li{\r\n    margin-bottom:20px; \r\n}\r\n.file-browse-container ul li label{\r\n    margin-left:15px; \r\n}\r\n.file-browse-container ul li label i{\r\n    margin-right:5px; \r\n}\r\n.left-navigation{\r\n    padding: 0px 0px;\r\n    margin: 0px -15px;\r\n}\r\n.left-navigation ul, .left-navigation ul li{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    list-style: none;\r\n}\r\n.left-navigation ul li a{\r\n    padding: 10px 20px;\r\n    background: #f0f0f0;\r\n    width: 100%;\r\n    display: inline-block;\r\n    margin-bottom: 2px;\r\n    color: #33b5e5;\r\n    text-decoration: none;\r\n}\r\n.left-navigation ul li a:hover, .left-navigation ul li a.active{\r\n    background: #007bff;\r\n    color: #ffffff;\r\n}\r\n.file-browse-container ul li label span, .file-browse-container ul li input{\r\n    margin-right: 10px;\r\n}"

/***/ }),

/***/ "./src/app/release-management/add-release/browse-files/browse-files.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n<div class=\"col-md-7\">\n<div id=\"tabsJustifiedContent\" class=\"tab-content\">\n        <div id=\"relaseId\" class=\"tab-pane fade active show release-manage-container\">\n            \n            <div class=\"file-browse-container\">\n                <h3>Browse</h3>\n                <div class=\"breadcrumbs\">\n                        <label  *ngFor=\"let bd of breadCrumbList; let i = index\">\n                           <a (click)=\"goToDirectory(bd.path,bd.name,bd.order); removeElements(i);\" href=\"javascript:void(0);\">&nbsp;{{bd.name}} {{bd.order}}</a> \n                           <label>/</label>\n                        </label>\n                    </div>\n                \n                <ul>\n                    \n                        <li *ngFor=\"let file of filesList\">\n                                <i class=\"glyphicon glyphicon-ok\"></i>\n                                <label *ngIf=\"file.directory\">\n                                    <i class=\"fa fa-folder-open fa-2x\"  aria-hidden=\"true\"></i> \n                                    <a (click)=\"goToDirectory(file.path,file.name);\" href=\"javascript:void(0);\">\n                                        {{file.name}}\n                                    </a>\n                                </label>\n                                <input type=\"checkbox\" [(ngModel)]=\"file.selected\" *ngIf=\"!file.directory\">\n                                <label *ngIf=\"!file.directory\"><i class=\"fa fa-file-code fa-2x\" aria-hidden=\"true\"></i>{{file.name}}</label>\n                        </li>\n                </ul>\n                <div class=\"btn-action-section\">\n                        <div>\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"addSelectedFiles()\">Add</button>\n                                <button type=\"button\" class=\"btn btn-info\" (click)=\"redirectToRelease()\">Cancel</button>\n                        </div>\n                </div>\n            </div>\n        </div>\n</div>\n</div>\n\n    <div class=\"col-md-5 file-browse-container\">\n            <h3>Selected Files</h3>\n            <div class=\"release-manage-tbl\">\n                    \n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>File Name</th>\n                            <th>File Path</th>\n                            <th>Remove</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let sel of selectedFilesList; let idx = index\">\n                            <td>{{sel.name}}</td>\n                            <td>{{sel.path}}</td>\n                            <td><i class=\"fas fa-times-circle\" (click)=\"removeFileFromList(idx,sel.path)\"></i></td>\n                        </tr>\n                    </tbody>\n                </table>\n             </div>\n\n             <div class=\"btn-action-section\">\n                    <div>\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"redirectToRelease()\">Ok</button>\n                        <button type=\"button\" class=\"btn btn-info\" (click)=\"redirectToRelease()\">Cancel</button>\n                    </div>\n            </div>\n    </div>\n</div>\n\n<!-- <section class=\"container py-4\">\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div id=\"tabsJustifiedContent\" class=\"tab-content\">\n              <div id=\"relaseId\" class=\"tab-pane fade active show release-manage-container\">\n                  \n                  <div class=\"file-browse-container\">\n                      <h3>Browse</h3>\n                      <div class=\"breadcrumbs\">\n                          <label  *ngFor=\"let bd of breadCrumbList; let i = index\">\n                             <a (click)=\"goToDirectory(bd.path,bd.name,bd.order); removeElements(i);\" href=\"javascript:void(0);\">&nbsp;{{bd.name}} {{bd.order}}</a> \n                             <label>/</label>\n                          </label>\n                      </div>\n                      <ul>\n                            <li *ngFor=\"let file of filesList\">\n                                    <i class=\"glyphicon glyphicon-ok\"></i>\n                                    <label *ngIf=\"file.directory\">\n                                        <span style=\"height: 80px;width: 30px;\">\n                                            <img style=\"max-width: 15%; max-height: 50%;\"  src=\"../../../../assets/images/folder.png\"/>\n                                        </span>\n                                        <a (click)=\"goToDirectory(file.path,file.name);\" href=\"javascript:void(0);\">\n                                            {{file.name}}\n                                        </a>\n                                    </label>\n                                    <input type=\"checkbox\" [(ngModel)]=\"file.selected\" *ngIf=\"!file.directory\">\n                                    <label *ngIf=\"!file.directory\">{{file.name}}</label>\n                            </li>\n\n                      </ul>\n                      \n                      \n                      <div class=\"btn-action-section\">\n                              <div>\n                                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"addSelectedFiles()\">Add</button>\n                                  <button type=\"button\" class=\"btn btn-info\" (click)=\"cancel()\">Cancel</button>\n                              </div>\n                      </div>\n                  </div>\n                </div>\n            </div>\n      </div>\n  </div>\n</section>\n\n<section>\n        <h2>Selected Files :</h2>\n        <div class=\"release-manage-tbl\">\n\n                <table class=\"table\">\n                        <thead>\n                          <tr>\n                            <th>File Name</th>\n                            <th>File Path</th>\n                            <th></th>\n                          </tr>\n                        </thead>\n                        <tbody>\n\n                          <tr *ngFor=\"let sel of selectedFilesList\">\n                              <td>{{sel.name}}</td>\n                              <td>{{sel.path}}</td>\n                              <td><span class=\"glyphicon glyphicon-remove\"></span></td>\n                          </tr>\n                        </tbody>\n                      </table>\n                     \n        </div>\n\n        <div class=\"btn-action-section\">\n                <div>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"redirectToRelease()\">Ok</button>\n                    <button type=\"button\" class=\"btn btn-info\" (click)=\"cancel()\">Cancel</button>\n                </div>\n        </div>\n</section> -->"

/***/ }),

/***/ "./src/app/release-management/add-release/browse-files/browse-files.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseFilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_jgit_service__ = __webpack_require__("./src/app/shared/service/jgit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrowseFilesComponent = /** @class */ (function () {
    function BrowseFilesComponent(jgitService, _route) {
        this.jgitService = jgitService;
        this._route = _route;
        this.breadCrumbList = [];
        this.selectedFilesList = [];
    }
    BrowseFilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ng on init method of browse file component" + this.selectedFilesList.length);
        this.breadCrumbList = [{ name: "Root", path: "Root" }];
        this.jgitService.fetchFilesAndFolders().subscribe(function (b) { return _this.filesList = b; });
    };
    BrowseFilesComponent.prototype.goToDirectory = function (path, name, order) {
        var _this = this;
        var result = this.breadCrumbList.find(function (breadcrumb) { return breadcrumb.name === name; });
        console.log("resut is :::" + result);
        if (result == undefined) {
            console.log("maxOrderresut is :::" + result);
            this.breadCrumbList.push({ name: name, path: path });
        }
        if (name != "Root") {
            this.jgitService.fetchFilesAndFoldersInSubDirectory(path).subscribe(function (b) { return _this.filesList = b; });
        }
        else {
            this.jgitService.fetchFilesAndFolders().subscribe(function (b) { return _this.filesList = b; });
        }
    };
    BrowseFilesComponent.prototype.removeElements = function (index) {
        console.log("indexis :::" + index);
        if (this.breadCrumbList.length > 0) {
            this.breadCrumbList.length = index + 1;
        }
    };
    BrowseFilesComponent.prototype.addSelectedFiles = function () {
        console.log("selected::::::" + JSON.stringify(this.filesList));
        if (this.filesList.length > 0) {
            for (var i = 0; i < this.filesList.length; i++) {
                var fileObj = this.filesList[i];
                if (fileObj.selected && !fileObj.isAdded) {
                    fileObj.isAdded = true;
                    this.jgitService.addSelectedFilesToList(fileObj);
                    this.selectedFilesList.push(fileObj);
                }
            }
        }
    };
    BrowseFilesComponent.prototype.cancel = function () {
        console.log("navigating to add files");
        this._route.navigate(["/addFiles"]);
    };
    BrowseFilesComponent.prototype.redirectToRelease = function () {
        console.log("navigating to add files");
        this._route.navigate(["/addRelease"]);
    };
    BrowseFilesComponent.prototype.removeFileFromList = function (index, path) {
        this.jgitService.removeItemFromList(index);
        this.selectedFilesList.splice(index, 1);
        for (var i = 0; i < this.filesList.length; i++) {
            var fileObj = this.filesList[i];
            if (path == fileObj.path) {
                fileObj.isAdded = false;
                fileObj.selected = false;
            }
        }
    };
    BrowseFilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-browse-files',
            template: __webpack_require__("./src/app/release-management/add-release/browse-files/browse-files.component.html"),
            styles: [__webpack_require__("./src/app/release-management/add-release/browse-files/browse-files.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_jgit_service__["a" /* JgitService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], BrowseFilesComponent);
    return BrowseFilesComponent;
}());



/***/ }),

/***/ "./src/app/release-management/add-release/browse-files/files-by-commit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n    <div class=\"col-md-5\">\n    <div id=\"tabsJustifiedContent\" class=\"tab-content\">\n            <div id=\"relaseId\" class=\"tab-pane fade active show release-manage-container\">\n                \n                <div class=\"file-browse-container\">\n                        <div>\n                                <h3>Select Dates</h3>\n                                <div class=\"row \"> \n                                    <div class=\"col-md-4\">From:</div>\n                                    <div class=\"col-md-8\"><input type=\"text\" [(ngModel)]=\"fromDate\"/></div>\n                                </div>\n                                <div class=\"row \"> \n                                    <div class=\"col-md-4\">To:</div>\n                                    <div class=\"col-md-8\"><input type=\"text\" [(ngModel)]=\"toDate\"/></div>\n                                </div>\n\n                                <div class=\"btn-action-section\">\n                                        <div>\n                                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"fetchFilesByDate()\">Filter</button>\n                                            <button type=\"button\" class=\"btn btn-info\">Reset</button>\n                                        </div>\n                                </div>\n                        </div>\n                    \n                   \n                    <!-- <h3>Select Files</h3> -->\n                    <ul>\n                            <li *ngFor=\"let commit of commitsList\">\n                                    <!-- <i class=\"glyphicon glyphicon-ok\"></i> -->\n                                    <!-- <input type=\"checkbox\" [(ngModel)]=\"file.selected\" *ngIf=\"!file.directory\"> -->\n                                    <a href=\"javascript:void(0);\" (click)=\"fetchFilesInCommit(commit.name)\"><i class=\"fa fa-archive\" aria-hidden=\"true\"></i> {{commit.authorName}}</a>\n                            </li>\n                            <li *ngIf=\"commitsList != undefined && commitsList.length == 0\">\n                                <label>No Files Available for the applied filter</label>\n                            </li>\n                    </ul>\n                    <!-- <div class=\"btn-action-section\">\n                            <div>\n                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addSelectedFiles()\">Add</button>\n                                    <button type=\"button\" class=\"btn btn-info\" (click)=\"redirectToRelease()\">Cancel</button>\n                            </div>\n                    </div> -->\n                </div>\n            </div>\n    </div>\n    </div>\n\n    <div class=\"col-md-3\">\n        <div class=\"file-browse-container\">\n            <h3>Select Files</h3> \n            <ul>\n                    <li *ngFor=\"let file of filesList\">\n                            <input type=\"checkbox\" [(ngModel)]=\"file.selected\" *ngIf=\"!file.directory\"> \n                            <label><i class=\"fa fa-file-code fa-2x\" aria-hidden=\"true\"></i> {{file.name}}</label>\n                    </li>\n                    <li *ngIf=\"commitsList != undefined && commitsList.length == 0\">\n                        <label>No Files Available for the applied filter</label>\n                    </li>\n            </ul>\n            <div class=\"btn-action-section\">\n                    <div>\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"addSelectedFiles()\">Add</button>\n                            <button type=\"button\" class=\"btn btn-info\" (click)=\"redirectToRelease()\">Cancel</button>\n                    </div>\n            </div>\n        </div>\n    </div>\n    \n        <div class=\"col-md-4 file-browse-container\">\n                <h3>Selected Files</h3>\n                <div class=\"release-manage-tbl\">\n                        \n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>File Path</th>\n                                <th>X</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let sel of selectedFilesList; let idx = index\">\n                                <td>{{sel.path}}</td>\n                                <td><i class=\"fas fa-times-circle\" (click)=\"removeFileFromList(idx,sel.path)\"></i></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                 </div>\n    \n                 <div class=\"btn-action-section\">\n                        <div>\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"redirectToRelease()\">Ok</button>\n                            <button type=\"button\" class=\"btn btn-info\" (click)=\"redirectToRelease()\">Cancel</button>\n                        </div>\n                </div>\n        </div>\n\n\n    </div>"

/***/ }),

/***/ "./src/app/release-management/add-release/browse-files/files-by-commit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesByCommit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_jgit_service__ = __webpack_require__("./src/app/shared/service/jgit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilesByCommit = /** @class */ (function () {
    function FilesByCommit(jgitService, _route) {
        this.jgitService = jgitService;
        this._route = _route;
        this.selectedFilesList = [];
    }
    FilesByCommit.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ng on init method of browse file component" + this.selectedFilesList.length);
        this.fromDate = "";
        this.toDate = "";
        this.jgitService.fetchFilesByCommit(this.fromDate, this.toDate).subscribe(function (b) { return _this.commitsList = b; });
    };
    FilesByCommit.prototype.addSelectedFiles = function () {
        console.log("selected::::::" + JSON.stringify(this.filesList));
        if (this.filesList.length > 0) {
            for (var i = 0; i < this.filesList.length; i++) {
                var fileObj = this.filesList[i];
                if (fileObj.selected && !fileObj.isAdded) {
                    fileObj.isAdded = true;
                    this.jgitService.addSelectedFilesToList(fileObj);
                    this.selectedFilesList.push(fileObj);
                }
            }
        }
    };
    FilesByCommit.prototype.redirectToRelease = function () {
        console.log("navigating to add files");
        this._route.navigate(["/addRelease"]);
    };
    FilesByCommit.prototype.removeFileFromList = function (index, path) {
        this.jgitService.removeItemFromList(index);
        this.selectedFilesList.splice(index, 1);
        for (var i = 0; i < this.filesList.length; i++) {
            var fileObj = this.filesList[i];
            if (path == fileObj.path) {
                fileObj.isAdded = false;
                fileObj.selected = false;
            }
        }
    };
    FilesByCommit.prototype.fetchFilesByDate = function () {
        var _this = this;
        console.log("Inside fetchFilesByDate ::::::" + this.fromDate + ":::::" + this.toDate);
        this.jgitService.fetchFilesByCommit(this.fromDate, this.toDate).subscribe(function (b) { return _this.commitsList = b; });
    };
    FilesByCommit.prototype.fetchFilesInCommit = function (name) {
        var _this = this;
        this.jgitService.fetchFilesInACommit(name).subscribe(function (b) { return _this.filesList = b; });
    };
    FilesByCommit = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-files-by-commit',
            template: __webpack_require__("./src/app/release-management/add-release/browse-files/files-by-commit.component.html"),
            styles: [__webpack_require__("./src/app/release-management/add-release/browse-files/browse-files.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_jgit_service__["a" /* JgitService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], FilesByCommit);
    return FilesByCommit;
}());



/***/ }),

/***/ "./src/app/release-management/existing-release/existing-release.component.css":
/***/ (function(module, exports) {

module.exports = "\r\na{\r\n    color: #33b5e5;    \r\n}\r\n\r\n.container{\r\n    margin-top: 30px;\r\n}\r\n\r\n.nav-tabs .nav-link {\r\n    border: 1px solid transparent;\r\n    border-top-left-radius: 0.25rem;\r\n    border-top-right-radius: 0.25rem;\r\n    background: #33b5e5;\r\n    color: #fff;\r\n    margin-right: 2px;\r\n}\r\n\r\n.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {\r\n    color: #ffffff;\r\n    background: #178ab4;\r\n    border-color: #dee2e6 #dee2e6 #fff;\r\n}\r\n\r\n.list-group-item{\r\n    background: rgba(51, 181, 229, 0.2);\r\n    color: #178ab4;\r\n}\r\n\r\n.release-manage-tbl{\r\n    margin-top: 30px;\r\n}\r\n\r\n.release-manage-container .row{\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.release-manage-container h3{\r\n    margin: 30px 0px;\r\n    color: #33b5e5;\r\n    font-size: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.release-manage-container .col-md-2{\r\n    text-align: right;\r\n    font-weight: bold;\r\n}\r\n\r\n.btn-action-section{\r\n    margin-top: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.btn-action-section div{\r\n    margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/release-management/existing-release/existing-release.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container py-4\">\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n         \n          <ul id=\"tabsJustified\" class=\"nav nav-tabs\">\n              <li class=\"nav-item\"><a href=\"javasctipt:void(0);\" id=\"releaseAccId\" (click)=\"toggleAccordian('relaseId');addActiveClas('releaseAccId');\"  class=\"nav-link small text-uppercase active\">Release Management</a></li>\n              <li class=\"nav-item\"><a href=\"javasctipt:void(0);\" id=\"pubAccId\" (click)=\"toggleAccordian('publicationId');addActiveClas('pubAccId');\" class=\"nav-link small text-uppercase\">Publication Management</a></li>\n              <li class=\"nav-item\"><a href=\"javasctipt:void(0);\" id=\"configAccId\" (click)=\"toggleAccordian('configurationId');addActiveClas('configAccId');\"  class=\"nav-link small text-uppercase\">Configuration</a></li>\n          </ul>\n          <br>\n          <div id=\"tabsJustifiedContent\" class=\"tab-content\">\n              <div id=\"relaseId\" class=\"tab-pane fade active show release-manage-container\">\n                  <h3>Release List</h3>\n                  <div class=\"row \"> \n                      <div class=\"col-md-2\">Status:</div>\n                      <div class=\"col-md-2\">\n                          <select class=\"form-control\">\n                              <option>Created</option>\n                              <option>Pending</option>\n                          </select></div>\n                       </div>\n                      <div class=\"release-manage-tbl\">\n\n                              <table class=\"table\">\n                                      <thead>\n                                        <tr>\n                                          <th>Release Name</th>\n                                          <th>Created By</th>\n                                          <th>Created Date</th>\n                                          <th>Status</th>\n                                          <th>Action</th>\n                                        </tr>\n                                      </thead>\n                                      <tbody>\n                                        <tr>\n                                          <td>file name</td>\n                                          <td>Author name</td>\n                                          <td>4/6/2018</td>\n                                          <td>Created</td>\n                                          <td><a href=\"#\">Start</a></td>\n                                        </tr>\n                                        <tr>\n                                          <td>file name</td>\n                                          <td>Author name</td>\n                                          <td>4/6/2018</td>\n                                          <td>Created</td>\n                                          <td><a href=\"#\">Start</a></td>\n                                        </tr>\n                                        <tr>\n                                          <td>file name</td>\n                                          <td>Author name</td>\n                                          <td>4/6/2018</td>\n                                          <td>Created</td>\n                                          <td><a href=\"#\">Start</a></td>\n                                        </tr>\n                                      </tbody>\n                                    </table>\n                                   \n                      </div>\n                  \n              </div>\n              <div id=\"publicationId\" class=\"tab-pane fade\">\n                  <div class=\"list-group\">\n                         \n                              <a href=\"javasctipt:void(0);\" class=\"list-group-item d-inline-block\">Staging</a>\n                              <a href=\"javasctipt:void(0);\" class=\"list-group-item d-inline-block\">Production</a>\n                          \n                  </div>\n              </div>\n              <div id=\"configurationId\" class=\"tab-pane fade\">\n                  <div class=\"list-group\">\n                          \n                                  <a href=\"javasctipt:void(0);\" class=\"list-group-item d-inline-block\">Audiences</a>\n                                  <a href=\"javasctipt:void(0);\" class=\"list-group-item d-inline-block\">Search</a>\n                                  <a href=\"javasctipt:void(0);\" class=\"list-group-item d-inline-block\">Reviews</a>\n                          \n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/release-management/existing-release/existing-release.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExistingReleaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExistingReleaseComponent = /** @class */ (function () {
    function ExistingReleaseComponent() {
        this.toggleAccordian = function (targetId) {
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#tabsJustifiedContent>div.active").removeClass("active");
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#tabsJustifiedContent>div.show").removeClass("show");
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#" + targetId).addClass("active");
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#" + targetId).addClass("show");
        };
        this.addActiveClas = function (targetId) {
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#tabsJustified>li>a.active").removeClass("active");
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#" + targetId).addClass("active");
        };
    }
    ExistingReleaseComponent.prototype.ngOnInit = function () {
    };
    ExistingReleaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-existing-release',
            template: __webpack_require__("./src/app/release-management/existing-release/existing-release.component.html"),
            styles: [__webpack_require__("./src/app/release-management/existing-release/existing-release.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExistingReleaseComponent);
    return ExistingReleaseComponent;
}());



/***/ }),

/***/ "./src/app/release-management/release-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleasemanagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_release_add_release_component__ = __webpack_require__("./src/app/release-management/add-release/add-release.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_release_add_files_add_files_component__ = __webpack_require__("./src/app/release-management/add-release/add-files/add-files.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_release_browse_files_browse_files_component__ = __webpack_require__("./src/app/release-management/add-release/browse-files/browse-files.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__existing_release_existing_release_component__ = __webpack_require__("./src/app/release-management/existing-release/existing-release.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes_app_routes_module__ = __webpack_require__("./src/app/app-routes/app-routes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_release_browse_files_files_by_commit_component__ = __webpack_require__("./src/app/release-management/add-release/browse-files/files-by-commit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ReleasemanagementModule = /** @class */ (function () {
    function ReleasemanagementModule() {
    }
    ReleasemanagementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7__app_routes_app_routes_module__["a" /* AppRoutesModule */]
            ],
            providers: [],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__add_release_add_release_component__["a" /* AddReleaseComponent */], __WEBPACK_IMPORTED_MODULE_4__add_release_add_files_add_files_component__["a" /* AddFilesComponent */], __WEBPACK_IMPORTED_MODULE_5__add_release_browse_files_browse_files_component__["a" /* BrowseFilesComponent */], __WEBPACK_IMPORTED_MODULE_6__existing_release_existing_release_component__["a" /* ExistingReleaseComponent */], __WEBPACK_IMPORTED_MODULE_8__add_release_browse_files_files_by_commit_component__["a" /* FilesByCommit */]]
        })
    ], ReleasemanagementModule);
    return ReleasemanagementModule;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout__ = __webpack_require__("./src/app/shared/layout/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__layout__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__layout__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__shared_module__["a"]; });




/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "footer{\r\n    position: relative;\r\n    bottom: 0;\r\n    left: 0;\r\n    margin: 0px;\r\n    padding: 15px;\r\n    width: 100%;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    color: #fff;\r\n    border-top: 1px solid #ccc;\r\n}"

/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <p>Copyrights 2018</p>\n</footer>"

/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'layout-footer',
            template: __webpack_require__("./src/app/shared/layout/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/shared/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "header{\r\n    top: 0;\r\n    left: 0;\r\n    margin: 0px;\r\n    padding: 15px;\r\n    width: 100%;\r\n    background: #ffffff;\r\n    -webkit-box-shadow: 0px 6px 13px -11px rgba(0,0,0,0.75);\r\n            box-shadow: 0px 6px 13px -11px rgba(0,0,0,0.75);\r\n}\r\n\r\nheader h2{\r\n    font-size: 24px;\r\n    color: #33b5e5\r\n}"

/***/ }),

/***/ "./src/app/shared/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <h2>E Manuals Admin</h2>\n</header>"

/***/ }),

/***/ "./src/app/shared/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'layout-header',
            template: __webpack_require__("./src/app/shared/layout/header/header.component.html"),
            styles: [__webpack_require__("./src/app/shared/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_footer_component__ = __webpack_require__("./src/app/shared/layout/footer/footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__footer_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_component__ = __webpack_require__("./src/app/shared/layout/header/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__header_header_component__["a"]; });




/***/ }),

/***/ "./src/app/shared/service/jgit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JgitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JgitService = /** @class */ (function () {
    function JgitService(_http) {
        this._http = _http;
        this.selectedFilesList = [];
    }
    JgitService_1 = JgitService;
    JgitService.prototype.fetchFilesAndFolders = function () {
        console.log("fetchFilesAndFolders method of JgitService" + JgitService_1.API_URL);
        return this._http.get(JgitService_1.API_URL + "ReadFiles/listFiles?path=");
    };
    JgitService.prototype.fetchFilesAndFoldersInSubDirectory = function (path) {
        console.log("fetchFilesAndFolders method of JgitService" + JgitService_1.API_URL);
        return this._http.get(JgitService_1.API_URL + "ReadFiles/listFiles?path=" + path);
    };
    JgitService.prototype.addSelectedFilesToList = function (fileObj) {
        console.log("addSelectedFilesToList of jgit service called:::::");
        this.selectedFilesList.push(fileObj);
        console.log("addSelectedFilesToList list:::::" + this.selectedFilesList.length);
    };
    JgitService.prototype.fetchSelectedFiles = function () {
        console.log("fetchSelectedFiles of jgit service called:::::" + this.selectedFilesList.length);
        return this.selectedFilesList;
    };
    JgitService.prototype.removeItemFromList = function (index) {
        this.selectedFilesList.splice(index, 1);
    };
    JgitService.prototype.fetchFilesByCommit = function (fromDate, toDate) {
        console.log("fetchFilesByCommit method of JgitService" + JgitService_1.API_URL);
        return this._http.get(JgitService_1.API_URL + "ReadFiles/listCommits?fromDate=" + fromDate + "&toDate=" + toDate);
    };
    JgitService.prototype.fetchFilesInACommit = function (name) {
        console.log("fetchFilesInACommit method of JgitService" + JgitService_1.API_URL);
        return this._http.get(JgitService_1.API_URL + "ReadFiles/listFilesInCommit?name=" + name);
    };
    JgitService.API_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_URL; //"http://localhost:9090/";
    JgitService = JgitService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], JgitService);
    return JgitService;
    var JgitService_1;
}());



/***/ }),

/***/ "./src/app/shared/service/release.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReleaseService = /** @class */ (function () {
    function ReleaseService(_http) {
        this._http = _http;
    }
    ReleaseService_1 = ReleaseService;
    ReleaseService.prototype.createRelease = function (release) {
        console.log("inside createRelease:::::" + release);
        var url = ReleaseService_1.API_URL + "Release/createRelease";
        return this._http.post(url, release);
    };
    ReleaseService.API_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_URL;
    ReleaseService = ReleaseService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ReleaseService);
    return ReleaseService;
    var ReleaseService_1;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5____ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5____["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5____["b" /* HeaderComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5____["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5____["b" /* HeaderComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    API_URL: 'http://localhost:9090/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map