(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");



class AppComponent {
    constructor() {
        this.title = 'krishnasite';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-homepage");
    } }, directives: [_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function HomepageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hello, I'm Sai Krishna Raghunathan.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pre", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "I enjoy designing anything and everything\n         a human can imagine.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Actively working with Design, XR & AI | CXA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "TM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Certified.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "polygon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "circle", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "rect", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "circle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "margin-top": a0 }; };
function HomepageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hello, I'm Sai Krishna Raghunathan.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "I enjoy designing anything and everything");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "a human can imagine.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Actively working with Design, XR & AI | CXA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "TM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Certified.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_div_1_Template__svg_svg_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openurlinnewtab("https://medium.com/@magicofspade"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "polygon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "circle", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "rect", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "circle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r1.margintop + "px"));
} }
;
class HomepageComponent {
    constructor(deviceService) {
        this.deviceService = deviceService;
        this.isdesktop = false;
        this.bgcolor = "green";
        // this.displayWindowSize();
        this.getScreenSize();
        window.addEventListener("resize", () => {
            this.getScreenSize();
        });
        // this.deviceInfo = this.deviceService.getDeviceInfo();
        // const isMobile = this.deviceService.isMobile();
        // const isTablet = this.deviceService.isTablet();
        // this.isdesktop = this.deviceService.isDesktop();
        // console.log(this.deviceInfo);
        // console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
        // console.log(isTablet);  // returns if the device us a tablet (iPad etc)
        // console.log(this.isdesktop);
    }
    ngOnInit() {
    }
    openurlinnewtab(link) {
        window.open(link, "_blank");
    }
    displayWindowSize() {
        this.deviceInfo = this.deviceService.getDeviceInfo();
        const isMobile = this.deviceService.isMobile();
        const isTablet = this.deviceService.isTablet();
        this.isdesktop = this.deviceService.isDesktop();
        //console.log(this.deviceInfo);
        console.log(isMobile); // returns if the device is a mobile device (android / iPhone / windows-phone etc)
        console.log(isTablet); // returns if the device us a tablet (iPad etc)
        console.log(this.isdesktop);
    }
    getScreenSize(event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        this.margintop = (this.screenHeight * 14) / 100;
        console.log(this.margintop);
        if (this.screenWidth > 900) {
            this.isdesktop = true;
        }
        else {
            this.isdesktop = false;
        }
        console.log(this.screenHeight, this.screenWidth);
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__["DeviceDetectorService"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], hostBindings: function HomepageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HomepageComponent_resize_HostBindingHandler($event) { return ctx.getScreenSize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 2, consts: [["class", "desktop", 4, "ngIf"], ["class", "mobile", "style", "text-align: center;", 4, "ngIf"], [1, "desktop"], [1, "row"], [1, "col-6"], ["src", "../../assets/krishnaprofile.jpg", "alt", "", 1, "desktop_img"], [1, "textdiv"], [1, "boldclass"], [1, "lightclass"], ["href", "mailto:magicofspade@gmail.com", "target", "_blank"], ["version", "1.0", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "35px", "height", "35px", "viewBox", "0 0 100 100", "enable-background", "new 0 0 100 100", 0, "xml", "space", "preserve", 2, "color", "gray"], ["d", "M66.501,33.502C62.275,29.278,56.442,26.666,50,26.666c-12.884,0-23.333,10.447-23.333,23.333S37.116,73.334,50,73.334\n    c11.748,0,21.445-8.697,23.066-20.001H50v-6.667h23.066H80v3.333c0,1.128-0.075,2.238-0.195,3.334\n    C78.145,68.334,65.442,80.001,50,80.001c-16.569,0-30-13.431-30-30.002c0-16.567,13.431-30,30-30c8.284,0,15.784,3.359,21.214,8.789\n    L66.501,33.502z", "fill", "gray"], ["href", "https://medium.com/@magicofspade", "target", "_blank"], ["version", "1.0", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "30px", "height", "30px", "viewBox", "0 0 100 100", "enable-background", "new 0 0 100 100", 0, "xml", "space", "preserve", 1, "iconsclass"], ["d", "M63.333,10L46.191,44.285L36.667,30L10,23.333v60L36.667,90V63.333L90,76.666v-60L63.333,10z M30,81.461l-13.333-3.333\n\tV31.872L30,35.205V81.461z M36.667,56.461V42.018l11.556,17.331L36.667,56.461z M59.075,63.613l-8.626-12.938l16.455-32.912\n\tl13.415,3.353L59.075,63.613z M83.333,68.128L66.387,63.89L83.333,30V68.128z", "fill", "gray"], ["href", "https://www.facebook.com/magicofspade/", "target", "_blank"], ["d", "M83.333,10H16.667C13.001,10,10,13.001,10,16.667v66.667C10,86.998,13.001,90,16.667,90h66.666\n\tC86.999,90,90,86.998,90,83.334V16.667C90,13.001,86.999,10,83.333,10z M83.333,83.334H56.667V56.666h16.666V50H56.667v-6.667\n\tc0-5.524,4.479-10,10-10h6.666v-6.667h-6.666C57.464,26.667,50,34.126,50,43.333V50h-6.667v6.666H50v26.668H16.667V16.667h66.666\n\tV83.334z", "fill", "gray"], ["href", "http://m.me/magicofspade", "target", "_blank"], ["d", "M50,10c-22.093,0-40,16.413-40,36.667c0,7.943,2.786,15.28,7.478,21.289l-7.224,17.436\n\tc-0.703,1.699,0.104,3.646,1.804,4.355c0.853,0.352,1.764,0.325,2.552,0l21.27-8.809c4.395,1.523,9.141,2.396,14.121,2.396\n\tc22.097,0,40-16.426,40-36.667C90,26.413,72.097,10,50,10z M50,76.666c-4.04,0-8.057-0.684-11.94-2.031l-2.393-0.826l-16.175,6.699\n\tl5.632-13.594l-2.393-3.061c-3.969-5.084-6.064-11.028-6.064-17.188c0-16.542,14.951-30,33.333-30c18.379,0,33.333,13.457,33.333,30\n\tC83.333,63.203,68.379,76.666,50,76.666z", "fill", "gray"], ["points", "70.573,41.38 65.859,36.667 55.286,47.236 44.714,36.667 29.427,51.953 34.144,56.666 44.714,46.094 55.286,56.666 \n\t", "fill", "gray"], ["href", "https://www.instagram.com/magicofspade/", "target", "_blank"], ["d", "M70,9.999H30c-10.999,0-20,9.001-20,20v40.002c0,10.996,9.001,20,20,20h40c10.999,0,20-9.004,20-20V29.999\n\tC90,19,80.999,9.999,70,9.999z M83.333,70.001c0,7.35-5.979,13.333-13.333,13.333H30c-7.351,0-13.333-5.983-13.333-13.333V29.999\n\tc0-7.352,5.982-13.333,13.333-13.333h40c7.354,0,13.333,5.981,13.333,13.333V70.001z", "fill", "gray"], ["cx", "71.667", "cy", "28.332", "r", "5", "fill", "gray"], ["d", "M50,29.999c-11.048,0-20,8.953-20,20c0,11.043,8.952,20.002,20,20.002c11.045,0,20-8.959,20-20.002\n\tC70,38.952,61.045,29.999,50,29.999z M50,63.334c-7.363,0-13.333-5.97-13.333-13.335S42.637,36.666,50,36.666\n\ts13.333,5.968,13.333,13.333S57.363,63.334,50,63.334z", "fill", "gray"], ["href", "https://www.linkedin.com/in/magicofspade/", "target", "_blank"], ["d", "M83.333,10H16.667C13.001,10,10,13.001,10,16.667v66.667C10,86.998,13.001,90,16.667,90h66.666\n\tC86.999,90,90,86.998,90,83.334V16.667C90,13.001,86.999,10,83.333,10z M83.333,83.334H16.667V16.667h66.666V83.334z", "fill", "gray"], ["x", "30", "y", "43.333", "width", "6.667", "height", "26.667", "fill", "gray"], ["cx", "33.333", "cy", "35", "r", "5", "fill", "gray"], ["d", "M56.667,43.333c-2.441,0-4.701,0.705-6.667,1.849V43.61h-6.667V70H50V56.666C50,52.984,52.985,50,56.667,50\n\ts6.666,2.984,6.666,6.666V70H70V56.666C70,49.303,64.03,43.333,56.667,43.333z", "fill", "gray"], ["href", "https://twitter.com/magicofspade", "target", "_blank"], ["d", "M83.333,26.667C83.333,17.462,75.872,10,66.667,10C57.461,10,50,17.462,50,26.667v10c-14.421,0-27.305-6.549-35.866-16.824\n\tc-8.678,19.062-3.242,41.916,13.63,54.939c-4.717,4.229-10.935,6.82-17.764,6.82C17.562,86.881,26.745,90,36.667,90\n\tc25.777,0,46.666-20.898,46.666-46.667v-10L90,26.667H83.333z M76.667,43.333c0,22.058-17.943,40-40,40\n\tc-2.715,0-5.395-0.273-8.008-0.808c1.236-0.84,2.425-1.768,3.555-2.779l5.963-5.346l-6.341-4.896\n\tc-11.683-9.021-17.031-23.452-14.583-37.412c9.28,7.235,20.748,11.24,32.747,11.24h6.667V26.667c0-5.514,4.485-10,10-10\n\tc5.514,0,10,4.486,10,10V43.333z", "fill", "gray"], ["d", "M71.667,26.667c0,1.841-1.494,3.333-3.337,3.333C66.494,30,65,28.507,65,26.667s1.494-3.333,3.33-3.333\n\tC70.173,23.333,71.667,24.826,71.667,26.667z", "fill", "gray"], [1, "mobile", 2, "text-align", "center"], [1, "row", 3, "ngStyle"], [1, "col-12"], ["src", "../../assets/krishnaprofile.jpg", "alt", "", 1, "mobile_img"], [1, "row", 2, "margin-top", "30px"], [1, "boldclassmobile"], [2, "margin-top", "30px"], ["version", "1.0", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "30px", "height", "30px", "viewBox", "0 0 100 100", "enable-background", "new 0 0 100 100", 0, "xml", "space", "preserve", 2, "color", "gray"], ["d", "M66.501,33.502C62.275,29.278,56.442,26.666,50,26.666c-12.884,0-23.333,10.447-23.333,23.333S37.116,73.334,50,73.334\n            c11.748,0,21.445-8.697,23.066-20.001H50v-6.667h23.066H80v3.333c0,1.128-0.075,2.238-0.195,3.334\n            C78.145,68.334,65.442,80.001,50,80.001c-16.569,0-30-13.431-30-30.002c0-16.567,13.431-30,30-30c8.284,0,15.784,3.359,21.214,8.789\n            L66.501,33.502z", "fill", "gray"], ["version", "1.0", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "25px", "height", "25px", "viewBox", "0 0 100 100", "enable-background", "new 0 0 100 100", 0, "xml", "space", "preserve", 1, "iconsclass", 3, "click"], ["d", "M63.333,10L46.191,44.285L36.667,30L10,23.333v60L36.667,90V63.333L90,76.666v-60L63.333,10z M30,81.461l-13.333-3.333\n            V31.872L30,35.205V81.461z M36.667,56.461V42.018l11.556,17.331L36.667,56.461z M59.075,63.613l-8.626-12.938l16.455-32.912\n            l13.415,3.353L59.075,63.613z M83.333,68.128L66.387,63.89L83.333,30V68.128z", "fill", "gray"], ["version", "1.0", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "25px", "height", "25px", "viewBox", "0 0 100 100", "enable-background", "new 0 0 100 100", 0, "xml", "space", "preserve", 1, "iconsclass"], ["d", "M83.333,10H16.667C13.001,10,10,13.001,10,16.667v66.667C10,86.998,13.001,90,16.667,90h66.666\n            C86.999,90,90,86.998,90,83.334V16.667C90,13.001,86.999,10,83.333,10z M83.333,83.334H56.667V56.666h16.666V50H56.667v-6.667\n            c0-5.524,4.479-10,10-10h6.666v-6.667h-6.666C57.464,26.667,50,34.126,50,43.333V50h-6.667v6.666H50v26.668H16.667V16.667h66.666\n            V83.334z", "fill", "gray"], ["d", "M50,10c-22.093,0-40,16.413-40,36.667c0,7.943,2.786,15.28,7.478,21.289l-7.224,17.436\n            c-0.703,1.699,0.104,3.646,1.804,4.355c0.853,0.352,1.764,0.325,2.552,0l21.27-8.809c4.395,1.523,9.141,2.396,14.121,2.396\n            c22.097,0,40-16.426,40-36.667C90,26.413,72.097,10,50,10z M50,76.666c-4.04,0-8.057-0.684-11.94-2.031l-2.393-0.826l-16.175,6.699\n            l5.632-13.594l-2.393-3.061c-3.969-5.084-6.064-11.028-6.064-17.188c0-16.542,14.951-30,33.333-30c18.379,0,33.333,13.457,33.333,30\n            C83.333,63.203,68.379,76.666,50,76.666z", "fill", "gray"], ["points", "70.573,41.38 65.859,36.667 55.286,47.236 44.714,36.667 29.427,51.953 34.144,56.666 44.714,46.094 55.286,56.666 \n            ", "fill", "gray"], ["d", "M70,9.999H30c-10.999,0-20,9.001-20,20v40.002c0,10.996,9.001,20,20,20h40c10.999,0,20-9.004,20-20V29.999\n            C90,19,80.999,9.999,70,9.999z M83.333,70.001c0,7.35-5.979,13.333-13.333,13.333H30c-7.351,0-13.333-5.983-13.333-13.333V29.999\n            c0-7.352,5.982-13.333,13.333-13.333h40c7.354,0,13.333,5.981,13.333,13.333V70.001z", "fill", "gray"], ["d", "M50,29.999c-11.048,0-20,8.953-20,20c0,11.043,8.952,20.002,20,20.002c11.045,0,20-8.959,20-20.002\n            C70,38.952,61.045,29.999,50,29.999z M50,63.334c-7.363,0-13.333-5.97-13.333-13.335S42.637,36.666,50,36.666\n            s13.333,5.968,13.333,13.333S57.363,63.334,50,63.334z", "fill", "gray"], ["d", "M83.333,10H16.667C13.001,10,10,13.001,10,16.667v66.667C10,86.998,13.001,90,16.667,90h66.666\n            C86.999,90,90,86.998,90,83.334V16.667C90,13.001,86.999,10,83.333,10z M83.333,83.334H16.667V16.667h66.666V83.334z", "fill", "gray"], ["d", "M56.667,43.333c-2.441,0-4.701,0.705-6.667,1.849V43.61h-6.667V70H50V56.666C50,52.984,52.985,50,56.667,50\n            s6.666,2.984,6.666,6.666V70H70V56.666C70,49.303,64.03,43.333,56.667,43.333z", "fill", "gray"], ["d", "M83.333,26.667C83.333,17.462,75.872,10,66.667,10C57.461,10,50,17.462,50,26.667v10c-14.421,0-27.305-6.549-35.866-16.824\n            c-8.678,19.062-3.242,41.916,13.63,54.939c-4.717,4.229-10.935,6.82-17.764,6.82C17.562,86.881,26.745,90,36.667,90\n            c25.777,0,46.666-20.898,46.666-46.667v-10L90,26.667H83.333z M76.667,43.333c0,22.058-17.943,40-40,40\n            c-2.715,0-5.395-0.273-8.008-0.808c1.236-0.84,2.425-1.768,3.555-2.779l5.963-5.346l-6.341-4.896\n            c-11.683-9.021-17.031-23.452-14.583-37.412c9.28,7.235,20.748,11.24,32.747,11.24h6.667V26.667c0-5.514,4.485-10,10-10\n            c5.514,0,10,4.486,10,10V43.333z", "fill", "gray"], ["d", "M71.667,26.667c0,1.841-1.494,3.333-3.337,3.333C66.494,30,65,28.507,65,26.667s1.494-3.333,3.33-3.333\n            C70.173,23.333,71.667,24.826,71.667,26.667z", "fill", "gray"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomepageComponent_div_0_Template, 47, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomepageComponent_div_1_Template, 49, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isdesktop == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isdesktop != true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["*[_ngcontent-%COMP%]{margin: 0; \r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Kucchi';\r\n}\r\nbody[_ngcontent-%COMP%]{\r\n    background-color: greenyellow;\r\n}\r\n.desktop[_ngcontent-%COMP%]{\r\n   \r\n   \r\n    min-height: 100vh;\r\n    position: relative;\r\n    \r\n}\r\n.mobile[_ngcontent-%COMP%]{\r\n    \r\n    \r\n}\r\n.imagediv[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    \r\n    \r\n    \r\n    right: 0;\r\n    \r\n    \r\n    \r\n    \r\n    \r\n}\r\n.desktop_img[_ngcontent-%COMP%]\r\n{\r\n    float: right;\r\n    height: 350px;\r\n    width: 450px;\r\n    margin-top: 22%; \r\n    \r\n\r\n\r\n}\r\n.mobile_img[_ngcontent-%COMP%]{\r\n    height: 200px;\r\n    width: 250px;\r\n}\r\n.textdiv[_ngcontent-%COMP%]{\r\n    \r\n    position: absolute;\r\n    margin-top: 33%;\r\n    text-align: left;\r\n    margin-left: 50px;\r\n    \r\n    \r\n}\r\n.boldclass[_ngcontent-%COMP%]{\r\n    font-size: larger;\r\n    \r\n}\r\n.boldclassmobile[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n}\r\n.lightclass[_ngcontent-%COMP%]{\r\n    font-size: medium;\r\n    color: gray;\r\n}\r\nsvg.iconsclass[_ngcontent-%COMP%]{\r\n    margin-left: 12px;\r\n    \r\n}\r\nsvg[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\npre[_ngcontent-%COMP%]{\r\ntext-align: left;\r\n    white-space: pre-line;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxFQUFFLFNBQVM7SUFDUCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBRUE7OztJQUdJLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCO0FBQ0E7OztBQUdBO0FBRUE7OztJQUdJLHVCQUF1Qjs7SUFFdkIsd0JBQXdCO0lBQ3hCLFFBQVE7Ozs7OztBQU1aO0FBQ0E7O0lBRUksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTs7OztBQUluQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7OztBQUdyQjtBQUNBO0lBQ0ksaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7QUFDQSxnQkFBZ0I7SUFDWixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKnttYXJnaW46IDA7IFxyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogJ0t1Y2NoaSc7XHJcbn1cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xyXG59XHJcblxyXG4uZGVza3RvcHtcclxuICAgXHJcbiAgIFxyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxufVxyXG4ubW9iaWxle1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuLmltYWdlZGl2e1xyXG4gICAgXHJcbiAgICBcclxuICAgIC8qIG1hcmdpbi1sZWZ0OjE4LjUlOyAqL1xyXG4gICAgXHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICByaWdodDogMDtcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLmRlc2t0b3BfaW1nXHJcbntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMiU7IFxyXG4gICAgXHJcblxyXG5cclxufVxyXG4ubW9iaWxlX2ltZ3tcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi50ZXh0ZGl2e1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMyU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbi5ib2xkY2xhc3N7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIFxyXG59XHJcbi5ib2xkY2xhc3Ntb2JpbGV7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbi5saWdodGNsYXNze1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5zdmcuaWNvbnNjbGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgXHJcbn1cclxuc3Zne1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbnByZXtcclxudGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.css']
            }]
    }], function () { return [{ type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__["DeviceDetectorService"] }]; }, { getScreenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\work\angular\krishnasite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map