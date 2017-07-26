webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(usersService) {
        this.usersService = usersService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.usersService.authenticated()) {
            this.usersService.getUserById(this.usersService.getCurrentUserId())
                .then(function (user) {
                _this.currentUser = user;
                _this.usersService.setCurrentUser(_this.currentUser);
            });
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_card_service__ = __webpack_require__("../../../../../src/app/services/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_post_list_post_list_component__ = __webpack_require__("../../../../../src/app/containers/post-list/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/containers/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__containers_view_blog_view_blog_component__ = __webpack_require__("../../../../../src/app/containers/view-blog/view-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__containers_create_create_component__ = __webpack_require__("../../../../../src/app/containers/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__containers_collection_collection_component__ = __webpack_require__("../../../../../src/app/containers/collection/collection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__containers_view_photo_view_photo_component__ = __webpack_require__("../../../../../src/app/containers/view-photo/view-photo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_breadcrumbs_breadcrumbs_component__ = __webpack_require__("../../../../../src/app/components/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__containers_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/containers/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_card_collection_card_collection_component__ = __webpack_require__("../../../../../src/app/components/card-collection/card-collection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_card_blog_card_blog_component__ = __webpack_require__("../../../../../src/app/components/card-blog/card-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_card_photo_card_photo_component__ = __webpack_require__("../../../../../src/app/components/card-photo/card-photo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_card_directive__ = __webpack_require__("../../../../../src/app/directives/card.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_card_card_component__ = __webpack_require__("../../../../../src/app/components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_card_demo_card_demo_component__ = __webpack_require__("../../../../../src/app/components/card-demo/card-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__containers_view_demo_view_demo_component__ = __webpack_require__("../../../../../src/app/containers/view-demo/view-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__containers_create_demo_create_demo_component__ = __webpack_require__("../../../../../src/app/containers/create-demo/create-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_quill__ = __webpack_require__("../../../../ngx-quill/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_breadcrumbs_breadcrumbs_component__["a" /* BreadcrumbsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_card_blog_card_blog_component__["a" /* CardBlogComponent */],
            __WEBPACK_IMPORTED_MODULE_9__containers_post_list_post_list_component__["a" /* PostListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__containers_user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__containers_create_create_component__["a" /* CreateComponent */],
            __WEBPACK_IMPORTED_MODULE_17__containers_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_13__containers_collection_collection_component__["a" /* CollectionComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_card_collection_card_collection_component__["a" /* CardCollectionComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_card_photo_card_photo_component__["a" /* CardPhotoComponent */],
            __WEBPACK_IMPORTED_MODULE_14__containers_view_photo_view_photo_component__["a" /* ViewPhotoComponent */],
            __WEBPACK_IMPORTED_MODULE_11__containers_view_blog_view_blog_component__["a" /* ViewBlogComponent */],
            __WEBPACK_IMPORTED_MODULE_21__directives_card_directive__["a" /* CardDirective */],
            __WEBPACK_IMPORTED_MODULE_22__components_card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_card_demo_card_demo_component__["a" /* CardDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_24__containers_view_demo_view_demo_component__["a" /* ViewDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_25__containers_create_demo_create_demo_component__["a" /* CreateDemoComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_19__components_card_blog_card_blog_component__["a" /* CardBlogComponent */], __WEBPACK_IMPORTED_MODULE_20__components_card_photo_card_photo_component__["a" /* CardPhotoComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_26_ngx_quill__["a" /* QuillModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_card_service__["a" /* CardService */],
            __WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_6__services_users_service__["a" /* UsersService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_post_list_post_list_component__ = __webpack_require__("../../../../../src/app/containers/post-list/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/containers/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_collection_collection_component__ = __webpack_require__("../../../../../src/app/containers/collection/collection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_view_blog_view_blog_component__ = __webpack_require__("../../../../../src/app/containers/view-blog/view-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_view_demo_view_demo_component__ = __webpack_require__("../../../../../src/app/containers/view-demo/view-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_create_create_component__ = __webpack_require__("../../../../../src/app/containers/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_create_demo_create_demo_component__ = __webpack_require__("../../../../../src/app/containers/create-demo/create-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/containers/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_view_photo_view_photo_component__ = __webpack_require__("../../../../../src/app/containers/view-photo/view-photo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });











var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__containers_post_list_post_list_component__["a" /* PostListComponent */] },
    { path: 'demo', component: __WEBPACK_IMPORTED_MODULE_6__containers_view_demo_view_demo_component__["a" /* ViewDemoComponent */] },
    { path: 'demo/create', component: __WEBPACK_IMPORTED_MODULE_8__containers_create_demo_create_demo_component__["a" /* CreateDemoComponent */] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_3__containers_user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'profile/:id/:collection', component: __WEBPACK_IMPORTED_MODULE_4__containers_collection_collection_component__["a" /* CollectionComponent */] },
    { path: 'blog/:id', component: __WEBPACK_IMPORTED_MODULE_5__containers_view_blog_view_blog_component__["a" /* ViewBlogComponent */] },
    { path: 'photo/:id', component: __WEBPACK_IMPORTED_MODULE_10__containers_view_photo_view_photo_component__["a" /* ViewPhotoComponent */] },
    {
        path: 'create',
        component: __WEBPACK_IMPORTED_MODULE_7__containers_create_create_component__["a" /* CreateComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuard */]]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__containers_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/breadcrumbs/breadcrumbs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/breadcrumbs/breadcrumbs.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"breadcrumbs\">\r\n  <div class=\"container\">\r\n  <div class=\"row middle-xs\">\r\n\r\n    <div class=\"col-xs-12\">\r\n        <div class=\"box font-color--light\"><button (click)=\"goBack()\">Back</button></div>\r\n    </div>\r\n\r\n  </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/breadcrumbs/breadcrumbs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(location) {
        this.location = location;
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbsComponent.prototype.goBack = function () {
        this.location.back();
    };
    return BreadcrumbsComponent;
}());
BreadcrumbsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-breadcrumbs',
        template: __webpack_require__("../../../../../src/app/components/breadcrumbs/breadcrumbs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/breadcrumbs/breadcrumbs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */]) === "function" && _a || Object])
], BreadcrumbsComponent);

var _a;
//# sourceMappingURL=breadcrumbs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/card-blog/card-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n    height: 240px;\r\n}\r\n\r\n.card__inner {\r\n    padding-top: 1rem;\r\n}\r\n\r\n.card__bottom {\r\n    position: absolute;\r\n    bottom: 0rem;\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 0 .5rem;\r\n    text-align: center;\r\n}\r\n\r\n.card__bottom a {\r\n    width: 100%;\r\n    display: block;\r\n    padding-top: .3rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card-blog/card-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"box\">\r\n  <div class=\"card\">\r\n    <!-- <img src=\"https://placeholdit.co//i/555x250\"> -->\r\n    <div class=\"card__inner\">\r\n      <hr class=\"hr\">\r\n      <h1 class=\"heading font-color--dark\">{{post.title.slice(0, 40).concat('…')}}</h1>\r\n      <p class=\"font-accent\">by <a [routerLink]=\"['/profile', post.author.userId]\">{{post.author.displayName}}</a></p>\r\n      <p>{{post.content.excerpt}}</p>\r\n      <div class=\"card__bottom\">\r\n        <p><a [routerLink]=\"['/blog', post._id]\" class=\"oval-button oval-button__outline oval-button__outline--default\">Read</a></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</article>"

/***/ }),

/***/ "../../../../../src/app/components/card-blog/card-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_post__ = __webpack_require__("../../../../../src/app/models/post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_post___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_post__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardBlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardBlogComponent = (function () {
    function CardBlogComponent() {
    }
    CardBlogComponent.prototype.ngOnChanges = function (changes) {
        if (!this.component) {
            return;
        }
        this.component.instance.post = this.post;
    };
    return CardBlogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_post__["Post"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_post__["Post"]) === "function" && _a || Object)
], CardBlogComponent.prototype, "post", void 0);
CardBlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card-blog',
        template: __webpack_require__("../../../../../src/app/components/card-blog/card-blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/card-blog/card-blog.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CardBlogComponent);

var _a;
//# sourceMappingURL=card-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/card-collection/card-collection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "hr {\r\n    margin: .5rem auto 1rem auto;\r\n}\r\n\r\n.font-accent {\r\n    color:#a6a5aa;\r\n}\r\n\r\n.card {\r\n    height: 220px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card-collection/card-collection.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"box\">\r\n  <a class=\"card\" [routerLink]=\"['/profile', 1, 'eye-liners']\">\r\n    <div class=\"card__half card__half--photo\" style=\"background-image: url('https://placeholdit.co//i/555x778')\">\r\n      &nbsp;\r\n    </div>\r\n    <div class=\"card__half card__half--text\">\r\n      <hr class=\"hr\">\r\n      <h1 class=\"heading font-color--dark\">My fav eye liners</h1>\r\n      <p class=\"font-accent\">Sharing my deepest thoughts on this topis</p>\r\n    </div>\r\n  </a>\r\n</article>"

/***/ }),

/***/ "../../../../../src/app/components/card-collection/card-collection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardCollectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardCollectionComponent = (function () {
    function CardCollectionComponent() {
    }
    CardCollectionComponent.prototype.ngOnInit = function () {
    };
    return CardCollectionComponent;
}());
CardCollectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card-collection',
        template: __webpack_require__("../../../../../src/app/components/card-collection/card-collection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/card-collection/card-collection.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CardCollectionComponent);

//# sourceMappingURL=card-collection.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/card-demo/card-demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n    background: linear-gradient(#49525e, #3d394b) left repeat;\r\n}\r\n\r\n.card__inner {\r\n    padding-top: 1rem;\r\n}\r\n.card__bottom {\r\n    position: absolute;\r\n    bottom: 1rem;\r\n    left: 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.card__bottom a {\r\n    padding: .5rem 6rem;\r\n}\r\n\r\n.font-accent {\r\n    font-size: 1.75rem;\r\n}\r\n\r\n.hr {\r\n    background-color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card-demo/card-demo.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <article class=\"card card__inner font-color--light-grey\">\r\n        <hr class=\"hr\">\r\n        <h1 class=\"heading font-color--dark\">Is it your first time here?</h1>\r\n        <p class=\"font-accent\">Visually rich platform for style and beauty bloggers with a rewarding twist.</p>\r\n        <div class=\"card__bottom\">\r\n          <p><a [routerLink]=\"['/demo']\" class=\"oval-button oval-button__outline oval-button__outline--light\">Demo</a></p>\r\n        </div>\r\n  </article>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/card-demo/card-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardDemoComponent = (function () {
    function CardDemoComponent() {
    }
    CardDemoComponent.prototype.ngOnInit = function () {
    };
    return CardDemoComponent;
}());
CardDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card-demo',
        template: __webpack_require__("../../../../../src/app/components/card-demo/card-demo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/card-demo/card-demo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CardDemoComponent);

//# sourceMappingURL=card-demo.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/card-photo/card-photo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.card {\r\n    color:white;\r\n    font-size: 1rem;\r\n}\r\n.card__inner {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    height: 240px;\r\n\r\n}\r\n\r\n.card__bottom {\r\n    position: absolute;\r\n    bottom: 0rem;\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 0 .5rem;\r\n    text-align: right;\r\n    z-index: 10;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card-photo/card-photo.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"box\">\r\n  <a class=\"card card__photo\" [routerLink]=\"['/photo', post._id]\" [ngStyle]=\"{'background-image': 'url(' + post.content.photoUrl + ')'}\">\r\n    <div class=\"card__inner\" >\r\n      <div class=\"card__bottom\">\r\n        <p *ngIf=\"post.author.displayName\" class=\"font-accent\">by {{post.author.displayName}}</p>\r\n      </div>\r\n    <div class=\"card__overlay\">&nbsp;</div>\r\n    </div>\r\n  </a>\r\n</article>"

/***/ }),

/***/ "../../../../../src/app/components/card-photo/card-photo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPhotoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardPhotoComponent = (function () {
    function CardPhotoComponent() {
    }
    CardPhotoComponent.prototype.ngOnInit = function () {
    };
    return CardPhotoComponent;
}());
CardPhotoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card-photo',
        template: __webpack_require__("../../../../../src/app/components/card-photo/card-photo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/card-photo/card-photo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CardPhotoComponent);

//# sourceMappingURL=card-photo.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/card/card-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardItem; });
var CardItem = (function () {
    function CardItem(component, post) {
        this.component = component;
        this.post = post;
    }
    return CardItem;
}());

//# sourceMappingURL=card-item.js.map

/***/ }),

/***/ "../../../../../src/app/components/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_post__ = __webpack_require__("../../../../../src/app/models/post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_post___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_post__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_card_directive__ = __webpack_require__("../../../../../src/app/directives/card.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_card_service__ = __webpack_require__("../../../../../src/app/services/card.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardComponent = (function () {
    function CardComponent(componentFactoryResolver, cardService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cardService = cardService;
    }
    CardComponent.prototype.loadComponent = function () {
        var cardItem = this.cardService.renderCard(this.post.type, this.post);
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(cardItem.component);
        var viewContainerRef = this.cardDirective.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.post = this.post;
    };
    CardComponent.prototype.ngAfterContentInit = function () {
        this.loadComponent();
    };
    return CardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_post__["Post"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_post__["Post"]) === "function" && _a || Object)
], CardComponent.prototype, "post", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__directives_card_directive__["a" /* CardDirective */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__directives_card_directive__["a" /* CardDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__directives_card_directive__["a" /* CardDirective */]) === "function" && _b || Object)
], CardComponent.prototype, "cardDirective", void 0);
CardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card',
        template: '<ng-template card-directive></ng-template>'
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_card_service__["a" /* CardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_card_service__["a" /* CardService */]) === "function" && _d || Object])
], CardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".username,\r\n.avatar--small,\r\n.round-button {\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n}\r\n\r\n.username {\r\n    display: inline-block;\r\n    margin-top: .75rem;\r\n    font-size: .75rem;\r\n    font-weight: 400;\r\n}\r\n\r\n.username a,\r\n.username a:hover,\r\n.username a:visited {\r\n    color: rgba(255,255,255,0.75);\r\n}\r\n.navigation__last {\r\n    text-align: right;\r\n    align-items: center;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n}\r\n\r\nh1 {\r\n    color: white;\r\n    font-weight: 400;\r\n    font-size: 1.25rem;\r\n    margin-top: .8rem;\r\n}\r\n\r\n.navigation__search {\r\n    margin-top: .85rem;\r\n}\r\n\r\n.oval-button {\r\n    padding: .5rem 1.25rem;\r\n    margin-left: .5rem;\r\n}\r\n\r\nsvg {\r\n    margin-top: .5rem;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navigation\">\r\n  <div class=\"container\">\r\n  <div class=\"row middle-xs\">\r\n\r\n  <div class=\"col-xs-12\r\n              col-md-2\">\r\n  <div class=\"box\">\r\n\r\n    <h1><a routerLink=\"/\" class=\"navigation__logo\">\r\n      <svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 147.27 21\"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Artboard 1</title><path class=\"cls-1\" d=\"M14.34,8.58l-3.12,3.3L8.79,14.49l-2.4-2.64L3.3,8.49V21H0V0L8.82,9.63,17.64.27V21h-3.3Z\"/><path class=\"cls-1\" d=\"M48,21H36.84V0H48V3.3H40.14V8.85H48v3.3H40.14V17.7H48Z\"/><path class=\"cls-1\" d=\"M77.91,21H66.75V0H77.91V3.3H70V8.85h7.86v3.3H70V17.7h7.86Z\"/><path class=\"cls-1\" d=\"M112.26,21H109l-9-7v7h-3.3V0H100V9.78l9,7V0h3.3Z\"/><path class=\"cls-1\" d=\"M147.27,21h-3.72l-4.11-7.86L134.76,21h-3.3V0h3.3V14.55L143.43,0h3.84l-5.85,9.81Z\"/></svg>\r\n    </a></h1>\r\n\r\n  </div>\r\n  </div>\r\n\r\n  <div class=\"col-xs-12\r\n              col-md-7\">\r\n  <div class=\"box\">\r\n    <form action=\"PUT\">\r\n      <input class=\"navigation__search input input--light\" type=\"text\" placeholder=\"Search for a bit of perfect…\">\r\n    </form>\r\n  </div>\r\n  </div>\r\n\r\n  <div class=\"col-xs-12\r\n              col-md-3\">\r\n  <div class=\"box navigation__last\">\r\n    <div *ngIf=\"usersService.loggedIn\">\r\n      <p *ngIf=\"user\" class=\"username heading font-color--light\"><a [routerLink]=\"['/profile', user._id]\">{{user.name.firstName}} {{user.name.lastName}}</a></p>\r\n      <a *ngIf=\"user\" [routerLink]=\"['/profile', user._id]\"><img class=\"avatar--small\" src=\"{{user.picture}}\" alt=\"{{user.name.firstName}} {{user.name.lastName}}, profile photo\"></a>\r\n      <a [routerLink]=\"['/create']\" class=\"round-button round-button--default\">+ <span class=\"screen-reader\">Create a Post</span></a>\r\n\r\n    </div>\r\n    <div *ngIf=\"!usersService.loggedIn\">\r\n      <p class=\"username heading font-color--light\">\r\n        <a (click)=\"onLogin()\">Log In</a>\r\n        <a class=\"oval-button oval-button__fill oval-button__fill--default\" (click)=\"onLogin()\">Sign Up</a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n  </div>\r\n \r\n  </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(usersService) {
        this.usersService = usersService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInSubscription = this.usersService.loggedIn$.subscribe(function (loggedIn) {
            _this.loggedIn = loggedIn;
        });
        this.userSubscription = this.usersService.currentUser$.subscribe(function (user) { return _this.user = user; });
    };
    NavigationComponent.prototype.onLogin = function () {
        this.usersService.login();
    };
    NavigationComponent.prototype.onLogout = function () {
        this.usersService.logout();
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/components/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/navigation.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/collection/collection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/collection/collection.component.html":
/***/ (function(module, exports) {

module.exports = "<app-breadcrumbs></app-breadcrumbs>\r\n<div class=\"container\">\r\n  <main class=\"row main\">\r\n    <app-card-blog class=\"col-xs-12 col-sm-6 col-md-3\"></app-card-blog>\r\n  </main>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/containers/collection/collection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollectionComponent = (function () {
    function CollectionComponent() {
    }
    CollectionComponent.prototype.ngOnInit = function () {
    };
    return CollectionComponent;
}());
CollectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-collection',
        template: __webpack_require__("../../../../../src/app/containers/collection/collection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/collection/collection.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CollectionComponent);

//# sourceMappingURL=collection.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/create-demo/create-demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".create__type.box {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex; \r\n  -webkit-box-align: center; \r\n      -ms-flex-align: center; \r\n          align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.card {\r\n  padding: 2rem;\r\n  overflow: visible;\r\n  min-height: initial;\r\n}\r\n\r\n.create__type p {\r\n  margin: 0;\r\n}\r\n\r\n@media only screen and (max-width: 64em) {\r\n    .create__container.card {\r\n        border-radius: 0;\r\n        box-shadow: none;\r\n        margin: 0 0 1rem 0;\r\n    }\r\n\r\n    .create__heading {\r\n      padding: 0 2rem;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 64em) {\r\n  .container {\r\n    padding-top: 2rem;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/create-demo/create-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-lg-8\">\r\n\r\n      <div class=\"box\">\r\n        <p class=\"flash flash--warning\">This is a demo. Create an account to be able to save your posts.</p>\r\n\r\n        <h1 class=\"heading create__heading\">\r\n          <small>Step 1</small>\r\n          Choose a post type\r\n        </h1>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n      <div *ngFor=\"let type of types\" class=\"col-xs-12 col-sm-4\" (click)=\"onSelectType(type)\">\r\n        <div class=\"create__type create__type--{{type}} box card\">\r\n          <p>{{type}}</p>\r\n        </div>\r\n      </div>\r\n\r\n  </div>\r\n  <div *ngIf=\"post.type\" class=\"row\">\r\n    <div class=\"col-xs-12 col-lg-8\">\r\n\r\n      <div class=\"box create__container card\">\r\n        <h1 class=\"heading\">\r\n          <small>Step 2</small>\r\n          Add your content\r\n        </h1>\r\n        <div [ngSwitch]=\"post.type\">\r\n          <div *ngSwitchCase=\"'blog'\" class=\"create__containter create__containter--active\">\r\n            <form #blogPostForm=\"ngForm\" (ngSubmit)=\"onPost()\">\r\n\r\n              <label for=\"title\">Title<span *ngIf=\"title.errors?.required\" class=\"font-color--error\"> required</span></label>\r\n              <input \r\n                     #title=\"ngModel\"\r\n                     type=\"text\"\r\n                     name=\"title\"\r\n                     id=\"title\"\r\n                     required\r\n                     [(ngModel)]=\"post.title\">\r\n\r\n              <label for=\"excerpt\">Excerpt <span *ngIf=\"exerpt.errors?.required\" class=\"font-color--error\"> required</span></label>\r\n              <input \r\n                     #exerpt=\"ngModel\"\r\n                     type=\"text\"\r\n                     name=\"excerpt\"\r\n                     id=\"excerpt\"\r\n                     required\r\n                     [(ngModel)]=\"content.excerpt\">\r\n\r\n              <label for=\"html\">Content (HTML)</label>\r\n              <quill-editor\r\n                theme=\"bubble\"\r\n                placeholder=\"Write your blog post here…\"\r\n                [(ngModel)]=\"content.html\"\r\n                name=\"content.html\"\r\n                [modules]=\"quillConfig\"\r\n              >\r\n              </quill-editor>\r\n              <button type=\"submit\" [disabled]=\"!blogPostForm.form.valid\">Post a {{post.type}}</button>\r\n            </form>\r\n          </div>\r\n\r\n          <div *ngSwitchCase=\"'photo'\" class=\"create__containter create__containter--active\">\r\n            <form #photoPostForm=\"ngForm\" (ngSubmit)=\"onPost()\">\r\n\r\n              <label for=\"title\">Title<span *ngIf=\"title.errors?.required\" class=\"font-color--error\"> required</span></label>\r\n              <input \r\n                     #title=\"ngModel\"\r\n                     type=\"text\"\r\n                     name=\"title\"\r\n                     id=\"title\"\r\n                     [(ngModel)]=\"post.title\"\r\n                     required>\r\n\r\n              <label for=\"photoUrl\">Photo URL<span *ngIf=\"photoUrl.errors?.required\" class=\"font-color--error\"> required</span></label>\r\n              <input \r\n                     #photoUrl=\"ngModel\"\r\n                     type=\"text\"\r\n                     name=\"photoUrl\"\r\n                     id=\"photoUrl\"\r\n                     [(ngModel)]=\"content.photoUrl\"\r\n                     required>\r\n              <button type=\"submit\" [disabled]=\"!photoPostForm.form.valid\">Post a {{post.type}}</button>\r\n            </form>\r\n          </div>\r\n\r\n          <div *ngSwitchDefault class=\"create__containter create__containter--disabled\">\r\n            <p> Please, select a post type</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/containers/create-demo/create-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateDemoComponent = (function () {
    function CreateDemoComponent(postsService, usersService, router) {
        this.postsService = postsService;
        this.usersService = usersService;
        this.router = router;
        this.types = [
            'blog',
            'photo'
        ];
        this.quillConfig = {
            toolbar: [
                [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['link']
            ]
        };
    }
    CreateDemoComponent.prototype.ngOnInit = function () {
        this.post = {
            title: '',
            type: '',
            author: {
                userId: '000'
            },
            tags: [''],
            hearts: [],
            content: {}
        };
        this.content = {};
    };
    CreateDemoComponent.prototype.contentFactory = function (type) {
        if (type === 'photo') {
            return {
                photoUrl: this.content.photoUrl,
            };
        }
        if (type === 'blog') {
            return {
                excerpt: this.content.excerpt,
                html: this.content.html
            };
        }
    };
    CreateDemoComponent.prototype.onSelectType = function (type) {
        this.post.type = type;
    };
    CreateDemoComponent.prototype.onPost = function () {
        var _this = this;
        this.post.content = this.contentFactory(this.post.type);
        console.log(this.post);
        this.postsService.createDemoPost(this.post)
            .then(function (post) {
            _this.router.navigate(["/" + post.type + "/" + post._id]);
        });
    };
    return CreateDemoComponent;
}());
CreateDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-demo',
        template: __webpack_require__("../../../../../src/app/containers/create-demo/create-demo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/create-demo/create-demo.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], CreateDemoComponent);

var _a, _b, _c;
//# sourceMappingURL=create-demo.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  padding-top: 2rem;\r\n}\r\n.create__type.box {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex; \r\n  -webkit-box-align: center; \r\n      -ms-flex-align: center; \r\n          align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.card {\r\n  padding: 2rem;\r\n  overflow: visible;\r\n  min-height: initial;\r\n}\r\n\r\n.create__type p {\r\n  margin: 0;\r\n}\r\n\r\n@media only screen and (max-width: 64em) {\r\n    .create__container.card {\r\n        border-radius: 0;\r\n        box-shadow: none;\r\n        margin: 0 0 1rem 0;\r\n    }\r\n\r\n    .create__heading {\r\n      padding: 0 2rem;\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-lg-8\">\r\n\r\n      <div class=\"box create__heading\">\r\n        <h1 class=\"heading\">\r\n          <small>Step 1</small>\r\n          Choose a post type\r\n        </h1>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n      <div *ngFor=\"let type of types\" class=\"col-xs-12 col-sm-4\" (click)=\"onSelectType(type)\">\r\n        <div class=\"create__type create__type--{{type}} box card\">\r\n          <p>{{type}}</p>\r\n        </div>\r\n      </div>\r\n\r\n  </div>\r\n  <div *ngIf=\"post.type\" class=\"row\">\r\n    <div class=\"col-xs-12 col-lg-8\">\r\n\r\n      <div class=\"box create__container card\">\r\n        <h1 class=\"heading\">\r\n          <small>Step 2</small>\r\n          Add your content\r\n        </h1>\r\n        <div [ngSwitch]=\"post.type\">\r\n          <div *ngSwitchCase=\"'blog'\" class=\"create__containter create__containter--active\">\r\n            <form #blogPostForm=\"ngForm\" (ngSubmit)=\"onPost()\">\r\n\r\n              <label for=\"title\">Title<span *ngIf=\"title.errors?.required\" class=\"font-color--error\"> required</span></label>\r\n              <input \r\n                     #title=\"ngModel\"\r\n                     type=\"text\"\r\n                     name=\"title\"\r\n                     id=\"title\"\r\n                     required\r\n                     [(ngModel)]=\"post.title\">\r\n\r\n              <label for=\"excerpt\">Excerpt <span *ngIf=\"exerpt.errors?.required\" class=\"font-color--error\"> required</span></label>\r\n              <input \r\n                     #exerpt=\"ngModel\"\r\n                     type=\"text\"\r\n                     name=\"excerpt\"\r\n                     id=\"excerpt\"\r\n                     required\r\n                     [(ngModel)]=\"content.excerpt\">\r\n\r\n              <label>Blog Post</label>\r\n              <quill-editor\r\n                theme=\"bubble\"\r\n                placeholder=\"Write your blog post here…\"\r\n                [(ngModel)]=\"content.html\"\r\n                name=\"content.html\"\r\n                [modules]=\"quillConfig\"\r\n              >\r\n              </quill-editor>\r\n              <button type=\"submit\" [disabled]=\"!blogPostForm.form.valid\">Post a {{post.type}}</button>\r\n            </form>\r\n          </div>\r\n\r\n          <div *ngSwitchCase=\"'photo'\" class=\"create__containter create__containter--active\">\r\n            <form #photoPostForm=\"ngForm\" (ngSubmit)=\"onPost()\">\r\n\r\n              <label for=\"title\">Title<span *ngIf=\"title.errors?.required\" class=\"font-color--error\"> required</span></label>\r\n              <input \r\n                     #title=\"ngModel\"\r\n                     type=\"text\"\r\n                     name=\"title\"\r\n                     id=\"title\"\r\n                     [(ngModel)]=\"post.title\"\r\n                     required>\r\n\r\n              <label for=\"photoUrl\">Photo URL<span *ngIf=\"photoUrl.errors?.required\" class=\"font-color--error\"> required</span></label>\r\n              <input \r\n                     #photoUrl=\"ngModel\"\r\n                     type=\"text\"\r\n                     name=\"photoUrl\"\r\n                     id=\"photoUrl\"\r\n                     [(ngModel)]=\"content.photoUrl\"\r\n                     required>\r\n              <button type=\"submit\" [disabled]=\"!photoPostForm.form.valid\">Post a {{post.type}}</button>\r\n            </form>\r\n          </div>\r\n\r\n          <div *ngSwitchDefault class=\"create__containter create__containter--disabled\">\r\n            <p> Please, select a post type</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/containers/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateComponent = (function () {
    function CreateComponent(postsService, usersService, router) {
        this.postsService = postsService;
        this.usersService = usersService;
        this.router = router;
        this.types = [
            'blog',
            'photo'
        ];
        this.quillConfig = {
            toolbar: [
                [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['link']
            ]
        };
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.post = {
            title: '',
            type: '',
            author: {
                userId: this.usersService.getCurrentUserId()
            },
            tags: [''],
            hearts: [],
            content: {}
        };
        this.content = {};
    };
    CreateComponent.prototype.contentFactory = function (type) {
        if (type === 'photo') {
            return {
                photoUrl: this.content.photoUrl,
            };
        }
        if (type === 'blog') {
            return {
                excerpt: this.content.excerpt,
                html: this.content.html
            };
        }
    };
    CreateComponent.prototype.onSelectType = function (type) {
        this.post.type = type;
    };
    CreateComponent.prototype.onPost = function () {
        var _this = this;
        this.post.content = this.contentFactory(this.post.type);
        this.postsService.createPost(this.post)
            .then(function (post) {
            _this.router.navigate(["/" + post.type + "/" + post._id]);
        });
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create',
        template: __webpack_require__("../../../../../src/app/containers/create/create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/create/create.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], CreateComponent);

var _a, _b, _c;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"row\">\r\n<div class=\"col-xs-12\">\r\n<div class=\"box\">\r\n\r\n<h1>Oopsie daisies! Nothing here…</h1>\r\n\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/containers/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/containers/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/post-list/post-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/post-list/post-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <main class=\"row main\">\r\n    <div *ngIf=\"!usersService.loggedIn\" class=\"col-xs-12 col-sm-6\">\r\n      <app-card-demo></app-card-demo>\r\n    </div>\r\n    <div *ngFor=\"let post of posts\" class=\"col-xs-12 col-sm-6 col-md-3\">\r\n      <app-card [post]=\"post\"></app-card>\r\n    </div>\r\n  </main>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/containers/post-list/post-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostListComponent = (function () {
    function PostListComponent(postsService, usersService) {
        this.postsService = postsService;
        this.usersService = usersService;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getPosts()
            .then(function (posts) { return _this.posts = posts; });
    };
    return PostListComponent;
}());
PostListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post-list',
        template: __webpack_require__("../../../../../src/app/containers/post-list/post-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/post-list/post-list.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _b || Object])
], PostListComponent);

var _a, _b;
//# sourceMappingURL=post-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-profile__container button {\r\n    margin-left: .5rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-profile__outer\">\r\n  <div class=\"container\">\r\n    <div *ngIf=\"user\" class=\"row user-profile\">\r\n\r\n        <div class=\"col-xs-12 col-md-4 user-profile__left\">\r\n          <div class=\"box\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-8 user-profile__right\">\r\n          <div class=\"box\">\r\n            <img src=\"{{user.picture}}\" class=\"user-profile__avatar avatar--large\">\r\n            <p *ngIf=\"self\" class=\"user-profile__settings\">\r\n              <a class=\"heading font-color--light\" (click)=\"onEdit()\">Edit</a>\r\n              |\r\n              <a class=\"heading font-color--light\" (click)=\"onLogout()\">Log Out</a>\r\n            </p>\r\n            <div *ngIf=\"!editing\">\r\n              <h1 class=\"user-profile__name\">{{user.name.firstName}} {{user.name.lastName}}</h1>\r\n              <p class=\"user-profile__bio\">{{user.bio}}</p>\r\n              <p class=\"user-profile__stats\">followers {{user.followers.length}}   |   following {{user.followers.length}}   |   posts ###</p>\r\n            </div>\r\n            <div *ngIf=\"editing\">\r\n              <form\r\n                  #updateUserForm=\"ngForm\" \r\n                  (ngSubmit)=\"onUpdateUser()\"\r\n                  class=\"user-profile__container\">\r\n                <div class=\"user-profile__form user-profile__form--half\">\r\n                  <label for=\"firstName\">First Name</label>\r\n                  <input\r\n                    #firstNameRef=\"ngModel\"\r\n                    id=\"firstName\"\r\n                    name=\"name.firstName\"\r\n                    [(ngModel)]=\"user.name.firstName\"\r\n                    type=\"text\"\r\n                    required>\r\n                  <p *ngIf=\"firstNameRef.errors?.required\" class=\"flash flash--error\">Your first name is required</p>\r\n                </div>\r\n\r\n                <div class=\" user-profile__form user-profile__form--half\">\r\n                  <label for=\"lastName\">Last Name</label>\r\n                  <input\r\n                    #lastNameRef=\"ngModel\"\r\n                    id=\"lastName\"\r\n                    name=\"name.lastName\"\r\n                    [(ngModel)]=\"user.name.lastName\"\r\n                    type=\"text\"\r\n                    required>\r\n                    <p *ngIf=\"lastNameRef.errors?.required\" class=\"flash flash--error\">Your last name is required</p>\r\n                </div>\r\n\r\n                <div class=\"user-profile__form user-profile__form--full\">\r\n                  <label for=\"bio\">Bio</label>\r\n                  <input\r\n                      #bioRef=\"ngModel\"\r\n                      id=\"bio\"\r\n                      name=\"bio\"\r\n                      [(ngModel)]=\"user.bio\"\r\n                      type=\"text\"\r\n                      minlength=\"5\">\r\n                  <p *ngIf=\"bioRef.errors?.minlength\" class=\"flash flash--error\">This field must be longer than <strong>{{bioRef.errors?.minlength.requiredLength}}</strong> characters. You only have <strong>{{bioRef.errors?.minlength.actualLength}}</strong> so far</p>\r\n                </div>\r\n                <div>\r\n                  <button class=\"oval-button oval-button__outline oval-button__outline--light\" (click)=\"onEdit()\">Cancel</button>\r\n                  <button class=\"oval-button oval-button__outline oval-button__outline--success\" [disabled]=\"!updateUserForm.form.valid\">Save</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <p *ngIf=\"!self\"><button class=\"oval-button oval-button__fill oval-button__fill--default\">Follow</button></p>\r\n          </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"user-profile__error\" *ngIf=\"!user\">\r\n      <p class=\"font-color--light user-profile__bio\">Profile doesn&rsquo;t exist.</p>\r\n      </div>\r\n  </div>\r\n</div>\r\n<p>\r\n\r\n<div class=\"container\">\r\n  <main class=\"row main\">\r\n    <div *ngFor=\"let post of posts\" class=\"col-xs-12 col-sm-6 col-md-3\">\r\n      <app-card [post]=\"post\"></app-card>\r\n    </div>\r\n  </main>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/containers/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserProfileComponent = (function () {
    function UserProfileComponent(usersService, postsService, route, location) {
        this.usersService = usersService;
        this.postsService = postsService;
        this.route = route;
        this.location = location;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editing = false;
        this.route.paramMap
            .switchMap(function (params) { return _this.usersService.getUserById(params.get('id')); })
            .subscribe(function (user) {
            _this.user = user;
            _this.self = _this.usersService.self(_this.user._id);
            _this.postsService.getPostsByUserId(user._id)
                .then(function (posts) { return _this.posts = posts; });
        });
    };
    UserProfileComponent.prototype.setSelf = function (id) {
    };
    UserProfileComponent.prototype.onLogout = function () {
        this.usersService.logout();
    };
    UserProfileComponent.prototype.onEdit = function () {
        this.editing = !this.editing;
    };
    UserProfileComponent.prototype.onUpdateUser = function () {
        this.usersService.updateUser(this.user);
        this.editing = false;
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/containers/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/user-profile/user-profile.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_posts_service__["a" /* PostsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_posts_service__["a" /* PostsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */]) === "function" && _d || Object])
], UserProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/view-blog/view-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".avatar--medium {\r\n    display: block;\r\n    margin: 20px auto;\r\n}\r\n\r\nhr {\r\n    margin-top: 20px;\r\n    width: 30%;\r\n}\r\n\r\ntextarea {\r\n    height: 30rem;\r\n}\r\n\r\nform {\r\n    height: 100%;\r\n}\r\n\r\n@media only screen and (max-width: 64em) {\r\n    .card {\r\n        border-radius: 0;\r\n        box-shadow: none;\r\n        margin: 0 0 1rem 0;\r\n    }\r\n    .card__inner {\r\n        padding: 1.5rem;\r\n    }\r\n\r\n    .main {\r\n        margin-top: 0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/view-blog/view-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<app-breadcrumbs></app-breadcrumbs>\r\n<div class=\"container\">\r\n  <div *ngIf=\"post\" class=\"row main\">\r\n\r\n    <article class=\"col-xs-12 col-lg-8\">\r\n      <div class=\"card card__inner\">\r\n        <div class=\"box\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12 col-md-3\">\r\n              <a *ngIf=\"author\" [routerLink]=\"['/profile', post.author.userId]\"><img class=\"avatar--medium\" src=\"{{author.picture}}\" alt=\"{{post.author.displayName}}, profile photo\"></a>\r\n            </div>\r\n\r\n            <div *ngIf=\"!editing\" class=\"col-xs-12 col-md-9\">\r\n              <hr class=\"hr\">\r\n              <h1 class=\"heading font-color--dark\">{{post.title}}</h1>\r\n              <p class=\"font-accent\">by <a [routerLink]=\"['/profile', post.author.userId]\">{{post.author.displayName}}</a></p>\r\n              <div [innerHTML]=\"post.content.html\"></div>\r\n              <div *ngIf=\"self\" class=\"post__buttons\">\r\n                <button class=\"oval-button oval-button__outline oval-button__outline--error\" (click)=\"onDelete()\">Delete</button>\r\n                <button class=\"oval-button oval-button__outline oval-button__outline--success\" (click)=\"onEdit()\">Edit</button>\r\n              </div>\r\n            </div>\r\n\r\n             <form\r\n                *ngIf=\"editing\"\r\n                #updateBlogPostForm=\"ngForm\" \r\n                (ngSubmit)=\"onUpdatePost()\"\r\n                class=\"col-xs-12 col-md-9\">\r\n                <hr class=\"hr\">\r\n                <label for=\"title\">Title</label>\r\n                <input\r\n                  #title=\"ngModel\"\r\n                  id=\"title\"\r\n                  name=\"title\"\r\n                  [(ngModel)]=\"post.title\"\r\n                  type=\"text\"\r\n                  required>\r\n                <p *ngIf=\"title.errors?.required\" class=\"flash flash--error\">You need a title.</p>\r\n\r\n                <label for=\"excerpt\">Excerpt</label>\r\n                <input\r\n                  #contentExcerpt=\"ngModel\"\r\n                  id=\"excerpt\"\r\n                  name=\"content.excerpt\"\r\n                  [(ngModel)]=\"post.content.excerpt\"\r\n                  type=\"text\"\r\n                  required>\r\n                <p *ngIf=\"contentExcerpt.errors?.required\" class=\"flash flash--error\">Say a few words about your blog post..</p>\r\n\r\n                <label for=\"html\">Content</label>\r\n                <quill-editor\r\n                  theme=\"bubble\"\r\n                  placeholder=\"Write your blog post here…\"\r\n                  [(ngModel)]=\"post.content.html\"\r\n                  name=\"content.html\"\r\n                  [modules]=\"quillConfig\"\r\n                >\r\n                </quill-editor>\r\n                <div class=\"post__buttons\">\r\n                  <button type=\"submit\" class=\"oval-button oval-button__fill oval-button__fill--success\" [disabled]=\"!updateBlogPostForm.form.valid\">Save</button> \r\n                  <button class=\"oval-button oval-button__outline oval-button__outline--grey\" (click)=\"onEdit()\">Cancel</button>\r\n                </div>\r\n            </form>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </article>\r\n\r\n    <aside class=\"col-md-12 col-lg-4\">\r\n      <p class=\"heading font-color--medium-grey\">Other Posts</p>\r\n      <ul>\r\n        <li><a href=\"\">Lorem ipsum dolor sit amet</a></li>\r\n        <li><a href=\"\">Consectetur adipisicing elit. Commodi quia omnis repudiandae animi unde.</a></li>\r\n        <li><a href=\"\"> iusto explicabo</a></li>\r\n        <li><a href=\"\">Dolore veritatis dolores similique?</a></li>\r\n        <li><a href=\"\"> Laboriosam quisquam ex inventore sit maxime quas.</a></li>\r\n      </ul>\r\n    </aside>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/containers/view-blog/view-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewBlogComponent = (function () {
    function ViewBlogComponent(postsService, route, location, usersService) {
        this.postsService = postsService;
        this.route = route;
        this.location = location;
        this.usersService = usersService;
        this.quillConfig = {
            toolbar: [
                [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['link']
            ]
        };
    }
    ViewBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editing = false;
        this.route.paramMap
            .switchMap(function (params) { return _this.postsService.getPostById(params.get('id')); })
            .subscribe(function (post) {
            _this.post = post;
            _this.self = _this.usersService.self(_this.post.author.userId);
            _this.getAuthor(post.author.userId);
        });
    };
    ViewBlogComponent.prototype.getAuthor = function (id) {
        var _this = this;
        this.usersService.getUserById(id)
            .then(function (user) { return _this.author = user; });
    };
    ViewBlogComponent.prototype.onEdit = function () {
        this.editing = !this.editing;
    };
    ViewBlogComponent.prototype.onDelete = function () {
        if (window.confirm('Do you really want to delete your post?')) {
            this.postsService.deletePostById(this.post._id, this.post.author.userId);
        }
    };
    ViewBlogComponent.prototype.onUpdatePost = function () {
        if (self) {
            this.postsService.updatePost(this.post);
            this.editing = false;
        }
        else {
            alert('Something is not right...');
        }
    };
    return ViewBlogComponent;
}());
ViewBlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-blog',
        template: __webpack_require__("../../../../../src/app/containers/view-blog/view-blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/view-blog/view-blog.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_posts_service__["a" /* PostsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_posts_service__["a" /* PostsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */]) === "function" && _d || Object])
], ViewBlogComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=view-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/view-demo/view-demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card__inner {\r\n    padding-top: 2rem;\r\n}\r\n\r\nh1 {\r\n    color: #88b2cc;\r\n    font-size: 3rem;\r\n    text-transform: uppercase;\r\n    border-right: 600px solid rgba(136, 178, 204, .2);\r\n    padding-right: 1rem;\r\n}\r\n\r\n.demo__first {\r\n    margin-top: 5.75rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.demo__button {\r\n    margin-bottom: 1.75rem;\r\n    display: block;\r\n    text-align: center;\r\n    height: 2.5rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/view-demo/view-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<app-breadcrumbs></app-breadcrumbs>\r\n<div class=\"container\">\r\n  <div class=\"row main\">\r\n\r\n    <article class=\"col-xs-12 col-md-12\">\r\n      <div class=\"card card__inner\">\r\n        <div class=\"box\">\r\n          <div class=\"row\">\r\n            <main class=\"col-xs-12 col-md-9\">\r\n              <h1>Big Vision</h1>\r\n              <img src=\"http://loveux.co/assets/meenk/grid.png\" alt=\"Rich experience with a variety of content types.\">\r\n            </main>\r\n\r\n            <aside class=\"col-xs-12 col-md-3\">\r\n              <p class=\"demo__first font-accent\">Try posting anonymously to the platform to see how it works.</p>\r\n              <a [routerLink]=\"['/demo/create']\" class=\"demo__button oval-button oval-button__outline oval-button__outline--success\">Demo Post</a>\r\n              <h2>PERSONAL</h2>\r\n              <hr class=\"hr\">\r\n              <p>Reviews, tutorials and daily looks! This is your personal space for all the amazing things you are into.</p>\r\n\r\n              <h2>EXCITING</h2>\r\n              <hr class=\"hr\">\r\n              <p>Find daily inspiration, meet like-minded creative types and collaborate on awesome projects.</p>\r\n\r\n              <h2>REWARDING</h2>\r\n              <hr class=\"hr\">\r\n              <p>Redeem your reward points for gifts from your favorite brands.</p>\r\n            </aside>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </article>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/containers/view-demo/view-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewDemoComponent = (function () {
    function ViewDemoComponent() {
    }
    ViewDemoComponent.prototype.ngOnInit = function () {
    };
    return ViewDemoComponent;
}());
ViewDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-demo',
        template: __webpack_require__("../../../../../src/app/containers/view-demo/view-demo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/view-demo/view-demo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ViewDemoComponent);

//# sourceMappingURL=view-demo.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/view-photo/view-photo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "hr {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.post__image {\r\n    width: 100%;\r\n    display: block;\r\n    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.card__photo {\r\n    border-radius: 0 0px 10px 10px;\r\n    min-height: initial;\r\n}\r\n\r\n@media only screen and (max-width: 64em) {\r\n    .card {\r\n        border-radius: 0;\r\n        box-shadow: none;\r\n        margin: 0 0 1rem 0;\r\n    }\r\n    .card__inner {\r\n        padding: 1.5rem;\r\n    }\r\n\r\n    .main {\r\n        margin-top: 0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/view-photo/view-photo.component.html":
/***/ (function(module, exports) {

module.exports = "<app-breadcrumbs></app-breadcrumbs>\r\n<div class=\"container\">\r\n  <div *ngIf=\"post\" class=\"row main\">\r\n\r\n      <article *ngIf=\"!editing\" class=\"col-xs-12 col-lg-8\">\r\n        <img class=\"post__image\" src=\"{{post.content.photoUrl}}\" alt=\"{{post.title}}\">\r\n        <div class=\"card card__photo card__inner\">\r\n          <hr class=\"hr\">\r\n          <h1>{{post.title}}</h1>\r\n          <p class=\"font-color--medium-grey\"> <span *ngIf=\"post.author.displayName\">by <a [routerLink]=\"['/profile', post.author.userId]\">{{post.author.displayName}}</a></span></p>\r\n          <div *ngIf=\"self\" class=\"post__buttons\">\r\n            <button class=\"oval-button oval-button__outline oval-button__outline--error\" (click)=\"onDelete()\">Delete</button>\r\n            <button class=\"oval-button oval-button__outline oval-button__outline--success\" (click)=\"onEdit()\">Edit</button>\r\n          </div>\r\n        </div>\r\n      </article>\r\n\r\n      <div *ngIf=\"editing\" class=\"col-xs-12 col-lg-8\">\r\n        <div class=\"card card__inner\">\r\n          <form\r\n                #updatePhotoPostForm=\"ngForm\" \r\n                (ngSubmit)=\"onUpdatePost()\">\r\n                <hr class=\"hr\">\r\n                <label for=\"title\">Title</label>\r\n                <input\r\n                  #title=\"ngModel\"\r\n                  id=\"title\"\r\n                  name=\"title\"\r\n                  [(ngModel)]=\"post.title\"\r\n                  type=\"text\"\r\n                  required>\r\n                <p *ngIf=\"title.errors?.required\" class=\"flash flash--error\">You need a title.</p>\r\n\r\n                <label for=\"photoUrl\">Photo Url</label>\r\n                <input\r\n                  #photoUrl=\"ngModel\"\r\n                  id=\"photoUrl\"\r\n                  name=\"content.photoUrl\"\r\n                  [(ngModel)]=\"post.content.photoUrl\"\r\n                  type=\"text\"\r\n                  required>\r\n                <p *ngIf=\"photoUrl.errors?.required\" class=\"flash flash--error\">Say a few words about your blog post..</p>\r\n\r\n                 <div class=\"post__buttons\">\r\n                  <button type=\"submit\" class=\"oval-button oval-button__fill oval-button__fill--success\" [disabled]=\"!updatePhotoPostForm.form.valid\">Save</button> \r\n                  <button class=\"oval-button oval-button__outline oval-button__outline--grey\" (click)=\"onEdit()\">Cancel</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <aside class=\"col-xs-12 col-lg-4\">\r\n        <p class=\"heading font-color--medium-grey\">Other Posts</p>\r\n        <ul>\r\n          <li><a href=\"\">Lorem ipsum dolor sit amet</a></li>\r\n          <li><a href=\"\">Consectetur adipisicing elit. Commodi quia omnis repudiandae animi unde.</a></li>\r\n          <li><a href=\"\"> iusto explicabo</a></li>\r\n          <li><a href=\"\">Dolore veritatis dolores similique?</a></li>\r\n          <li><a href=\"\"> Laboriosam quisquam ex inventore sit maxime quas.</a></li>\r\n        </ul>\r\n\r\n      </aside>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/containers/view-photo/view-photo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPhotoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewPhotoComponent = (function () {
    function ViewPhotoComponent(postsService, route, location, usersService) {
        this.postsService = postsService;
        this.route = route;
        this.location = location;
        this.usersService = usersService;
    }
    ViewPhotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editing = false;
        this.route.paramMap
            .switchMap(function (params) { return _this.postsService.getPostById(params.get('id')); })
            .subscribe(function (post) {
            _this.post = post;
            _this.self = _this.usersService.self(_this.post.author.userId);
        });
    };
    ViewPhotoComponent.prototype.onEdit = function () {
        this.editing = !this.editing;
    };
    ViewPhotoComponent.prototype.onDelete = function () {
        if (window.confirm('Do you really want to delete your post?')) {
            this.postsService.deletePostById(this.post._id, this.post.author.userId);
        }
    };
    ViewPhotoComponent.prototype.onUpdatePost = function () {
        if (self) {
            this.postsService.updatePost(this.post);
            this.editing = false;
        }
        else {
            alert('Something is not right...');
        }
    };
    return ViewPhotoComponent;
}());
ViewPhotoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-photo',
        template: __webpack_require__("../../../../../src/app/containers/view-photo/view-photo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/view-photo/view-photo.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_posts_service__["a" /* PostsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_posts_service__["a" /* PostsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */]) === "function" && _d || Object])
], ViewPhotoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=view-photo.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/card.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardDirective = (function () {
    function CardDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    return CardDirective;
}());
CardDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[card-directive]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object])
], CardDirective);

var _a;
//# sourceMappingURL=card.directive.js.map

/***/ }),

/***/ "../../../../../src/app/models/post.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=post.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(usersService, router) {
        this.usersService = usersService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.usersService.authenticated()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/card.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_card_blog_card_blog_component__ = __webpack_require__("../../../../../src/app/components/card-blog/card-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_card_photo_card_photo_component__ = __webpack_require__("../../../../../src/app/components/card-photo/card-photo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_card_card_item__ = __webpack_require__("../../../../../src/app/components/card/card-item.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CardService = (function () {
    function CardService() {
    }
    CardService.prototype.renderCard = function (type, post) {
        if (type === 'blog') {
            return new __WEBPACK_IMPORTED_MODULE_3__components_card_card_item__["a" /* CardItem */](__WEBPACK_IMPORTED_MODULE_1__components_card_blog_card_blog_component__["a" /* CardBlogComponent */], post);
        }
        if (type === 'photo') {
            return new __WEBPACK_IMPORTED_MODULE_3__components_card_card_item__["a" /* CardItem */](__WEBPACK_IMPORTED_MODULE_2__components_card_photo_card_photo_component__["a" /* CardPhotoComponent */], post);
        }
    };
    return CardService;
}());
CardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], CardService);

//# sourceMappingURL=card.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/posts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// @TODO refactor for production
var API_URL = 'https://protected-tor-84468.herokuapp.com/api';
var PostsService = (function () {
    function PostsService(http, usersService, router) {
        this.http = http;
        this.usersService = usersService;
        this.router = router;
    }
    PostsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PostsService.prototype.getPosts = function () {
        return this.http.get(API_URL + '/posts')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // @TODO Add format guards
    PostsService.prototype.getPostById = function (id) {
        return this.http.get(API_URL + "/posts/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PostsService.prototype.getPostsByUserId = function (id) {
        return this.http.get(API_URL + "/posts/user/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PostsService.prototype.deletePostById = function (id, authorId) {
        var _this = this;
        var currentUserId = this.usersService.getCurrentUserId();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.usersService.getTokenId()
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        if (currentUserId === authorId) {
            return this.http.delete(API_URL + "/posts/" + id, options)
                .toPromise()
                .then(function (response) {
                _this.router.navigate(['/']);
            })
                .catch(this.handleError);
        }
    };
    PostsService.prototype.createPost = function (body) {
        var _bodyJSON = JSON.stringify(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.usersService.getTokenId()
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        if (this.usersService.authenticated()) {
            return this.http.post(API_URL + "/posts/", _bodyJSON, options)
                .toPromise()
                .then(function (response) { return response.json(); })
                .catch(this.handleError);
        }
        else {
            console.log('Boo! You are not logged in.');
        }
    };
    // CREATE DEMO POST
    PostsService.prototype.createDemoPost = function (body) {
        var _bodyJSON = JSON.stringify(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(API_URL + "/posts/demo", _bodyJSON, options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // --------------------------------------------------------------------------
    PostsService.prototype.updatePost = function (body) {
        var _id = body._id;
        var _bodyJSON = JSON.stringify(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.usersService.getTokenId()
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        if (this.usersService.authenticated()) {
            return this.http.put(API_URL + "/posts/" + _id, _bodyJSON, options)
                .toPromise()
                .then(function (response) { return response.json(); })
                .catch(this.handleError);
        }
        else {
            console.log('Boo! You are not logged in.');
        }
    };
    return PostsService;
}());
PostsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], PostsService);

var _a, _b, _c;
//# sourceMappingURL=posts.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// @TODO refactor for production
var API_URL = 'https://protected-tor-84468.herokuapp.com/api';
var UsersService = (function () {
    // self$ = new BehaviorSubject<boolean>(false);
    function UsersService(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.lock = new Auth0Lock('r0U8PcRtw9LMakkw0MV9mjnHYb7gk7e3', 'riacarmin.auth0.com');
        this.loggedIn$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](this.authenticated());
        this.currentUser$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.setLoggedIn(this.authenticated());
        this.lock.on('authenticated', function (authResult) {
            _this.lock.getUserInfo(authResult.accessToken, function (error, profile) {
                if (error) {
                    console.log(error);
                    _this.router.navigate(['/']);
                    return;
                }
                localStorage.setItem('idToken', authResult.idToken);
                localStorage.setItem('accessToken', authResult.accessToken);
                localStorage.setItem('profile', JSON.stringify(profile));
                _this.setLoggedIn(_this.authenticated());
                _this.createUser(profile);
            });
        });
    }
    UsersService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    UsersService.prototype.setLoggedIn = function (value) {
        this.loggedIn$.next(value);
        this.loggedIn = value;
    };
    UsersService.prototype.setCurrentUser = function (user) {
        this.currentUser$.next(user);
        this.currentUser = user;
    };
    UsersService.prototype.getCurrentUserId = function () {
        if (this.authenticated()) {
            var _profile = JSON.parse(localStorage.getItem('profile'));
            return _profile.identities[0].user_id;
        }
    };
    UsersService.prototype.self = function (userId) {
        var _currentUser = this.getCurrentUserId();
        return _currentUser === userId;
    };
    // setSelf(userId: string) {
    //   currentUser$ last value === getTokenID?
    // }
    UsersService.prototype.authenticated = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["tokenNotExpired"])('idToken');
    };
    UsersService.prototype.login = function () {
        this.lock.show(function (error, profile, id_token) {
            if (error) {
                console.log(error);
            }
        });
    };
    UsersService.prototype.logout = function () {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('idToken');
        localStorage.removeItem('profile');
        this.router.navigate(['/']);
        this.setLoggedIn(this.authenticated());
    };
    UsersService.prototype.getTokenId = function () {
        return localStorage.getItem('idToken');
    };
    UsersService.prototype.getUserById = function (id) {
        return this.http.get(API_URL + "/users/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UsersService.prototype.createUser = function (auth0Profile) {
        var _this = this;
        var _body = {
            auth0_id: auth0Profile.identities[0].user_id,
            email: auth0Profile.email,
            name: {
                firstName: auth0Profile.nickname
            },
            picture: auth0Profile.picture
        };
        var _bodyJSON = JSON.stringify(_body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.getTokenId()
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        if (this.authenticated()) {
            return this.http.post(API_URL + "/users/", _bodyJSON, options)
                .toPromise()
                .then(function (response) { return _this.setCurrentUser(response.json()); })
                .catch(this.handleError);
        }
        else {
            console.log('Boo! You are not logged in.');
        }
    };
    UsersService.prototype.updateUser = function (user) {
        var _this = this;
        var _id = this.getCurrentUserId();
        var _bodyJSON = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.getTokenId()
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        if (this.authenticated()) {
            return this.http.put(API_URL + "/users/" + _id, _bodyJSON, options)
                .toPromise()
                .then(function (response) { return _this.setCurrentUser(response.json()); })
                .catch(this.handleError);
        }
        else {
            console.log('Boo! You are not logged in.');
        }
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], UsersService);

var _a, _b;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map