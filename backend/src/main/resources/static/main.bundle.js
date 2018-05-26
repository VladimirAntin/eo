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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_login_component__ = __webpack_require__("./src/app/page/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_home_home_component__ = __webpack_require__("./src/app/page/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_not_found_not_found_component__ = __webpack_require__("./src/app/page/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_users_users_component__ = __webpack_require__("./src/app/page/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_users_user_user_component__ = __webpack_require__("./src/app/page/users/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_predmeti_predmeti_component__ = __webpack_require__("./src/app/page/predmeti/predmeti.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_predmeti_predmet_predmet_component__ = __webpack_require__("./src/app/page/predmeti/predmet/predmet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_inbox_inbox_component__ = __webpack_require__("./src/app/page/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_inbox_chat_chat_component__ = __webpack_require__("./src/app/page/inbox/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page_group_chat_group_chat_component__ = __webpack_require__("./src/app/page/group-chat/group-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_codebook_codebook_component__ = __webpack_require__("./src/app/page/codebook/codebook.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__page_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__page_login_login_component__["a" /* LoginComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_5__page_users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]] },
    { path: 'users/:id', component: __WEBPACK_IMPORTED_MODULE_6__page_users_user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]] },
    { path: 'predmeti', component: __WEBPACK_IMPORTED_MODULE_7__page_predmeti_predmeti_component__["a" /* PredmetiComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]] },
    { path: 'predmeti/:id', component: __WEBPACK_IMPORTED_MODULE_8__page_predmeti_predmet_predmet_component__["a" /* PredmetComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]] },
    { path: 'inbox', component: __WEBPACK_IMPORTED_MODULE_9__page_inbox_inbox_component__["a" /* InboxComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]] },
    { path: 'inbox/:id', component: __WEBPACK_IMPORTED_MODULE_10__page_inbox_chat_chat_component__["a" /* ChatComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]] },
    { path: 'group_chat', component: __WEBPACK_IMPORTED_MODULE_11__page_group_chat_group_chat_component__["a" /* GroupChatComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]] },
    { path: 'codebook', component: __WEBPACK_IMPORTED_MODULE_12__page_codebook_codebook_component__["a" /* CodebookComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__page_not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_login_login_component__ = __webpack_require__("./src/app/page/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_home_home_component__ = __webpack_require__("./src/app/page/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navigation_navigation_component__ = __webpack_require__("./src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_not_found_not_found_component__ = __webpack_require__("./src/app/page/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__page_users_users_component__ = __webpack_require__("./src/app/page/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__page_users_user_user_component__ = __webpack_require__("./src/app/page/users/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_search_pipe__ = __webpack_require__("./src/app/pipes/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_zvanje_service__ = __webpack_require__("./src/app/service/zvanje.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__service_dokument_service__ = __webpack_require__("./src/app/service/dokument.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__page_users_user_add_doc_add_doc_component__ = __webpack_require__("./src/app/page/users/user/add-doc/add-doc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__service_tip_dokumenta_service__ = __webpack_require__("./src/app/service/tip-dokumenta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__page_users_add_user_add_user_component__ = __webpack_require__("./src/app/page/users/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__page_users_edit_user_edit_user_component__ = __webpack_require__("./src/app/page/users/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__page_users_change_password_change_password_component__ = __webpack_require__("./src/app/page/users/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__page_predmeti_predmeti_component__ = __webpack_require__("./src/app/page/predmeti/predmeti.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__service_predmet_service__ = __webpack_require__("./src/app/service/predmet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__page_predmeti_add_edit_predmet_add_edit_predmet_component__ = __webpack_require__("./src/app/page/predmeti/add-edit-predmet/add-edit-predmet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__page_predmeti_predmet_predmet_component__ = __webpack_require__("./src/app/page/predmeti/predmet/predmet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__page_predmeti_add_edit_aktivnost_add_edit_aktivnost_component__ = __webpack_require__("./src/app/page/predmeti/add-edit-aktivnost/add-edit-aktivnost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__service_aktivnost_service__ = __webpack_require__("./src/app/service/aktivnost.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__service_nastavnik_service__ = __webpack_require__("./src/app/service/nastavnik.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__service_ucenik_service__ = __webpack_require__("./src/app/service/ucenik.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__page_predmeti_add_ucenik_nastavnik_add_ucenik_nastavnik_component__ = __webpack_require__("./src/app/page/predmeti/add-ucenik-nastavnik/add-ucenik-nastavnik.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__service_uplata_service__ = __webpack_require__("./src/app/service/uplata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__page_predmeti_add_uplata_add_uplata_component__ = __webpack_require__("./src/app/page/predmeti/add-uplata/add-uplata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__service_file_service__ = __webpack_require__("./src/app/service/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__page_users_dialog_document_dialog_document_component__ = __webpack_require__("./src/app/page/users/dialog-document/dialog-document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__service_message_service__ = __webpack_require__("./src/app/service/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__page_inbox_inbox_component__ = __webpack_require__("./src/app/page/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__page_inbox_chat_chat_component__ = __webpack_require__("./src/app/page/inbox/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__page_group_chat_group_chat_component__ = __webpack_require__("./src/app/page/group-chat/group-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__service_chat_service__ = __webpack_require__("./src/app/service/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__service_tip_aktivnosti_service__ = __webpack_require__("./src/app/service/tip-aktivnosti.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__interceptor_token_interceptor__ = __webpack_require__("./src/app/interceptor/token-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__page_codebook_codebook_component__ = __webpack_require__("./src/app/page/codebook/codebook.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__page_codebook_codebook_standard_codebook_standard_component__ = __webpack_require__("./src/app/page/codebook/codebook-standard/codebook-standard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__page_codebook_codebook_standard_add_codebook_standard_add_component__ = __webpack_require__("./src/app/page/codebook/codebook-standard-add/codebook-standard-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















































Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* enableProdMode */])();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_3__page_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_7__page_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_11__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__page_not_found_not_found_component__["a" /* NotFoundComponent */], __WEBPACK_IMPORTED_MODULE_13__page_users_users_component__["a" /* UsersComponent */], __WEBPACK_IMPORTED_MODULE_14__page_users_user_user_component__["a" /* UserComponent */], __WEBPACK_IMPORTED_MODULE_15__pipes_search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_19__page_users_user_add_doc_add_doc_component__["a" /* AddDocComponent */], __WEBPACK_IMPORTED_MODULE_21__page_users_add_user_add_user_component__["a" /* AddUserComponent */], __WEBPACK_IMPORTED_MODULE_22__page_users_edit_user_edit_user_component__["a" /* EditUserComponent */], __WEBPACK_IMPORTED_MODULE_23__page_users_change_password_change_password_component__["a" /* ChangePasswordComponent */], __WEBPACK_IMPORTED_MODULE_24__page_predmeti_predmeti_component__["a" /* PredmetiComponent */],
                __WEBPACK_IMPORTED_MODULE_26__page_predmeti_add_edit_predmet_add_edit_predmet_component__["a" /* AddEditPredmetComponent */], __WEBPACK_IMPORTED_MODULE_27__page_predmeti_predmet_predmet_component__["a" /* PredmetComponent */], __WEBPACK_IMPORTED_MODULE_28__page_predmeti_add_edit_aktivnost_add_edit_aktivnost_component__["a" /* AddEditAktivnostComponent */], __WEBPACK_IMPORTED_MODULE_32__page_predmeti_add_ucenik_nastavnik_add_ucenik_nastavnik_component__["a" /* AddUcenikNastavnikComponent */],
                __WEBPACK_IMPORTED_MODULE_34__page_predmeti_add_uplata_add_uplata_component__["a" /* AddUplataComponent */],
                __WEBPACK_IMPORTED_MODULE_36__page_users_dialog_document_dialog_document_component__["a" /* DialogDocumentComponent */],
                __WEBPACK_IMPORTED_MODULE_38__page_inbox_inbox_component__["a" /* InboxComponent */],
                __WEBPACK_IMPORTED_MODULE_39__page_inbox_chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_40__page_group_chat_group_chat_component__["a" /* GroupChatComponent */],
                __WEBPACK_IMPORTED_MODULE_44__page_codebook_codebook_component__["a" /* CodebookComponent */],
                __WEBPACK_IMPORTED_MODULE_45__page_codebook_codebook_standard_codebook_standard_component__["a" /* CodebookStandardComponent */],
                __WEBPACK_IMPORTED_MODULE_46__page_codebook_codebook_standard_add_codebook_standard_add_component__["a" /* CodebookStandardAddComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["j" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["n" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["q" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["v" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["m" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["t" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["w" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["u" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["k" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["r" /* MatSortModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatExpansionModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["j" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["n" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["q" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["v" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["m" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["t" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["w" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["u" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["k" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatExpansionModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_19__page_users_user_add_doc_add_doc_component__["a" /* AddDocComponent */], __WEBPACK_IMPORTED_MODULE_21__page_users_add_user_add_user_component__["a" /* AddUserComponent */], __WEBPACK_IMPORTED_MODULE_22__page_users_edit_user_edit_user_component__["a" /* EditUserComponent */], __WEBPACK_IMPORTED_MODULE_23__page_users_change_password_change_password_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_26__page_predmeti_add_edit_predmet_add_edit_predmet_component__["a" /* AddEditPredmetComponent */], __WEBPACK_IMPORTED_MODULE_28__page_predmeti_add_edit_aktivnost_add_edit_aktivnost_component__["a" /* AddEditAktivnostComponent */], __WEBPACK_IMPORTED_MODULE_32__page_predmeti_add_ucenik_nastavnik_add_ucenik_nastavnik_component__["a" /* AddUcenikNastavnikComponent */], __WEBPACK_IMPORTED_MODULE_34__page_predmeti_add_uplata_add_uplata_component__["a" /* AddUplataComponent */],
                __WEBPACK_IMPORTED_MODULE_36__page_users_dialog_document_dialog_document_component__["a" /* DialogDocumentComponent */], __WEBPACK_IMPORTED_MODULE_46__page_codebook_codebook_standard_add_codebook_standard_add_component__["a" /* CodebookStandardAddComponent */]],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_43__interceptor_token_interceptor__["a" /* TokenInterceptor */], multi: true },
                __WEBPACK_IMPORTED_MODULE_47__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_9__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_17__service_zvanje_service__["a" /* ZvanjeService */], __WEBPACK_IMPORTED_MODULE_18__service_dokument_service__["a" /* DokumentService */], __WEBPACK_IMPORTED_MODULE_20__service_tip_dokumenta_service__["a" /* TipDokumentaService */], __WEBPACK_IMPORTED_MODULE_25__service_predmet_service__["a" /* PredmetService */], __WEBPACK_IMPORTED_MODULE_42__service_tip_aktivnosti_service__["a" /* TipAktivnostiService */],
                __WEBPACK_IMPORTED_MODULE_29__service_aktivnost_service__["a" /* AktivnostService */], __WEBPACK_IMPORTED_MODULE_30__service_nastavnik_service__["a" /* NastavnikService */], __WEBPACK_IMPORTED_MODULE_31__service_ucenik_service__["a" /* UcenikService */], __WEBPACK_IMPORTED_MODULE_33__service_uplata_service__["a" /* UplataService */], __WEBPACK_IMPORTED_MODULE_35__service_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_37__service_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_41__service_chat_service__["a" /* ChatService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_auth, router) {
        this._auth = _auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this._auth.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/interceptor/token-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor() {
    }
    TokenInterceptor.prototype.intercept = function (req, next) {
        req = req.clone({
            setHeaders: {
                Authorization: "jwt " + localStorage.getItem('token')
            }
        });
        return next.handle(req);
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/model/aktivnost.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Aktivnost; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tip_aktivnosti__ = __webpack_require__("./src/app/model/tip-aktivnosti.ts");

var Aktivnost = /** @class */ (function () {
    function Aktivnost() {
        this.id = 0;
        this.brojBodova = 0;
        this.predmet = 0;
        this.ucenik = 0;
        this.tipAktivnosti = new __WEBPACK_IMPORTED_MODULE_0__tip_aktivnosti__["a" /* TipAktivnosti */]();
    }
    return Aktivnost;
}());



/***/ }),

/***/ "./src/app/model/chat.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_api__ = __webpack_require__("./src/app/model/user-api.ts");

var Chat = /** @class */ (function () {
    function Chat() {
        this.id = 0;
        this.text = '';
        this.seen = false;
        this.sender = new __WEBPACK_IMPORTED_MODULE_0__user_api__["a" /* UserApi */]();
    }
    return Chat;
}());



/***/ }),

/***/ "./src/app/model/dokument.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dokument; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tip_dokumenta__ = __webpack_require__("./src/app/model/tip-dokumenta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ucenik__ = __webpack_require__("./src/app/model/ucenik.ts");


var Dokument = /** @class */ (function () {
    function Dokument() {
        this.id = 0;
        this.ucenik = new __WEBPACK_IMPORTED_MODULE_1__ucenik__["a" /* Ucenik */]();
        this.tipDokumenta = new __WEBPACK_IMPORTED_MODULE_0__tip_dokumenta__["a" /* TipDokumenta */]();
    }
    Dokument.prototype.setUcenik = function (ucenik) {
        this.ucenik = ucenik;
        return this;
    };
    return Dokument;
}());



/***/ }),

/***/ "./src/app/model/message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = /** @class */ (function () {
    function Message() {
        this.id = 0;
        this.text = '';
        this.seen = false;
        this.sender = 0;
        this.recipient = 0;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/model/predmet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Predmet; });
var Predmet = /** @class */ (function () {
    function Predmet() {
        this.id = 0;
        this.naziv = '';
        this.opis = '';
        this.brojCasovaPredavanja = 1;
        this.brojCasovaVezbi = 1;
        this.aktivnosti = [];
    }
    return Predmet;
}());



/***/ }),

/***/ "./src/app/model/tip-aktivnosti.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipAktivnosti; });
var TipAktivnosti = /** @class */ (function () {
    function TipAktivnosti() {
        this.id = 0;
        this.naziv = '';
    }
    return TipAktivnosti;
}());



/***/ }),

/***/ "./src/app/model/tip-dokumenta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipDokumenta; });
var TipDokumenta = /** @class */ (function () {
    function TipDokumenta() {
        this.id = 0;
        this.naziv = '';
    }
    return TipDokumenta;
}());



/***/ }),

/***/ "./src/app/model/ucenik.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ucenik; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_api__ = __webpack_require__("./src/app/model/user-api.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Ucenik = /** @class */ (function (_super) {
    __extends(Ucenik, _super);
    function Ucenik() {
        var _this = _super.call(this) || this;
        _this.brojIndexa = '';
        _this.aktivnosti = [];
        _this.type = 'Ucenik';
        return _this;
    }
    return Ucenik;
}(__WEBPACK_IMPORTED_MODULE_0__user_api__["a" /* UserApi */]));



/***/ }),

/***/ "./src/app/model/uplata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Uplata; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__predmet__ = __webpack_require__("./src/app/model/predmet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ucenik__ = __webpack_require__("./src/app/model/ucenik.ts");


var Uplata = /** @class */ (function () {
    function Uplata() {
        this.id = 0;
        this.suma = 0;
        this.ucenik = new __WEBPACK_IMPORTED_MODULE_1__ucenik__["a" /* Ucenik */]();
        this.predmet = new __WEBPACK_IMPORTED_MODULE_0__predmet__["a" /* Predmet */]();
    }
    return Uplata;
}());



/***/ }),

/***/ "./src/app/model/user-api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserApi; });
var UserApi = /** @class */ (function () {
    function UserApi() {
        this.id = 0;
        this.type = 'User';
        this.ime = '';
        this.prezime = '';
        this.username = '';
        this.email = '';
        this.password = '';
        this.online = false;
        this.lastOnline = new Date();
        this.authorities = [];
        this.picture = '';
    }
    UserApi.prototype.isNastavnik = function () {
        return this.type === 'Nastavnik';
    };
    UserApi.prototype.isUcenik = function () {
        return this.type === 'Ucenik';
    };
    UserApi.prototype.isAdmin = function () {
        return this.type === 'User';
    };
    return UserApi;
}());



/***/ }),

/***/ "./src/app/model/user-password.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPassword; });
var UserPassword = /** @class */ (function () {
    function UserPassword() {
        this.oldPassword = '';
        this.newPassword = '';
        this.newPasswordRepeat = '';
    }
    return UserPassword;
}());



/***/ }),

/***/ "./src/app/model/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.username = '';
        this.password = '';
    }
    return User;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/***/ (function(module, exports) {

module.exports = "mat-nav-list {\n  width: 15%;\n  height: 96vh;\n  padding: 2em;\n  background-color: rgba(229,57,53,0.84);\n  position: fixed;\n  border-radius: 30px;\n}\nmat-toolbar {\n  float: right;\n  background-color: white;\n  opacity: 0.94;\n  width: 84%;\n  border-radius: 30px 30px 0 0;\n}\nmat-toolbar button {\n  margin: 0.5em;\n  border-radius: 2em;\n}\n@media screen and (max-width: 80em){\n  mat-nav-list{\n    display: none;\n  }\n  mat-toolbar {\n    width: 100%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"_router.url!=='/login'\">\n  <mat-nav-list class=\"mat-elevation-z24\">\n    <a matSubheader routerLink=\"/\">\n      <img width=\"25\" alt=\"E-learn\" src=\"../../assets/student.png\">\n      E-learn\n    </a>\n    <mat-divider></mat-divider>\n    <br>\n    <mat-spinner *ngIf=\"me!=null && (!nav_items || nav_items.length==0)\"></mat-spinner>\n    <button *ngFor=\"let nav of nav_items\" [routerLink]=\"[nav.route]\" class=\"btn btn-block\"\n            [ngClass]=\"{'btn-outline-dark':_router.url!==nav.route,\n                'btn-dark':_router.url===nav.route}\">\n      <mat-icon matListIcon>{{nav.icon}}</mat-icon>\n      {{nav.name}} <span class=\"badge badge-pill badge-light\" *ngIf=\"nav.route==='/inbox'\">{{messages}}</span>\n    </button>\n  </mat-nav-list>\n  <mat-toolbar>\n    <mat-toolbar-row>\n      <div class=\"mobile\">\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n      <span class=\"spacer\"></span>\n      <div class=\"mobile-false\">\n        <button mat-raised-button color=\"primary\" (click)=\"changePassword()\">\n          <mat-icon>edit</mat-icon>\n          Change password\n        </button>\n        <button mat-raised-button color=\"primary\" (click)=\"updateProfile()\">\n          <mat-icon>edit</mat-icon>\n          Edit profile\n        </button>\n        <button mat-raised-button (click)=\"logout()\" color=\"warn\">\n          Logout\n          <mat-icon>input</mat-icon>\n        </button>\n      </div>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item *ngFor=\"let nav of nav_items\" [routerLink]=\"[nav.route]\">\n          <mat-icon matListIcon>{{nav.icon}}</mat-icon>\n          {{nav.name}} <span class=\"badge badge-pill badge-light\" *ngIf=\"nav.route==='/inbox'\">{{messages}}</span>\n        </button>\n        <mat-divider></mat-divider>\n        <button mat-menu-item class=\"text-primary\" (click)=\"changePassword()\">\n          <mat-icon>edit</mat-icon>\n          Change password\n        </button>\n        <button mat-menu-item class=\"text-primary\" (click)=\"updateProfile()\">\n          <mat-icon>edit</mat-icon>\n          Edit profile\n        </button>\n        <button mat-menu-item (click)=\"logout()\" class=\"text-danger\">\n          Logout\n          <mat-icon>input</mat-icon>\n        </button>\n      </mat-menu>\n    </mat-toolbar-row>\n  </mat-toolbar>\n</div>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_user_api__ = __webpack_require__("./src/app/model/user-api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_user_password__ = __webpack_require__("./src/app/model/user-password.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_message_service__ = __webpack_require__("./src/app/service/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_users_edit_user_edit_user_component__ = __webpack_require__("./src/app/page/users/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_users_change_password_change_password_component__ = __webpack_require__("./src/app/page/users/change-password/change-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(authService, _router, userService, snackBar, dialog, messageService) {
        var _this = this;
        this.authService = authService;
        this._router = _router;
        this.userService = userService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.messageService = messageService;
        this.nav_items = [];
        this.messages = 0;
        this.serverUrl = '/chatting/ws';
        this.stompClient = null;
        this._router.events.filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (event) {
            if (event.url !== '/login') {
                _this.init();
            }
        });
    }
    NavigationComponent.prototype.unloadHander = function (event) {
        this.authService.offline().subscribe();
    };
    NavigationComponent.prototype.init = function () {
        if (this._router.url !== '/login') {
            this, this.nav_items = [];
            if (this.nav_items.length === 0) {
                this.navItems();
                this.getMe();
                this.countNewMessage();
            }
        }
    };
    NavigationComponent.prototype.connect = function () {
        var socket = new this.sockjsClient(this.serverUrl);
        this.stompClient = this.Stomp.over(socket);
        this.stompClient.debug = null;
        var that = this;
        this.stompClient.connect({ 'Authorization': localStorage.getItem('token') }, function () {
            that.stompClient.subscribe("/chatting/topic/" + that.me.id, function () { return that.countNewMessage(); }, { 'Authorization': localStorage.getItem('token') });
        });
    };
    NavigationComponent.prototype.countNewMessage = function () {
        var _this = this;
        this.messageService.countUnread().subscribe(function (data) { return _this.messages = data; });
    };
    NavigationComponent.prototype.navItems = function () {
        var _this = this;
        this.authService.nav_items().subscribe(function (data) {
            _this.nav_items = data;
        }, function () { return _this.nav_items = []; });
    };
    NavigationComponent.prototype.getMe = function () {
        var _this = this;
        this.authService.me().subscribe(function (data) {
            _this.me = data;
            if (!_this.stompClient) {
                _this.Stomp = __webpack_require__("./node_modules/stompjs/index.js");
                _this.sockjsClient = __webpack_require__("./node_modules/sockjs-client/lib/entry.js");
                _this.connect();
            }
        }, function (err) {
            _this._router.navigateByUrl('/login');
            _this.authService.removeToken();
        });
    };
    NavigationComponent.prototype.logout = function () {
        var _this = this;
        this.authService.offline().subscribe(function () {
            _this.authService.logout().subscribe(function () {
                _this.stompClient = null;
                _this._router.navigateByUrl('/login');
            });
        });
    };
    NavigationComponent.prototype.updateProfile = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__page_users_edit_user_edit_user_component__["a" /* EditUserComponent */], {
            data: {
                user: Object.assign(new __WEBPACK_IMPORTED_MODULE_1__model_user_api__["a" /* UserApi */](), this.me),
                me: Object.assign(new __WEBPACK_IMPORTED_MODULE_1__model_user_api__["a" /* UserApi */](), this.me)
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.userService.update(result.user).subscribe(function (data) {
                    if (_this.me.username !== data.username) {
                        _this.snackBar.open('Success changed! You changed the username, please login', 'Ok', {
                            duration: 4000, verticalPosition: 'top'
                        });
                        setTimeout(function () {
                            _this.authService.logout().subscribe(function () {
                                _this._router.navigateByUrl('/login');
                            });
                        }, 4000);
                    }
                    else {
                        _this.me = data;
                        if (window.location.href.lastIndexOf("users/" + _this.me.username) !== -1 ||
                            window.location.href.lastIndexOf('users') !== -1) {
                            window.location.reload();
                        }
                        _this.snackBar.open('Success changed!', 'Ok', {
                            duration: 3000, verticalPosition: 'top'
                        });
                    }
                }, function () {
                    _this.snackBar.open("Error, user with username " + result.user.username + " is already exists", 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    NavigationComponent.prototype.changePassword = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__page_users_change_password_change_password_component__["a" /* ChangePasswordComponent */], {
            panelClass: 'dialog-600x400',
            data: { user: new __WEBPACK_IMPORTED_MODULE_5__model_user_password__["a" /* UserPassword */](), admin: false }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.userService.changePassword(_this.me.id, result.user).subscribe(function () {
                    _this.snackBar.open('Successfully changed!', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                }, function () {
                    _this.snackBar.open('Error with change password!', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:unload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavigationComponent.prototype, "unloadHander", null);
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_6__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_8__service_message_service__["a" /* MessageService */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/page/codebook/codebook-standard-add/codebook-standard-add.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/codebook/codebook-standard-add/codebook-standard-add.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.title}}</h2>\n<mat-dialog-content>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Naziv\" [(ngModel)]=\"data.object.naziv\">\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-icon-button [mat-dialog-close]=\"{result:true, object:data.object}\"\n          color=\"primary\" matTooltip=\"Add\" [disabled]=\"data.object.naziv.length<2\">\n    <mat-icon>add</mat-icon>\n  </button>\n  <span class=\"spacer\"></span>\n  <button mat-icon-button mat-dialog-close matTooltip=\"Close\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/page/codebook/codebook-standard-add/codebook-standard-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodebookStandardAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CodebookStandardAddComponent = /** @class */ (function () {
    function CodebookStandardAddComponent(data) {
        this.data = data;
    }
    CodebookStandardAddComponent.prototype.ngOnInit = function () {
    };
    CodebookStandardAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-codebook-standard-add',
            template: __webpack_require__("./src/app/page/codebook/codebook-standard-add/codebook-standard-add.component.html"),
            styles: [__webpack_require__("./src/app/page/codebook/codebook-standard-add/codebook-standard-add.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], CodebookStandardAddComponent);
    return CodebookStandardAddComponent;
}());



/***/ }),

/***/ "./src/app/page/codebook/codebook-standard/codebook-standard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/codebook/codebook-standard/codebook-standard.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"objects\">\n  <button mat-mini-fab color=\"primary\" matTooltip=\"Add new\" (click)=\"add()\">\n    <mat-icon>add</mat-icon>\n  </button>\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>Naziv</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let o of objects\">\n        <td>{{o.naziv}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/page/codebook/codebook-standard/codebook-standard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodebookStandardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__codebook_standard_add_codebook_standard_add_component__ = __webpack_require__("./src/app/page/codebook/codebook-standard-add/codebook-standard-add.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CodebookStandardComponent = /** @class */ (function () {
    function CodebookStandardComponent(dialog, snackBar) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.objects = [];
    }
    CodebookStandardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll().subscribe(function (data) { return _this.objects = data; });
    };
    CodebookStandardComponent.prototype.add = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__codebook_standard_add_codebook_standard_add_component__["a" /* CodebookStandardAddComponent */], {
            panelClass: 'dialog-600x400',
            data: {
                title: this.edit_title, object: { id: 0, naziv: '' }
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.service.add(result.object).subscribe(function (data) {
                    _this.objects.push(data);
                    _this.snackBar.open('Successfully added!', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                }, function () {
                    _this.snackBar.open("Error with add new " + _this.edit_title, 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CodebookStandardComponent.prototype, "service", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CodebookStandardComponent.prototype, "edit_title", void 0);
    CodebookStandardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-codebook-standard',
            template: __webpack_require__("./src/app/page/codebook/codebook-standard/codebook-standard.component.html"),
            styles: [__webpack_require__("./src/app/page/codebook/codebook-standard/codebook-standard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSnackBar */]])
    ], CodebookStandardComponent);
    return CodebookStandardComponent;
}());



/***/ }),

/***/ "./src/app/page/codebook/codebook.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/codebook/codebook.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\n<div *ngIf=\"isAdmin\">\n  <mat-tab-group>\n    <mat-tab *ngFor=\"let t of tabs\" label=\"{{t.label}}\">\n      <app-codebook-standard [service]=\"t.service\" [edit_title]=\"t.label\"></app-codebook-standard>\n    </mat-tab>\n  </mat-tab-group>\n\n</div>\n<app-not-found *ngIf=\"!isAdmin && !loading\" class=\"not-found\"></app-not-found>\n"

/***/ }),

/***/ "./src/app/page/codebook/codebook.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodebookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_tip_dokumenta_service__ = __webpack_require__("./src/app/service/tip-dokumenta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_tip_aktivnosti_service__ = __webpack_require__("./src/app/service/tip-aktivnosti.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_zvanje_service__ = __webpack_require__("./src/app/service/zvanje.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CodebookComponent = /** @class */ (function () {
    function CodebookComponent(tipDokumentaService, tipAktivnostiService, zvanjeService, _auth) {
        this.tipDokumentaService = tipDokumentaService;
        this.tipAktivnostiService = tipAktivnostiService;
        this.zvanjeService = zvanjeService;
        this._auth = _auth;
        this.tabs = [];
        this.isAdmin = false;
        this.loading = true;
    }
    CodebookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._auth.me().subscribe(function (data) {
            _this.loading = false;
            _this.isAdmin = data.type.toLowerCase() === 'user';
        });
        this.tabs = [
            { label: 'Tipovi Dokumenta', service: this.tipDokumentaService },
            { label: 'Tipovi Aktivnosti', service: this.tipAktivnostiService },
            { label: 'Zvanja', service: this.zvanjeService },
        ];
    };
    CodebookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-codebook',
            template: __webpack_require__("./src/app/page/codebook/codebook.component.html"),
            styles: [__webpack_require__("./src/app/page/codebook/codebook.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_tip_dokumenta_service__["a" /* TipDokumentaService */], __WEBPACK_IMPORTED_MODULE_2__service_tip_aktivnosti_service__["a" /* TipAktivnostiService */],
            __WEBPACK_IMPORTED_MODULE_3__service_zvanje_service__["a" /* ZvanjeService */], __WEBPACK_IMPORTED_MODULE_4__service_auth_service__["a" /* AuthService */]])
    ], CodebookComponent);
    return CodebookComponent;
}());



/***/ }),

/***/ "./src/app/page/group-chat/group-chat.component.css":
/***/ (function(module, exports) {

module.exports = "div.container-fluid{\n  width: 60%;\n}\n#messages{\n  padding: 2em;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 50vh;\n}\n@media screen and (max-width: 60em){\n  div.container-fluid{\n    width: 100%;\n  }\n\n}\n"

/***/ }),

/***/ "./src/app/page/group-chat/group-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <mat-spinner *ngIf=\"loading\"></mat-spinner>\n  <div id=\"messages\" class=\"container\" #messages [scrollTop]=\"messages.scrollHeight\">\n    <button class=\"btn btn-link btn-block\" (click)=\"seemore()\" *ngIf=\"chat.length!=total\">\n      See more ({{total-chat.length}})\n    </button>\n    <div *ngFor=\"let c of chat; let i = index; let first = first\" class=\"row\">\n      <button *ngIf=\"c!=null && me!=null && c.sender.id!==me.id && (chat[i>0?i-1:i].sender.id!=c.sender.id || first)\"\n              class=\"btn btn-link btn-sm col-4 offset-2\" [routerLink]=\"['/users',c.sender.username]\">\n        {{c.sender.ime + ' '+ c.sender.prezime}}\n      </button>\n      <h4 class=\"rounded font-16 col-8\" matTooltip=\"{{c.date | date: 'dd.MM.yyyy. HH:mm'}}\" *ngIf=\"me!=null\"\n          [ngClass]=\"{'badge-primary':me && (c.sender.id!==me.id),\n                'badge-dark offset-2':me && (c.sender.id===me.id)}\">\n        {{c.text}}\n      </h4>\n      <img [src]=\"me.href\" height=\"16\" *ngIf=\"c!=null && me!=null && c.sender.id===me.id && me.href\">\n    </div>\n  </div>\n  <div class=\"row\" (keypress)=\"clickEnter($event,newMessage)\">\n    <mat-form-field class=\"col-10\">\n      <textarea matInput placeholder=\"Message\" [(ngModel)]=\"newMessage.text\" style=\"resize: none\"></textarea>\n    </mat-form-field>\n    <button mat-mini-fab color=\"primary\" class=\"align-text-bottom\" (click)=\"send(newMessage)\"\n            [disabled]=\"newMessage.text.trim()===''\">\n      <mat-icon>send</mat-icon>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page/group-chat/group-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_file_service__ = __webpack_require__("./src/app/service/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_chat_service__ = __webpack_require__("./src/app/service/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_chat__ = __webpack_require__("./src/app/model/chat.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GroupChatComponent = /** @class */ (function () {
    function GroupChatComponent(chatService, userService, authService, fileService) {
        this.chatService = chatService;
        this.userService = userService;
        this.authService = authService;
        this.fileService = fileService;
        this.chat = [];
        this.newMessage = new __WEBPACK_IMPORTED_MODULE_5__model_chat__["a" /* Chat */]();
        this.total = 0;
        this.page = 0;
        this.serverUrl = '/chatting/ws';
        this.loading = true;
        this.stompClient = null;
    }
    GroupChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.getAll(this.page).subscribe(function (data) {
            _this.total = Number(data.headers.get('total'));
            _this.chat = data.body;
            _this.loading = false;
            _this.authService.me().subscribe(function (data) {
                _this.me = data;
                _this.fileService.getBlobUser(_this.me);
                _this.Stomp = __webpack_require__("./node_modules/stompjs/index.js");
                _this.sockjsClient = __webpack_require__("./node_modules/sockjs-client/lib/entry.js");
                _this.connect();
            });
        });
    };
    GroupChatComponent.prototype.seemore = function () {
        var _this = this;
        this.loading = true;
        this.page++;
        this.chatService.getAll(this.page).subscribe(function (data) {
            _this.total = Number(data.headers.get('total'));
            _this.chat = data.body.concat(_this.chat);
            _this.loading = false;
        });
    };
    GroupChatComponent.prototype.connect = function () {
        var socket = new this.sockjsClient(this.serverUrl);
        this.stompClient = this.Stomp.over(socket);
        this.stompClient.debug = null;
        var that = this;
        this.stompClient.connect({ 'Authorization': localStorage.getItem('token') }, function () {
            that.stompClient.subscribe('/chatting/topic/group', function (chat) {
                that.chat.push(JSON.parse(chat.body));
                that.total++;
            }, { 'Authorization': localStorage.getItem('token') });
        });
    };
    GroupChatComponent.prototype.clickEnter = function (event, message) {
        if (event.keyCode == 13) {
            this.send(message);
        }
    };
    GroupChatComponent.prototype.send = function (message) {
        message.text = message.text.trim();
        if (message.text !== '') {
            this.stompClient.send('/chatting/group', { 'Authorization': localStorage.getItem('token') }, JSON.stringify(message));
            this.newMessage.text = '';
        }
    };
    GroupChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-group-chat',
            template: __webpack_require__("./src/app/page/group-chat/group-chat.component.html"),
            styles: [__webpack_require__("./src/app/page/group-chat/group-chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__service_file_service__["a" /* FileService */]])
    ], GroupChatComponent);
    return GroupChatComponent;
}());



/***/ }),

/***/ "./src/app/page/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"!isAdmin\">\n    <mat-list>\n      <mat-list-item *ngFor=\"let p of predmeti\">\n        <mat-icon mat-list-icon>subject</mat-icon>\n        <h4 mat-line>\n          <i>{{p.naziv}}</i>\n        </h4>\n        <p mat-line>Broj casova predavanje: {{p.brojCasovaPredavanja}}</p>\n        <p mat-line>Broj casova vezbi: {{p.brojCasovaVezbi}}</p>\n        <p mat-line>\n          Aktivnosti:\n          <mat-chip-list>\n            <mat-chip *ngFor=\"let a of p.aktivnosti\" disabled>\n              {{a.naziv}}\n            </mat-chip>\n          </mat-chip-list>\n        </p>\n        <a mat-button color=\"primary\" [routerLink]=\"['/predmeti',p.id]\" matTooltip=\"Open\">\n          <mat-icon>link</mat-icon>\n        </a>\n        <mat-divider></mat-divider>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <div *ngIf=\"isAdmin\">\n    <div class=\"row\">\n      <div class=\"col-6\" *ngFor=\"let nav of nav_items\">\n        {{randomNum()}}\n        <button class=\"card mb-3 btn btn-block\" [ngClass]=\"[colors[random]]\" [routerLink]=\"[nav.route]\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{nav.name}}</h5>\n            <p class=\"card-img\">\n              <mat-icon style=\"font-size: 3em\">{{nav.icon}}</mat-icon>\n            </p>\n          </div>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user_api__ = __webpack_require__("./src/app/model/user-api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
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
    function HomeComponent(_auth, _user) {
        this._auth = _auth;
        this._user = _user;
        this.me = new __WEBPACK_IMPORTED_MODULE_2__model_user_api__["a" /* UserApi */]();
        this.predmeti = [];
        this.nav_items = [];
        this.random = 0;
        this.colors = [
            'btn-outline-dark',
            'btn-outline-info',
            'btn-outline-secondary',
            'btn-outline-success',
            'btn-outline-primary'
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._auth.me().subscribe(function (data) {
            _this.me = data;
            _this.isAdmin = data.type.toLowerCase() === 'user';
            if (_this.isAdmin) {
                _this._auth.nav_items().subscribe(function (data) { return _this.nav_items = data; });
            }
            else {
                _this._user.getPredmeti(_this.me.id).subscribe(function (data) { return _this.predmeti = data; });
            }
        });
    };
    HomeComponent.prototype.randomNum = function () {
        this.random = Math.floor(Math.random() * 4);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/page/home/home.component.html"),
            styles: [__webpack_require__("./src/app/page/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page/inbox/chat/chat.component.css":
/***/ (function(module, exports) {

module.exports = "div.container-fluid{\n  width: 60%;\n}\n#messages{\n  padding: 2em;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 50vh;\n}\n@media screen and (max-width: 60em){\n  div.container-fluid{\n    width: 100%;\n  }\n\n}\n"

/***/ }),

/***/ "./src/app/page/inbox/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"chat!==null\" class=\"container-fluid\">\n  <mat-spinner *ngIf=\"loading\"></mat-spinner>\n  <a mat-button color=\"primary\" [routerLink]=\"['/users',user.username]\">\n    <img [src]=\"user.href\" width=\"24\" *ngIf=\"user.href\">\n    <span>{{user.ime + ' '+ user.prezime}}</span>\n  </a>\n  <span *ngIf=\"user!=null && user.online\"> <mat-icon class=\"text-success text-sm-center\">lens</mat-icon> <i>Online</i></span>\n  <span *ngIf=\"user!=null && !user.online\"> <mat-icon class=\"text-danger text-sm-center\">lens</mat-icon>\n    <i>{{user.lastOnline | date: 'dd.MM.yyyy. HH:mm'}}</i></span>\n  <div id=\"messages\" class=\"container\" #messages [scrollTop]=\"messages.scrollHeight\">\n    <button class=\"btn btn-link btn-block\" (click)=\"seemore()\" *ngIf=\"chat.length!=total\">\n      See more ({{total-chat.length}})\n    </button>\n    <div *ngFor=\"let c of chat\" class=\"row\">\n      <img [src]=\"user.href\" height=\"16\"  *ngIf=\"c!=null && me!=null && c.sender===user.id && user.href\">\n      <h4 class=\"rounded font-16 col-8\" matTooltip=\"{{c.date | date: 'dd.MM.yyyy. HH:mm'}}\" *ngIf=\"c!=null && user!=null\"\n          [ngClass]=\"{'badge-primary':me && (c.recipient===me.id),\n                'badge-dark offset-2':me && (c.recipient!==me.id)}\">\n        {{c.text}}\n      </h4>\n      <img [src]=\"me.href\" height=\"16\" *ngIf=\"c!=null && me!=null && c.sender===me.id && me.href\">\n    </div>\n  </div>\n  <div class=\"row\" (keypress)=\"clickEnter($event,newMessage)\">\n    <mat-form-field class=\"col-10\">\n      <textarea matInput placeholder=\"Message\" [(ngModel)]=\"newMessage.text\" style=\"resize: none\"></textarea>\n    </mat-form-field>\n    <button mat-mini-fab color=\"primary\" class=\"align-text-bottom\" (click)=\"send(newMessage)\"\n            [disabled]=\"newMessage.text.trim()===''\">\n      <mat-icon>send</mat-icon>\n    </button>\n  </div>\n</div>\n<app-not-found *ngIf=\"chat===null\" class=\"not-found\"></app-not-found>\n"

/***/ }),

/***/ "./src/app/page/inbox/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_message_service__ = __webpack_require__("./src/app/service/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_message__ = __webpack_require__("./src/app/model/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_user_api__ = __webpack_require__("./src/app/model/user-api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_file_service__ = __webpack_require__("./src/app/service/file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChatComponent = /** @class */ (function () {
    function ChatComponent(route, messageService, userService, authService, fileService) {
        this.route = route;
        this.messageService = messageService;
        this.userService = userService;
        this.authService = authService;
        this.fileService = fileService;
        this.id = 0;
        this.chat = [];
        this.user = new __WEBPACK_IMPORTED_MODULE_5__model_user_api__["a" /* UserApi */]();
        this.total = 0;
        this.newMessage = new __WEBPACK_IMPORTED_MODULE_3__model_message__["a" /* Message */]();
        this.page = 0;
        this.serverUrl = '/chatting/ws';
        this.loading = true;
        this.stompClient = null;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.paramMap.get('id');
        this.messageService.chatUser(this.id, this.page).subscribe(function (data) {
            _this.total = Number(data.headers.get('total'));
            _this.chat = data.body;
            _this.loading = false;
            _this.userService.get(_this.id).subscribe(function (data) {
                _this.user = data;
                _this.fileService.getBlobUser(_this.user);
            }, function (err) { return _this.user = null; });
            _this.authService.me().subscribe(function (data) {
                _this.me = data;
                _this.fileService.getBlobUser(_this.me);
                _this.Stomp = __webpack_require__("./node_modules/stompjs/index.js");
                _this.sockjsClient = __webpack_require__("./node_modules/sockjs-client/lib/entry.js");
                _this.connect();
            }, function (err) { return _this.me = null; });
        }, function (err) { return _this.chat = null; });
    };
    ChatComponent.prototype.seemore = function () {
        var _this = this;
        this.page++;
        this.loading = true;
        this.messageService.chatUser(this.id, this.page).subscribe(function (data) {
            _this.chat = data.body.concat(_this.chat);
            _this.loading = false;
        });
    };
    ChatComponent.prototype.clickEnter = function (event, message) {
        if (event.keyCode == 13) {
            this.send(message);
        }
    };
    ChatComponent.prototype.connect = function () {
        var socket = new this.sockjsClient(this.serverUrl);
        this.stompClient = this.Stomp.over(socket);
        this.stompClient.debug = null;
        var that = this;
        this.stompClient.connect({ 'Authorization': localStorage.getItem('token') }, function () {
            that.stompClient.subscribe("/chatting/topic/" + that.me.id, function (message) {
                that.chat.push(JSON.parse(message.body));
                that.total++;
            }, { 'Authorization': localStorage.getItem('token') });
        });
    };
    ChatComponent.prototype.send = function (message) {
        message.text = message.text.trim();
        if (message.text !== '') {
            this.stompClient.send("/chatting/" + this.user.id, { 'Authorization': localStorage.getItem('token') }, JSON.stringify(message));
            this.newMessage.text = '';
        }
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("./src/app/page/inbox/chat/chat.component.html"),
            styles: [__webpack_require__("./src/app/page/inbox/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__service_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__service_file_service__["a" /* FileService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/page/inbox/inbox.component.css":
/***/ (function(module, exports) {

module.exports = "div.container-fluid{\n  width: 60%;\n}\n\nmat-list{\n  height: 30vh;\n  overflow-y: auto;\n}\n\n@media screen and (max-width: 60em){\n  div.container-fluid{\n    width: 100%;\n  }\n\n}\n"

/***/ }),

/***/ "./src/app/page/inbox/inbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"chat!=null\" class=\"container-fluid\">\n  <mat-spinner *ngIf=\"loading\"></mat-spinner>\n  <mat-accordion *ngIf=\"!loading\">\n    <mat-expansion-panel class=\"bg-light\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Add new Message\n        </mat-panel-title>\n        <mat-panel-description>\n          <mat-icon>add</mat-icon>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-form-field class=\"w-90 f20\">\n        <mat-icon matPrefix>search</mat-icon>\n        <input matInput placeholder=\"Filter\" [(ngModel)]=\"filter\">\n      </mat-form-field>\n      <mat-list>\n        <a mat-list-item *ngFor=\"let u of users | search:'ime,prezime,username,type':filter\"\n           [routerLink]=\"[u.id]\">\n          <mat-icon mat-list-icon>person</mat-icon>\n          <h4 mat-line><i>{{u.ime + ' '+ u.prezime}}</i> <b>{{u.type}}</b></h4>\n          <mat-divider></mat-divider>\n        </a>\n      </mat-list>\n    </mat-expansion-panel>\n  </mat-accordion>\n\n  <mat-nav-list>\n    <a mat-list-item *ngFor=\"let c of chat\" [routerLink]=\"[c.id]\">\n      <img [src]=\"c.href\" mat-list-icon *ngIf=\"c.href\">\n      <i mat-line><a class=\"btn btn-link\" [routerLink]=\"['/users',c.username]\">\n        <h4>{{c.ime + ' '+ c.prezime}}</h4>\n      </a></i>\n      <span class=\"badge badge-pill badge-dark\" *ngIf=\"c.unread!=0\">{{c.unread}}</span>\n      <mat-divider></mat-divider>\n    </a>\n  </mat-nav-list>\n</div>\n<app-not-found *ngIf=\"chat===null\" class=\"not-found\"></app-not-found>\n"

/***/ }),

/***/ "./src/app/page/inbox/inbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_message_service__ = __webpack_require__("./src/app/service/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_file_service__ = __webpack_require__("./src/app/service/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InboxComponent = /** @class */ (function () {
    function InboxComponent(messageService, fileService, userService, _auth) {
        var _this = this;
        this.messageService = messageService;
        this.fileService = fileService;
        this.userService = userService;
        this._auth = _auth;
        this.chat = [];
        this.users = [];
        this.filter = '';
        this.loading = true;
        this.init();
        this.userService.getAll().subscribe(function (data) {
            _this.users = data;
            _this._auth.me().subscribe(function (me) { return _this.users = _this.users.filter(function (u) { return me.id !== u.id; }); });
        });
    }
    InboxComponent.prototype.init = function () {
        var _this = this;
        this.messageService.chat().subscribe(function (data) {
            _this.chat = data;
            _this.loading = false;
            _this.chat.forEach(function (value) {
                _this.getAvatar(value);
                _this.messageService.countUnreadUser(value.id).subscribe(function (m) { return value.unread = m; });
            });
        });
    };
    InboxComponent.prototype.getAvatar = function (user) {
        this.fileService.getBlobUser(user);
    };
    InboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-inbox',
            template: __webpack_require__("./src/app/page/inbox/inbox.component.html"),
            styles: [__webpack_require__("./src/app/page/inbox/inbox.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_2__service_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__service_auth_service__["a" /* AuthService */]])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "./src/app/page/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "mat-form-field:first-of-type{\n    margin-top: 2vh;\n}\ndiv.center{\n  margin-top: 2em;\n  float: right;\n  width: 82%;\n  border-style: solid;\n  border-color: burlywood;\n  border-radius: 30px;\n  padding: 1em;\n  background-color: white;\n  opacity: 0.9;\n}\n"

/***/ }),

/***/ "./src/app/page/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\">\n  <div class=\"col-md-6 offset-md-4 center\" (keypress)=\"clickEnter($event,user)\">\n    <img src=\"../../../assets/student.png\" alt=\"student\" width=\"100px\">\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Username\" [(ngModel)]=\"user.username\" required autofocus>\n    </mat-form-field>\n    <br>\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"user.password\" required>\n    </mat-form-field>\n    <br>\n    <button class=\"btn btn-outline-dark\" (click)=\"postLogin(user)\"\n        [disabled]=\"user.username.trim()==='' || user.password.trim()===''\">\n      Login\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_user__ = __webpack_require__("./src/app/model/user.ts");
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
    function LoginComponent(authService, _router, snackBar) {
        this.authService = authService;
        this._router = _router;
        this.snackBar = snackBar;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__model_user__["a" /* User */]();
        if (localStorage.getItem('token')) {
            this.authService.me().subscribe(function (data) {
                _router.navigateByUrl('/');
            }, function (err) { return snackBar.open('Please try login', 'Ok', {
                duration: 3000
            }); });
        }
    }
    LoginComponent.prototype.postLogin = function (user) {
        var _this = this;
        this.authService.loginPost(user).subscribe(function (data) {
            _this.authService.setToken(data);
            _this._router.navigateByUrl('/');
        }, function () {
            _this.snackBar.open('Login data not valid, try again', 'Ok', {
                duration: 4000, verticalPosition: 'top'
            });
        });
    };
    LoginComponent.prototype.clickEnter = function (event, user) {
        if (event.keyCode == 13) {
            this.postLogin(user);
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/page/login/login.component.html"),
            styles: [__webpack_require__("./src/app/page/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSnackBar */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/page/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <img src=\"assets/404-error.gif\" width=\"380\">\n  <br>\n  <p>{{date | date: 'dd.MM.yyyy.'}}</p>\n  <p>{{date | date: 'HH:mm'}}</p>\n  <p><i>{{location}}</i></p>\n</div>\n"

/***/ }),

/***/ "./src/app/page/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
        this.location = window.location.href;
        this.date = new Date();
    }
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/page/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/page/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/page/predmeti/add-edit-aktivnost/add-edit-aktivnost.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/predmeti/add-edit-aktivnost/add-edit-aktivnost.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.title}}</h2>\n<mat-dialog-content>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Naziv predmeta\" [(ngModel)]=\"data.predmet.naziv\" disabled>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <mat-select placeholder=\"Ucenik\" [(ngModel)]=\"data.aktivnost.ucenik\" required\n                style=\"margin-bottom: 0.5em\" [disabled]=\"!data.add\" (change)=\"changeUcenik()\">\n      <mat-option *ngFor=\"let u of data.ucenici\" [value]=\"u.id\">\n        {{ u.ime + ' '+ u.prezime + ' - ' + u.brojIndexa}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n  <mat-select placeholder=\"Naziv\" [(ngModel)]=\"data.aktivnost.tipAktivnosti\" required\n              [disabled]=\"!data.add\" style=\"margin-bottom: 0.5em\" (change)=\"change()\">\n    <mat-option *ngFor=\"let a of aktivnosti\" [value]=\"a\">\n      {{a.naziv}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Broj bodova\" type=\"number\" max=\"100\" min=\"0\"\n           [(ngModel)]=\"data.aktivnost.brojBodova\" required (input)=\"change()\">\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-icon-button [mat-dialog-close]=\"{result:true, aktivnost:data.aktivnost}\"\n          color=\"primary\" matTooltip=\"{{data.tooltip}}\" [disabled]=\"enableB\">\n    <mat-icon>{{data.icon}}</mat-icon>\n  </button>\n  <span class=\"spacer\"></span>\n  <button mat-icon-button mat-dialog-close matTooltip=\"Close\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/page/predmeti/add-edit-aktivnost/add-edit-aktivnost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEditAktivnostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AddEditAktivnostComponent = /** @class */ (function () {
    function AddEditAktivnostComponent(data) {
        this.data = data;
        this.enableB = true;
        this.aktivnosti = [];
        data.aktivnost.predmet = data.predmet.id;
        this.aktivnosti = Object.assign([], data.predmet.aktivnosti);
        data.aktivnost.tipAktivnosti = data.predmet.aktivnosti
            .find(function (a) { return a.id === data.aktivnost.tipAktivnosti.id; });
    }
    AddEditAktivnostComponent.prototype.change = function () {
        this.enableB = (this.data.aktivnost.ucenik === 0 ||
            this.data.aktivnost.tipAktivnosti === undefined || this.data.aktivnost.brojBodova > 100);
    };
    AddEditAktivnostComponent.prototype.changeUcenik = function () {
        var _this = this;
        this.change();
        var selectedUcenik = this.data.ucenici.filter(function (u) { return u.id === _this.data.aktivnost.ucenik; })[0];
        this.aktivnosti = Object.assign([], this.data.predmet.aktivnosti);
        selectedUcenik.aktivnosti.forEach(function (a) {
            var searchAct = _this.data.predmet.aktivnosti.findIndex(function (act) { return act.id === a.tipAktivnosti.id; });
            if (searchAct !== -1) {
                _this.aktivnosti.splice(searchAct, 1);
            }
        });
    };
    AddEditAktivnostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-edit-aktivnost',
            template: __webpack_require__("./src/app/page/predmeti/add-edit-aktivnost/add-edit-aktivnost.component.html"),
            styles: [__webpack_require__("./src/app/page/predmeti/add-edit-aktivnost/add-edit-aktivnost.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], AddEditAktivnostComponent);
    return AddEditAktivnostComponent;
}());



/***/ }),

/***/ "./src/app/page/predmeti/add-edit-predmet/add-edit-predmet.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/predmeti/add-edit-predmet/add-edit-predmet.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.title}}</h2>\n<mat-dialog-content>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Naziv\" maxlength=\"50\" [(ngModel)]=\"data.predmet.naziv\" required>\n    <mat-hint align=\"end\">{{data.predmet.naziv.length}}/50</mat-hint>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Opis\" [(ngModel)]=\"data.predmet.opis\" required>\n    <mat-hint align=\"end\">{{data.predmet.naziv.length}}/256</mat-hint>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Broj casova predavanja\" [(ngModel)]=\"data.predmet.brojCasovaPredavanja\"\n           type=\"number\" required>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Broj casova vezbi\" [(ngModel)]=\"data.predmet.brojCasovaVezbi\"\n           type=\"number\" required>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-select placeholder=\"Aktivnosti\" multiple [(ngModel)]=\"selectedValues\" (change)=\"change()\">\n      <mat-option *ngFor=\"let a of tipovi_aktivnosti\" [value]=\"a\">{{a.naziv}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-icon-button [mat-dialog-close]=\"{result:true, predmet:data.predmet}\"\n          color=\"primary\" matTooltip=\"{{data.tooltip}}\"\n          [disabled]=\"data.predmet.naziv.trim()==='' || data.predmet.brojCasovaPredavanja<=0\n                      || data.predmet.brojCasovaVezbi<=0\">\n    <mat-icon>{{data.icon}}</mat-icon>\n  </button>\n  <span class=\"spacer\"></span>\n  <button mat-icon-button mat-dialog-close matTooltip=\"Close\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/page/predmeti/add-edit-predmet/add-edit-predmet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEditPredmetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_tip_aktivnosti_service__ = __webpack_require__("./src/app/service/tip-aktivnosti.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AddEditPredmetComponent = /** @class */ (function () {
    function AddEditPredmetComponent(data, tipAkativnostiService) {
        this.data = data;
        this.tipAkativnostiService = tipAkativnostiService;
        //separatorKeysCodes = [ENTER, 186]; // semicolon 186 code
        this.tipovi_aktivnosti = [];
        this.selectedValues = [];
    }
    AddEditPredmetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tipAkativnostiService.getAll().subscribe(function (d) {
            _this.tipovi_aktivnosti = d;
            var tips = _this.data.predmet.aktivnosti.map(function (t) { return t.id; });
            _this.selectedValues = _this.tipovi_aktivnosti.filter(function (t) { return tips.findIndex(function (tip) { return tip === t.id; }) !== -1; });
        });
    };
    AddEditPredmetComponent.prototype.change = function () {
        this.data.predmet.aktivnosti = this.selectedValues;
    };
    AddEditPredmetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-edit-predmet',
            template: __webpack_require__("./src/app/page/predmeti/add-edit-predmet/add-edit-predmet.component.html"),
            styles: [__webpack_require__("./src/app/page/predmeti/add-edit-predmet/add-edit-predmet.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__service_tip_aktivnosti_service__["a" /* TipAktivnostiService */]])
    ], AddEditPredmetComponent);
    return AddEditPredmetComponent;
}());



/***/ }),

/***/ "./src/app/page/predmeti/add-ucenik-nastavnik/add-ucenik-nastavnik.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/predmeti/add-ucenik-nastavnik/add-ucenik-nastavnik.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.title}}</h2>\n<mat-dialog-content>\n  <mat-form-field class=\"full-width\">\n    <mat-select placeholder=\"{{data.placeholder}}\" [(ngModel)]=\"data.return_list\" required\n                style=\"margin-bottom: 0.5em\" multiple>\n      <mat-option *ngFor=\"let u of listService\" [value]=\"u\">\n        {{ u.ime + ' '+ u.prezime + ' - '}}\n        <b *ngIf=\"u.hasOwnProperty('brojIndexa')\">{{u.brojIndexa}}</b>\n        <b *ngIf=\"u.hasOwnProperty('zvanje')\">{{u.zvanje.naziv}}</b>\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-icon-button [mat-dialog-close]=\"{result:true, return_list:data.return_list}\"\n          color=\"primary\" matTooltip=\"Add\" [disabled]=\"data.return_list.length===0\">\n    <mat-icon>add</mat-icon>\n  </button>\n  <span class=\"spacer\"></span>\n  <button mat-icon-button mat-dialog-close matTooltip=\"Close\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/page/predmeti/add-ucenik-nastavnik/add-ucenik-nastavnik.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUcenikNastavnikComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AddUcenikNastavnikComponent = /** @class */ (function () {
    function AddUcenikNastavnikComponent(data) {
        var _this = this;
        this.data = data;
        this.listService = [];
        this.data.service.getAll().subscribe(function (data) {
            _this.listService = data;
            _this.data.filterList.forEach(function (i) {
                _this.listService = _this.listService.filter(function (l) { return l.id !== i.id; });
            });
        });
    }
    AddUcenikNastavnikComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-ucenik-nastavnik',
            template: __webpack_require__("./src/app/page/predmeti/add-ucenik-nastavnik/add-ucenik-nastavnik.component.html"),
            styles: [__webpack_require__("./src/app/page/predmeti/add-ucenik-nastavnik/add-ucenik-nastavnik.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], AddUcenikNastavnikComponent);
    return AddUcenikNastavnikComponent;
}());



/***/ }),

/***/ "./src/app/page/predmeti/add-uplata/add-uplata.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/predmeti/add-uplata/add-uplata.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add uplata</h2>\n<mat-dialog-content>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Naziv predmeta\" [(ngModel)]=\"data.predmet.naziv\" disabled>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <mat-select placeholder=\"Ucenik\" [(ngModel)]=\"data.uplata.ucenik\" required\n                style=\"margin-bottom: 0.5em\" (change)=\"change()\">\n      <mat-option *ngFor=\"let u of data.ucenici\" [value]=\"u\">\n        {{ u.ime + ' '+ u.prezime + ' - ' + u.brojIndexa}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Suma\" type=\"number\" min=\"10\"\n           [(ngModel)]=\"data.uplata.suma\" required (input)=\"change()\">\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-icon-button [mat-dialog-close]=\"{result:true, uplata:data.uplata}\"\n          color=\"primary\" matTooltip=\"Add\" [disabled]=\"enableB\">\n    <mat-icon>add</mat-icon>\n  </button>\n  <span class=\"spacer\"></span>\n  <button mat-icon-button mat-dialog-close matTooltip=\"Close\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/page/predmeti/add-uplata/add-uplata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUplataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AddUplataComponent = /** @class */ (function () {
    function AddUplataComponent(data) {
        this.data = data;
        this.enableB = true;
        data.uplata.predmet = data.predmet;
    }
    AddUplataComponent.prototype.change = function () {
        this.enableB = (this.data.uplata.ucenik.id === 0 || this.data.uplata.suma < 10);
    };
    AddUplataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-uplata',
            template: __webpack_require__("./src/app/page/predmeti/add-uplata/add-uplata.component.html"),
            styles: [__webpack_require__("./src/app/page/predmeti/add-uplata/add-uplata.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], AddUplataComponent);
    return AddUplataComponent;
}());



/***/ }),

/***/ "./src/app/page/predmeti/predmet/predmet.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/predmeti/predmet/predmet.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"predmet!=null\">\n  <mat-spinner *ngIf=\"loading\"></mat-spinner>\n  <mat-tab-group *ngIf=\"!loading\">\n    <mat-tab label=\"Info\">\n      <ng-template mat-tab-label>\n        <mat-icon>info_outline</mat-icon> Info\n      </ng-template>\n      <div class=\"m-5 row\">\n        <mat-form-field class=\"col-md-12\">\n          <input matInput placeholder=\"Naziv\" [(ngModel)]=\"predmet.naziv\" disabled>\n        </mat-form-field>\n        <mat-form-field class=\"col-md-12\">\n          <input matInput placeholder=\"Opis\" [(ngModel)]=\"predmet.opis\" disabled>\n        </mat-form-field>\n        <mat-form-field class=\"col-md-6\">\n          <input matInput placeholder=\"Broj casova predavanja\" [(ngModel)]=\"predmet.brojCasovaPredavanja\" disabled>\n        </mat-form-field>\n        <mat-form-field class=\"col-md-6\">\n          <input matInput placeholder=\"Broj casova vezbi\" [(ngModel)]=\"predmet.brojCasovaVezbi\" disabled>\n        </mat-form-field>\n        <mat-form-field class=\"col-md-12\">\n          <mat-chip-list #keywordList disabled>\n            <mat-chip *ngFor=\"let key of predmet.aktivnosti\" disabled>\n              {{key.naziv}}\n            </mat-chip>\n            <input matInput placeholder=\"Aktivnosti\" [matChipInputFor]=\"keywordList\" disabled>\n          </mat-chip-list>\n        </mat-form-field>\n        <div class=\"offset-md-4 col-md-2\" *ngIf=\"!isUcenik\">\n          <button mat-mini-fab matTooltip=\"Edit\" color=\"primary\" (click)=\"edit()\">\n            <mat-icon>edit</mat-icon>\n          </button>\n        </div>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Ucenici\">\n      <ng-template mat-tab-label>\n        <mat-icon>person</mat-icon> Ucenici\n        <span class=\"badge badge-pill badge-dark\">{{ucenici.length}}</span>\n      </ng-template>\n      <div>\n        <button mat-mini-fab (click)=\"addUcenikNastavnik()\" color=\"primary\" *ngIf=\"!isUcenik\">\n          <mat-icon>add</mat-icon>\n        </button>\n        <mat-list>\n          <mat-list-item *ngFor=\"let u of ucenici\">\n            <mat-icon mat-list-icon>person</mat-icon>\n            <h4 mat-line>{{u.ime + ' '+ u.prezime}}</h4>\n            <h4 mat-line>{{u.email}}</h4>\n            <h4 mat-line><b>{{u.brojIndexa}}</b></h4>\n            <a mat-mini-fab color=\"primary\" [routerLink]=\"['/users',u.username]\" matTooltip=\"Open\">\n              <mat-icon>link</mat-icon>\n            </a>\n            <button mat-mini-fab color=\"warn\" matTooltip=\"Delete\" (click)=\"deleteUcenik(u)\" *ngIf=\"!isUcenik\">\n              <mat-icon>delete</mat-icon>\n            </button>\n            <mat-divider></mat-divider>\n          </mat-list-item>\n        </mat-list>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Predavaci\">\n      <ng-template mat-tab-label>\n        <mat-icon>person</mat-icon> Predavaci\n        <span class=\"badge badge-pill badge-dark\">{{nastavnici.length}}</span>\n      </ng-template>\n      <div>\n        <button mat-mini-fab (click)=\"addUcenikNastavnik(true)\" color=\"primary\" *ngIf=\"isAdmin\">\n          <mat-icon>add</mat-icon>\n        </button>\n        <mat-list>\n          <mat-list-item *ngFor=\"let n of nastavnici\">\n            <mat-icon mat-list-icon>person</mat-icon>\n            <h4 mat-line>{{n.ime + ' '+ n.prezime}}</h4>\n            <h4 mat-line>{{n.email}}</h4>\n            <h4 mat-line><b>{{n.zvanje.naziv}}</b></h4>\n            <a mat-mini-fab color=\"primary\" [routerLink]=\"['/users',n.username]\" matTooltip=\"Open\">\n              <mat-icon>link</mat-icon>\n            </a>\n            <button mat-mini-fab color=\"warn\" matTooltip=\"Delete\" (click)=\"deleteNastavnik(n)\" *ngIf=\"isAdmin\">\n              <mat-icon>delete</mat-icon>\n            </button>\n            <mat-divider></mat-divider>\n          </mat-list-item>\n        </mat-list>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Uplate\">\n      <ng-template mat-tab-label>\n        <mat-icon>payment</mat-icon> Uplate\n        <span class=\"badge badge-pill badge-dark\">{{uplate.length}}</span>\n      </ng-template>\n      <div>\n        <button mat-mini-fab color=\"primary\" (click)=\"addUplata()\" *ngIf=\"isAdmin\">\n          <mat-icon>add</mat-icon>\n        </button>\n        <mat-list>\n          <mat-list-item *ngFor=\"let u of uplate\">\n            <mat-icon mat-list-icon>payment</mat-icon>\n            <h4 mat-line>Ime i prezime: <b>{{u.ucenik.ime + ' '+ u.ucenik.prezime}}</b></h4>\n            <span mat-line> Suma: <b>{{u.suma}}</b> din</span>\n            <a mat-button color=\"primary\" [routerLink]=\"['/users',u.ucenik.username]\" matTooltip=\"Open ucenik\">\n              <mat-icon>link</mat-icon>\n            </a>\n            <mat-divider></mat-divider>\n          </mat-list-item>\n        </mat-list>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Ispit\">\n      <ng-template mat-tab-label>\n        <mat-icon>web</mat-icon> Ispit\n      </ng-template>\n      <div id=\"ispiti\">\n        <button mat-mini-fab color=\"primary\" matTooltip=\"Add Aktivnost\" (click)=\"addAktivnost()\" *ngIf=\"!isUcenik\">\n          <mat-icon>add</mat-icon>\n        </button>\n        <mat-list>\n          <mat-list-item *ngFor=\"let u of ucenici\">\n            <mat-icon mat-list-icon>person</mat-icon>\n            <h4 mat-line>{{u.ime + ' '+ u.prezime}}</h4>\n            <h4 mat-line><b>{{u.brojIndexa}}</b></h4>\n            <h4 mat-line><i>{{u.email}}</i></h4>\n            <table mat-line class=\"table table-bordered\" style=\"border: none\">\n                <thead>\n                  <tr>\n                    <th>Naziv Aktivnosti</th>\n                    <th>Broj bodova</th>\n                    <th></th>\n                  </tr>\n                </thead>\n              <tbody>\n                <tr *ngFor=\"let a of filterAktivnosti(u.aktivnosti)\">\n                  <td>{{a.tipAktivnosti.naziv}}</td>\n                  <td>{{a.brojBodova}}</td>\n                  <td>\n                    <button mat-mini-fab class=\"bg-dark\" matTooltip=\"Edit\" (click)=\"editAKtivnost(a, u)\" *ngIf=\"!isUcenik\">\n                      <mat-icon>edit</mat-icon>\n                    </button>\n                  </td>\n                </tr>\n                <td colspan=\"2\" class=\"text-right\">Ukupno: <b>{{sumBodovi(u.aktivnosti)}}</b></td>\n              </tbody>\n            </table>\n            <mat-divider></mat-divider>\n          </mat-list-item>\n        </mat-list>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</div>\n<app-not-found *ngIf=\"predmet==null\" class=\"not-found\"></app-not-found>\n"

/***/ }),

/***/ "./src/app/page/predmeti/predmet/predmet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredmetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_predmet_service__ = __webpack_require__("./src/app/service/predmet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_predmet__ = __webpack_require__("./src/app/model/predmet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_edit_predmet_add_edit_predmet_component__ = __webpack_require__("./src/app/page/predmeti/add-edit-predmet/add-edit-predmet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_uplata__ = __webpack_require__("./src/app/model/uplata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_aktivnost__ = __webpack_require__("./src/app/model/aktivnost.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_edit_aktivnost_add_edit_aktivnost_component__ = __webpack_require__("./src/app/page/predmeti/add-edit-aktivnost/add-edit-aktivnost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_aktivnost_service__ = __webpack_require__("./src/app/service/aktivnost.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_nastavnik_service__ = __webpack_require__("./src/app/service/nastavnik.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_ucenik_service__ = __webpack_require__("./src/app/service/ucenik.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__add_ucenik_nastavnik_add_ucenik_nastavnik_component__ = __webpack_require__("./src/app/page/predmeti/add-ucenik-nastavnik/add-ucenik-nastavnik.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__add_uplata_add_uplata_component__ = __webpack_require__("./src/app/page/predmeti/add-uplata/add-uplata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_uplata_service__ = __webpack_require__("./src/app/service/uplata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var PredmetComponent = /** @class */ (function () {
    function PredmetComponent(route, predmetService, dialog, snackBar, aktivnostService, uplataService, nastavnikService, ucenikService, authService) {
        this.route = route;
        this.predmetService = predmetService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.aktivnostService = aktivnostService;
        this.uplataService = uplataService;
        this.nastavnikService = nastavnikService;
        this.ucenikService = ucenikService;
        this.authService = authService;
        this.predmet = new __WEBPACK_IMPORTED_MODULE_3__model_predmet__["a" /* Predmet */]();
        this.ucenici = [];
        this.nastavnici = [];
        this.uplate = [];
        this.isUcenik = false;
        this.loading = true;
        this.isAdmin = false;
    }
    PredmetComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.get();
    };
    PredmetComponent.prototype.filterAktivnosti = function (aktivnosti) {
        var _this = this;
        return aktivnosti.filter(function (a) { return a.predmet === _this.predmet.id; });
    };
    PredmetComponent.prototype.sumBodovi = function (aktivnosti) {
        var _this = this;
        if (aktivnosti.length === 0) {
            return 0;
        }
        var sum = 0;
        aktivnosti.forEach(function (a) {
            if (a.predmet === _this.predmet.id) {
                sum += a.brojBodova;
            }
        });
        if (sum > 100)
            return 100;
        return sum;
    };
    PredmetComponent.prototype.get = function () {
        var _this = this;
        this.predmetService.get(this.id).subscribe(function (data) {
            _this.predmet = data;
            _this.loading = false;
            _this.predmetService.getUcenici(_this.id).subscribe(function (data) { return _this.ucenici = data; });
            _this.predmetService.getNastavnici(_this.id).subscribe(function (data) { return _this.nastavnici = data; });
            _this.predmetService.getUplate(_this.id).subscribe(function (data) { return _this.uplate = data; });
            _this.authService.me().subscribe(function (data) {
                _this.me = data;
                _this.isUcenik = data.type === 'Ucenik';
                _this.isAdmin = data.type === 'User';
            });
        }, function (error) { return _this.predmet = null; });
    };
    PredmetComponent.prototype.edit = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__add_edit_predmet_add_edit_predmet_component__["a" /* AddEditPredmetComponent */], {
            panelClass: 'dialog-600x400',
            data: {
                title: 'Edit predmet', icon: 'edit',
                tooltip: 'Edit predmet', predmet: Object.assign({}, this.predmet)
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.predmetService.edit(result.predmet).subscribe(function (data) {
                    _this.predmet = data;
                    _this.snackBar.open("Successfully changed!\n", 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                }, function () {
                    _this.snackBar.open('Error with change predmet attributes', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    PredmetComponent.prototype.addAktivnost = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__add_edit_aktivnost_add_edit_aktivnost_component__["a" /* AddEditAktivnostComponent */], {
            panelClass: 'dialog-600x400',
            data: {
                title: 'Add aktivnost', icon: 'add', add: true,
                tooltip: 'Add aktivnost', aktivnost: new __WEBPACK_IMPORTED_MODULE_7__model_aktivnost__["a" /* Aktivnost */](),
                predmet: Object.assign({}, this.predmet), ucenici: this.ucenici
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.aktivnostService.add(result.aktivnost).subscribe(function (data) {
                    var selectedUcenik = _this.ucenici.filter(function (u) { return u.id === data.ucenik; })[0];
                    selectedUcenik.aktivnosti.push(data);
                    _this.snackBar.open("Successfully added!\n", 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                }, function () {
                    _this.snackBar.open('Error', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    PredmetComponent.prototype.editAKtivnost = function (aktivnost, ucenik) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__add_edit_aktivnost_add_edit_aktivnost_component__["a" /* AddEditAktivnostComponent */], {
            panelClass: 'dialog-600x400',
            data: {
                title: 'Edit aktivnost', icon: 'edit',
                tooltip: 'Edit aktivnost', aktivnost: Object.assign({}, aktivnost),
                predmet: Object.assign({}, this.predmet), ucenici: this.ucenici
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.aktivnostService.edit(result.aktivnost).subscribe(function (data) {
                    var selectedUcenik = _this.ucenici[_this.ucenici.indexOf(ucenik)];
                    selectedUcenik.aktivnosti[selectedUcenik.aktivnosti.indexOf(aktivnost)] = data;
                    _this.snackBar.open("Successfully changed!\n", 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                }, function () {
                    _this.snackBar.open('Error', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    PredmetComponent.prototype.addUcenikNastavnik = function (nastavnik) {
        var _this = this;
        var data = {};
        if (nastavnik) {
            data = { title: 'Predavaci', placeholder: 'Predavaci', return_list: [],
                service: this.nastavnikService, filterList: this.nastavnici };
        }
        else {
            data = { title: 'Ucenici', placeholder: 'Ucenici', return_list: [],
                service: this.ucenikService, filterList: this.ucenici };
        }
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_12__add_ucenik_nastavnik_add_ucenik_nastavnik_component__["a" /* AddUcenikNastavnikComponent */], {
            panelClass: 'dialog-600x400',
            data: data
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var service = void 0;
                if (nastavnik) {
                    service = _this.predmetService.postNastavnici(_this.predmet.id, result.return_list);
                }
                else {
                    service = _this.predmetService.postUcenici(_this.predmet.id, result.return_list);
                }
                service.subscribe(function (data) {
                    if (nastavnik) {
                        _this.nastavnici = data;
                    }
                    else {
                        _this.ucenici = data;
                    }
                    _this.snackBar.open("Successfully added!\n", 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                }, function () {
                    _this.snackBar.open('Error with change predmet attributes', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    PredmetComponent.prototype.addUplata = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_13__add_uplata_add_uplata_component__["a" /* AddUplataComponent */], {
            panelClass: 'dialog-600x400',
            data: {
                uplata: new __WEBPACK_IMPORTED_MODULE_6__model_uplata__["a" /* Uplata */](), predmet: Object.assign({}, this.predmet), ucenici: this.ucenici
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                result.uplata.ucenik.type = 'Ucenik';
                _this.uplataService.add(result.uplata).subscribe(function (data) {
                    _this.uplate.push(data);
                    _this.snackBar.open("Successfully added!\n", 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                }, function () {
                    _this.snackBar.open('Error', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    PredmetComponent.prototype.deleteNastavnik = function (nastavnik) {
        var _this = this;
        var index = this.nastavnici.indexOf(nastavnik);
        this.snackBar.open('Are you sure?', 'Yes', {
            duration: 10000, verticalPosition: 'top'
        }).onAction().subscribe(function () {
            _this.predmetService.deleteNastavnik(_this.predmet.id, nastavnik.id).subscribe(function () {
                _this.nastavnici.splice(index, 1);
            });
        });
    };
    PredmetComponent.prototype.deleteUcenik = function (ucenik) {
        var _this = this;
        var index = this.ucenici.indexOf(ucenik);
        this.snackBar.open('Are you sure?', 'Yes', {
            duration: 10000, verticalPosition: 'top'
        }).onAction().subscribe(function () {
            _this.predmetService.deleteUcenik(_this.predmet.id, ucenik.id).subscribe(function () {
                _this.ucenici.splice(index, 1);
            });
        });
    };
    PredmetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-predmet',
            template: __webpack_require__("./src/app/page/predmeti/predmet/predmet.component.html"),
            styles: [__webpack_require__("./src/app/page/predmeti/predmet/predmet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__service_predmet_service__["a" /* PredmetService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_9__service_aktivnost_service__["a" /* AktivnostService */], __WEBPACK_IMPORTED_MODULE_14__service_uplata_service__["a" /* UplataService */],
            __WEBPACK_IMPORTED_MODULE_10__service_nastavnik_service__["a" /* NastavnikService */], __WEBPACK_IMPORTED_MODULE_11__service_ucenik_service__["a" /* UcenikService */],
            __WEBPACK_IMPORTED_MODULE_15__service_auth_service__["a" /* AuthService */]])
    ], PredmetComponent);
    return PredmetComponent;
}());



/***/ }),

/***/ "./src/app/page/predmeti/predmeti.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/predmeti/predmeti.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"predmeti!=null\">\n  <mat-spinner *ngIf=\"loading\"></mat-spinner>\n  <div *ngIf=\"!loading\" id=\"content\">\n    <button mat-mini-fab color=\"primary\" matTooltip=\"Add new\" (click)=\"add()\">\n      <mat-icon>add</mat-icon>\n    </button>\n    <mat-form-field class=\"w-90 f20\">\n      <mat-icon matPrefix>search</mat-icon>\n      <input matInput placeholder=\"Naziv predmeta\" [(ngModel)]=\"filter\" (keyup)=\"changeFilter()\">\n    </mat-form-field>\n    <mat-list>\n      <mat-list-item *ngFor=\"let p of predmeti\">\n        <mat-icon mat-list-icon>subject</mat-icon>\n        <h4 mat-line><i>{{p.naziv}}</i></h4>\n        <p mat-line>Broj casova predavanje: {{p.brojCasovaPredavanja}}</p>\n        <p mat-line>Broj casova vezbi: {{p.brojCasovaVezbi}}</p>\n        <p mat-line>\n          Aktivnosti:\n          <mat-chip-list>\n            <mat-chip *ngFor=\"let a of p.aktivnosti\" disabled>\n              {{a.naziv}}\n            </mat-chip>\n          </mat-chip-list>\n        </p>\n        <a mat-mini-fab  [routerLink]=\"['/predmeti',p.id]\" matTooltip=\"Open\" class=\"bg-dark\">\n          <mat-icon>link</mat-icon>\n        </a>\n        <button mat-mini-fab color=\"primary\" matTooltip=\"Update\" (click)=\"edit(p)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-mini-fab color=\"warn\" matTooltip=\"Delete\" (click)=\"delete(p)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n        <mat-divider></mat-divider>\n      </mat-list-item>\n    </mat-list>\n    <mat-paginator [length]=\"length\"\n                   [pageSize]=\"num\"\n                   [pageSizeOptions]=\"[2, 5, 10, 25, 100]\"\n                   [pageIndex]=\"page\"\n                   (page)=\"changePage($event)\">\n    </mat-paginator>\n  </div>\n</div>\n<app-not-found *ngIf=\"predmeti===null\" class=\"not-found\"></app-not-found>\n"

/***/ }),

/***/ "./src/app/page/predmeti/predmeti.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredmetiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_predmet__ = __webpack_require__("./src/app/model/predmet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_predmet_service__ = __webpack_require__("./src/app/service/predmet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_edit_predmet_add_edit_predmet_component__ = __webpack_require__("./src/app/page/predmeti/add-edit-predmet/add-edit-predmet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PredmetiComponent = /** @class */ (function () {
    function PredmetiComponent(predmetService, dialog, snackBar, _router) {
        this.predmetService = predmetService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this._router = _router;
        this.predmeti = [];
        this.filter = '';
        this.loading = true;
        this.num = 5;
        this.page = 0;
        this.length = 0;
    }
    PredmetiComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    PredmetiComponent.prototype.changePage = function (e) {
        this.page = e.pageIndex;
        this.num = e.pageSize;
        this.getAll();
    };
    PredmetiComponent.prototype.changeFilter = function () {
        this.page = 0;
        this.getAll();
    };
    PredmetiComponent.prototype.getAll = function () {
        var _this = this;
        this.predmetService.getAll(this.filter, this.page, this.num).subscribe(function (data) {
            _this.length = Number(data.headers.get('total'));
            _this.loading = false;
            _this.predmeti = data.body;
        }, function (error) { return _this.predmeti = null; });
    };
    PredmetiComponent.prototype.add = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__add_edit_predmet_add_edit_predmet_component__["a" /* AddEditPredmetComponent */], {
            panelClass: 'dialog-600x400',
            data: {
                add: true, title: 'Add new', icon: 'add',
                tooltip: 'Add', predmet: new __WEBPACK_IMPORTED_MODULE_1__model_predmet__["a" /* Predmet */]()
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.predmetService.add(result.predmet).subscribe(function (data) {
                    _this.predmeti.push(data);
                    _this.snackBar.open('Successfully added!', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                }, function () {
                    _this.snackBar.open('Error with add new predmet', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    PredmetiComponent.prototype.edit = function (predmet) {
        var _this = this;
        var index = this.predmeti.indexOf(predmet);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__add_edit_predmet_add_edit_predmet_component__["a" /* AddEditPredmetComponent */], {
            panelClass: 'dialog-600x400',
            data: {
                title: 'Edit predmet', icon: 'edit',
                tooltip: 'Edit predmet', predmet: Object.assign({}, predmet)
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.predmetService.edit(result.predmet).subscribe(function (data) {
                    _this.predmeti[index] = data;
                    _this.snackBar.open("Successfully changed! Open predmet with id:'" + data.id + "'\n", 'Open', {
                        duration: 10000, verticalPosition: 'top'
                    }).onAction().subscribe(function () {
                        _this._router.navigate(['/predmeti', data.id]);
                    });
                }, function () {
                    _this.snackBar.open('Error with change predmet attributes', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    PredmetiComponent.prototype.delete = function (predmet) {
        var _this = this;
        var index = this.predmeti.indexOf(predmet);
        this.snackBar.open('Are you sure?', 'Yes', {
            duration: 10000, verticalPosition: 'top'
        }).onAction().subscribe(function () {
            _this.predmetService.delete(predmet).subscribe(function () {
                _this.predmeti.splice(index, 1);
                _this.length--;
            });
        });
    };
    PredmetiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-predmeti',
            template: __webpack_require__("./src/app/page/predmeti/predmeti.component.html"),
            styles: [__webpack_require__("./src/app/page/predmeti/predmeti.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_predmet_service__["a" /* PredmetService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]])
    ], PredmetiComponent);
    return PredmetiComponent;
}());



/***/ }),

/***/ "./src/app/page/users/add-user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add new user</h2>\n<mat-dialog-content>\n  <mat-form-field class=\"full-width\">\n    <mat-select placeholder=\"Type\" [(ngModel)]=\"data.user.type\"\n                (input)=\"change()\" required>\n      <mat-option *ngFor=\"let type of types\" [value]=\"type\">\n        {{ type }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"First name\" maxlength=\"30\" [(ngModel)]=\"data.user.ime\"\n           (input)=\"change()\" required>\n    <mat-hint align=\"end\">{{data.user.ime.length}}/30</mat-hint>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Last name\" maxlength=\"30\" [(ngModel)]=\"data.user.prezime\"\n           (input)=\"change()\" required>\n    <mat-hint align=\"end\">{{data.user.prezime.length}}/30</mat-hint>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Username\" maxlength=\"30\" [(ngModel)]=\"data.user.username\"\n           (input)=\"change()\" required>\n    <mat-hint align=\"end\">{{data.user.username.length}}/30</mat-hint>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Email\" maxlength=\"50\" minlength=\"10\" [(ngModel)]=\"data.user.email\"\n           (input)=\"change()\" required\n           [pattern]=\"re\">\n    <mat-hint align=\"end\">{{data.user.email.length}}/50</mat-hint>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Password\" type=\"password\" maxlength=\"20\" [(ngModel)]=\"data.user.password\"\n           (input)=\"change()\" required>\n    <mat-hint align=\"end\">{{data.user.password.length}}/20</mat-hint>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\" *ngIf=\"data.user.isUcenik()\">\n    <input matInput placeholder=\"Broj indexa\" maxlength=\"12\" [(ngModel)]=\"data.user.brojIndexa\"\n           (input)=\"change()\" required>\n    <mat-hint align=\"end\">{{data.user.brojIndexa.length}}/12</mat-hint>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\" *ngIf=\"data.user.isNastavnik()\">\n    <mat-select placeholder=\"Zvanje\" [(ngModel)]=\"data.user.zvanje.id\" required>\n      <mat-option *ngFor=\"let z of zvanja\" [value]=\"z.id\">\n        {{ z.naziv }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-icon-button [mat-dialog-close]=\"{result:true, user:data.user }\"\n          color=\"primary\" matTooltip=\"Add new\" [disabled]=\"enableB\">\n    <mat-icon>add</mat-icon>\n  </button>\n  <span class=\"spacer\"></span>\n  <button mat-icon-button mat-dialog-close matTooltip=\"Close\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/page/users/add-user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_zvanje_service__ = __webpack_require__("./src/app/service/zvanje.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(data, zvanjeService) {
        var _this = this;
        this.data = data;
        this.zvanjeService = zvanjeService;
        // tslint:disable-next-line:max-line-length
        this.re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.types = ['User', 'Nastavnik', 'Ucenik'];
        this.zvanja = [];
        this.enableB = true;
        data.user.type = 'User';
        data.user.brojIndexa = '';
        this.zvanjeService.getAll().subscribe(function (s) {
            _this.zvanja = s;
            data.user.zvanje = _this.zvanja[0];
        });
    }
    AddUserComponent.prototype.change = function () {
        this.enableB = (this.data.user.username.trim() === '' || !this.validateEmail(this.data.user.email) ||
            this.data.user.ime.trim() === '' || this.data.user.prezime.trim() === '' ||
            this.data.user.password.trim() === '') || (this.data.user.isUcenik() &&
            (this.data.user.brojIndexa.trim() === '' || this.data.user.username.trim() === '' ||
                !this.validateEmail(this.data.user.email) ||
                this.data.user.ime.trim() === '' || this.data.user.prezime.trim() === '' || this.data.user.password.trim() === ''));
    };
    AddUserComponent.prototype.validateEmail = function (email) {
        return this.re.test(String(email).toLowerCase());
    };
    AddUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-user',
            template: __webpack_require__("./src/app/page/users/add-user/add-user.component.html")
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__service_zvanje_service__["a" /* ZvanjeService */]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/page/users/change-password/change-password.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/users/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Change password</h2>\n<mat-dialog-content>\n  <mat-form-field class=\"full-width\" *ngIf=\"!data.admin\">\n    <input matInput placeholder=\"Old password\" type=\"password\" maxlength=\"30\"\n           [(ngModel)]=\"data.user.oldPassword\" (input)=\"change()\" required>\n    <mat-hint align=\"end\">{{data.user.oldPassword.length}}/30</mat-hint>\n    <mat-icon matSuffix>visibility</mat-icon>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"New password\" type=\"password\" maxlength=\"30\"\n           [(ngModel)]=\"data.user.newPassword\" (input)=\"change()\" required>\n    <mat-hint align=\"end\">{{data.user.newPassword.length}}/30</mat-hint>\n    <mat-icon matSuffix>visibility</mat-icon>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Repeat new password\" type=\"password\" maxlength=\"30\"\n           [(ngModel)]=\"data.user.newPasswordRepeat\" (input)=\"change()\" required>\n    <mat-hint align=\"end\">{{data.user.newPasswordRepeat.length}}/30</mat-hint>\n    <mat-icon matSuffix>visibility</mat-icon>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-icon-button [mat-dialog-close]=\"{result:true, user:data.user }\"\n          color=\"primary\" matTooltip=\"Change password\" [disabled]=\"enableB\">\n    <mat-icon>edit</mat-icon>\n  </button>\n  <span class=\"spacer\"></span>\n  <button mat-icon-button mat-dialog-close matTooltip=\"Close\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/page/users/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(data) {
        this.data = data;
        this.enableB = true;
    }
    ChangePasswordComponent.prototype.change = function () {
        this.enableB = (!this.data.admin && this.data.user.oldPassword.trim() === '') ||
            this.data.user.newPassword.trim() === '' || this.data.user.newPasswordRepeat.trim() === '' ||
            this.data.user.newPassword !== this.data.user.newPasswordRepeat;
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-change-password',
            template: __webpack_require__("./src/app/page/users/change-password/change-password.component.html"),
            styles: [__webpack_require__("./src/app/page/users/change-password/change-password.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/page/users/dialog-document/dialog-document.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/users/dialog-document/dialog-document.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Document</h2>\n<mat-dialog-content>\n    <iframe [src]=\"data.href\" width=\"100%\" style=\"min-height: 62vh;\"></iframe>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <span></span>\n  <span class=\"spacer\"></span>\n  <button mat-icon-button mat-dialog-close matTooltip=\"Close\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/page/users/dialog-document/dialog-document.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDocumentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogDocumentComponent = /** @class */ (function () {
    function DialogDocumentComponent(data) {
        this.data = data;
    }
    DialogDocumentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dialog-document',
            template: __webpack_require__("./src/app/page/users/dialog-document/dialog-document.component.html"),
            styles: [__webpack_require__("./src/app/page/users/dialog-document/dialog-document.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], DialogDocumentComponent);
    return DialogDocumentComponent;
}());



/***/ }),

/***/ "./src/app/page/users/edit-user/edit-user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/users/edit-user/edit-user.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit user</h2>\n<mat-dialog-content>\n  <mat-form-field class=\"full-width\" hidden>\n    <mat-select placeholder=\"Type\" [(ngModel)]=\"data.user.type\">\n      <mat-option *ngFor=\"let type of types\" [value]=\"type\">\n        {{ type }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"First name\" maxlength=\"30\" [(ngModel)]=\"data.user.ime\" (input)=\"change()\" required>\n    <mat-hint align=\"end\">{{data.user.ime.length}}/30</mat-hint>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Last name\" maxlength=\"30\" [(ngModel)]=\"data.user.prezime\" (input)=\"change()\" required>\n    <mat-hint align=\"end\">{{data.user.prezime.length}}/30</mat-hint>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Email\" maxlength=\"50\" minlength=\"10\" [(ngModel)]=\"data.user.email\" (input)=\"change()\" required>\n    <mat-hint align=\"end\">{{data.user.email.length}}/50</mat-hint>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\" *ngIf=\"data.user.isUcenik() && data.me.isAdmin()\">\n    <input matInput placeholder=\"Broj indexa\" maxlength=\"12\" [(ngModel)]=\"data.user.brojIndexa\" (input)=\"change()\" required>\n    <mat-hint align=\"end\">{{data.user.brojIndexa.length}}/12</mat-hint>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\" *ngIf=\"data.user.isNastavnik() && data.me.isAdmin()\">\n    <mat-select placeholder=\"Zvanje\" [(ngModel)]=\"data.user.zvanje.id\" required (change)=\"change()\">\n      <mat-option *ngFor=\"let z of zvanja\" [value]=\"z.id\">\n        {{ z.naziv }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-icon-button [mat-dialog-close]=\"{result:true, user:data.user }\" color=\"primary\" matTooltip=\"Edit\" [disabled]=\"enableB\">\n    <mat-icon>edit</mat-icon>\n  </button>\n  <span class=\"spacer\"></span>\n  <button mat-icon-button mat-dialog-close matTooltip=\"Close\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/page/users/edit-user/edit-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_zvanje_service__ = __webpack_require__("./src/app/service/zvanje.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(data, zvanjeService) {
        var _this = this;
        this.data = data;
        this.zvanjeService = zvanjeService;
        this.types = ['User', 'Nastavnik', 'Ucenik'];
        this.zvanja = [];
        this.enableB = true;
        this.zvanjeService.getAll().subscribe(function (s) {
            _this.zvanja = s;
        });
    }
    EditUserComponent.prototype.change = function () {
        this.enableB = (this.data.user.username.trim() === '' || this.data.user.email.trim() === '' ||
            this.data.user.ime.trim() === '' || this.data.user.prezime.trim() === '') || (this.data.user.isUcenik() &&
            (this.data.user.brojIndexa.trim() === '' || this.data.user.username.trim() === '' ||
                this.data.user.email.trim() === '' || this.data.user.ime.trim() === '' || this.data.user.prezime.trim() === ''));
    };
    EditUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-user',
            template: __webpack_require__("./src/app/page/users/edit-user/edit-user.component.html"),
            styles: [__webpack_require__("./src/app/page/users/edit-user/edit-user.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__service_zvanje_service__["a" /* ZvanjeService */]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/page/users/user/add-doc/add-doc.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/users/user/add-doc/add-doc.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Dodavanje Dokumenta</h2>\n<mat-dialog-content>\n  <mat-form-field class=\"w-75\">\n    <mat-select placeholder=\"Tip Dokumenta\" [(ngModel)]=\"data.doc.tipDokumenta.id\"\n                required [disabled]=\"tipovi.length===0\">\n      <mat-option *ngFor=\"let t of tipovi\" [value]=\"t.id\">\n        {{ t.naziv}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <div class=\"alert alert-danger\" *ngIf=\"tipovi.length===0\">Ucenik vec poseduje sva dokumenta</div>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Ucenik\" [(ngModel)]=\"data.doc.ucenik.username\" disabled>\n  </mat-form-field>\n  <button mat-raised-button (click)=\"upload_file.click()\" color=\"primary\">\n    <mat-icon>file_upload</mat-icon>\n    Upload document\n  </button>\n  <input hidden type=\"file\" placeholder=\"Upload\" required #upload_file (change)=\"fileChange($event)\">\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-icon-button [mat-dialog-close]=\"{result:true, doc:data.doc, file: data.file}\"\n          color=\"primary\" matTooltip=\"Add\" [disabled]=\"data.doc.tipDokumenta.id===0 || data.file ==null\">\n    <mat-icon>add</mat-icon>\n  </button>\n  <span class=\"spacer\"></span>\n  <button mat-icon-button mat-dialog-close matTooltip=\"Close\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/page/users/user/add-doc/add-doc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDocComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_tip_dokumenta_service__ = __webpack_require__("./src/app/service/tip-dokumenta.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AddDocComponent = /** @class */ (function () {
    function AddDocComponent(data, tipService) {
        var _this = this;
        this.data = data;
        this.tipService = tipService;
        this.tipovi = [];
        var typesDocs = [];
        data.docs.forEach(function (n) {
            typesDocs.push(n.tipDokumenta.id);
        });
        tipService.getAll().subscribe(function (types) { return _this.tipovi = types.filter(function (n) {
            return typesDocs.indexOf(n.id) === -1;
        }); });
    }
    AddDocComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length === 1) {
            this.data.file = fileList[0];
        }
    };
    AddDocComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-doc',
            template: __webpack_require__("./src/app/page/users/user/add-doc/add-doc.component.html"),
            styles: [__webpack_require__("./src/app/page/users/user/add-doc/add-doc.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__service_tip_dokumenta_service__["a" /* TipDokumentaService */]])
    ], AddDocComponent);
    return AddDocComponent;
}());



/***/ }),

/***/ "./src/app/page/users/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/users/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user!=null\">\n  <mat-spinner *ngIf=\"loading\"></mat-spinner>\n  <mat-tab-group *ngIf=\"!loading\">\n    <mat-tab label=\"Info\">\n      <ng-template mat-tab-label>\n        <mat-icon>info_outline</mat-icon> Info\n      </ng-template>\n      <div class=\"m-5 row\">\n        <div class=\"col-md-3\">\n          <img [src]=\"user.href\" class=\"rounded border border-dark\" *ngIf=\"user.href\" height=\"150\">\n          <button mat-raised-button *ngIf=\"me!=null && user!=null && user.username===me.username\"\n                  (click)=\"upload_file.click()\" color=\"primary\">\n            <mat-icon>file_upload</mat-icon>\n            Change profile picture\n          </button>\n          <input hidden type=\"file\" placeholder=\"Upload\" accept=\"image/*\" required #upload_file (change)=\"fileChange($event)\">\n          <button mat-raised-button [routerLink]=\"['/inbox',user.id]\"\n                  *ngIf=\"me!=null && user!=null && user.username!==me.username\">\n            <mat-icon>message</mat-icon>\n            Send Message\n          </button>\n        </div>\n        <div class=\"col-md-9 row\">\n          <mat-form-field class=\"col-md-12\">\n            <input matInput placeholder=\"Username\" [(ngModel)]=\"user.username\" disabled>\n          </mat-form-field>\n          <mat-form-field class=\"col-md-6\">\n            <input matInput placeholder=\"First name\" [(ngModel)]=\"user.ime\" disabled>\n          </mat-form-field>\n          <mat-form-field class=\"col-md-6\">\n            <input matInput placeholder=\"Last name\" [(ngModel)]=\"user.prezime\" disabled>\n          </mat-form-field>\n          <mat-form-field class=\"col-md-6\">\n            <input matInput placeholder=\"Email\" [(ngModel)]=\"user.email\" disabled>\n          </mat-form-field>\n          <mat-form-field class=\"col-md-6\">\n            <input matInput placeholder=\"Type\" [(ngModel)]=\"user.type\" disabled>\n          </mat-form-field>\n          <mat-form-field *ngIf=\"user.isNastavnik()\" class=\"col-md-4\">\n            <input matInput placeholder=\"Zvanje\"\n                   [(ngModel)]=\"user.zvanje.naziv\" disabled>\n          </mat-form-field>\n          <mat-form-field *ngIf=\"user.isUcenik()\" class=\"col-md-4\">\n            <input matInput placeholder=\"Broj Indexa\"\n                   [(ngModel)]=\"user.brojIndexa\" disabled>\n          </mat-form-field>\n          <div class=\"col-md-4\">\n            <span>Authorities</span>\n            <mat-chip-list>\n              <mat-chip *ngFor=\"let key of user.authorities\" disabled>\n                {{key.name.substring(5).toLowerCase()}}\n              </mat-chip>\n            </mat-chip-list>\n          </div>\n          <div class=\"\">\n            <span *ngIf=\"user.online\"> <mat-icon class=\"text-success text-sm-center\">lens</mat-icon> <i>Online</i></span>\n            <span *ngIf=\"!user.online\"> <mat-icon class=\"text-danger text-sm-center\">lens</mat-icon>\n            <i>{{user.lastOnline | date: 'dd.MM.yyyy. HH:mm'}}</i></span>\n          </div>\n        </div>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Predmeti\" *ngIf=\"predmeti && predmeti.length!==0\">\n      <ng-template mat-tab-label>\n          Predmeti <span class=\"badge badge-pill badge-dark\">{{predmeti.length}}</span>\n      </ng-template>\n      <div>\n        <mat-list>\n          <mat-list-item *ngFor=\"let p of predmeti\">\n            <mat-icon mat-list-icon>subject</mat-icon>\n            <h4 mat-line><i>{{p.naziv}}</i></h4>\n            <p mat-line>Broj casova predavanje: {{p.brojCasovaPredavanja}}</p>\n            <p mat-line>Broj casova vezbi: {{p.brojCasovaVezbi}}</p>\n            <p mat-line>\n              Aktivnosti:\n              <mat-chip-list>\n                <mat-chip *ngFor=\"let a of p.aktivnosti\" disabled>\n                  {{a.naziv}}\n                </mat-chip>\n              </mat-chip-list>\n            </p>\n            <a mat-button color=\"primary\" [routerLink]=\"['/predmeti',p.id]\" matTooltip=\"Open\">\n              <mat-icon>link</mat-icon>\n            </a>\n            <mat-divider></mat-divider>\n          </mat-list-item>\n        </mat-list>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Uplate\" *ngIf=\"user.isUcenik()\">\n      <ng-template mat-tab-label>\n        Uplate <span class=\"badge badge-pill badge-dark\">{{uplate.length}}</span>\n      </ng-template>\n      <div>\n        <mat-list>\n          <mat-list-item *ngFor=\"let u of uplate\">\n            <mat-icon mat-list-icon>payment</mat-icon>\n            <p mat-line>Predmet:\n              <a mat-button color=\"accent\" [routerLink]=\"['/predmeti',u.predmet.id]\">\n                {{u.predmet.naziv}}\n              </a>\n            </p>\n            <p mat-line>Suma: <i>{{u.suma}}</i> din</p>\n            <mat-divider></mat-divider>\n          </mat-list-item>\n        </mat-list>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Dokumenti\" *ngIf=\"user.isUcenik()\">\n      <ng-template mat-tab-label>\n        Dokumenti <span class=\"badge badge-pill badge-dark\">{{docs.length}}</span>\n      </ng-template>\n      <div>\n        <button mat-mini-fab matTooltip=\"Add document\" color=\"primary\" (click)=\"addDoc()\"\n                *ngIf=\"me!=null && user!=null && (isAdmin || me.username===user.username)\">\n          <mat-icon>add</mat-icon>\n        </button>\n        <mat-list>\n          <mat-list-item *ngFor=\"let d of docs\">\n            <mat-icon mat-list-icon>note</mat-icon>\n            <h4 mat-line><i>{{d.tipDokumenta.naziv}}</i></h4>\n            <button mat-button color=\"primary\" (click)=\"openDoc(d)\"\n                    matTooltip=\"open\" *ngIf=\"supportedType(d.filename)\">\n              <mat-icon>link</mat-icon>\n            </button>\n            <button mat-button color=\"primary\" (click)=\"download(d.filename)\" matTooltip=\"Download file\" *ngIf=\"d.filename\">\n              <mat-icon>file_download</mat-icon>\n            </button>\n            <button mat-button color=\"warn\" matTooltip=\"Delete\" (click)=\"deleteDoc(d)\"\n                    *ngIf=\"me && user && (me.username===user.username || isAdmin)\">\n              <mat-icon>delete</mat-icon>\n            </button>\n            <mat-divider></mat-divider>\n          </mat-list-item>\n        </mat-list>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</div>\n<app-not-found *ngIf=\"user===null\" class=\"not-found\"></app-not-found>\n"

/***/ }),

/***/ "./src/app/page/users/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_user_api__ = __webpack_require__("./src/app/model/user-api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_dokument__ = __webpack_require__("./src/app/model/dokument.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_doc_add_doc_component__ = __webpack_require__("./src/app/page/users/user/add-doc/add-doc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_dokument_service__ = __webpack_require__("./src/app/service/dokument.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_file_service__ = __webpack_require__("./src/app/service/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dialog_document_dialog_document_component__ = __webpack_require__("./src/app/page/users/dialog-document/dialog-document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var UserComponent = /** @class */ (function () {
    function UserComponent(route, userService, snackBar, documentService, authService, _router, dialog, fileService, domSanitizer) {
        this.route = route;
        this.userService = userService;
        this.snackBar = snackBar;
        this.documentService = documentService;
        this.authService = authService;
        this._router = _router;
        this.dialog = dialog;
        this.fileService = fileService;
        this.domSanitizer = domSanitizer;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__model_user_api__["a" /* UserApi */]();
        this.docs = [];
        this.uplate = [];
        this.predmeti = [];
        this.isAdmin = false;
        this.loading = true;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        this.get(0);
        this._router.events.filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (event) {
            if (event.urlAfterRedirects.indexOf('users/') !== -1) {
                _this.id = event.urlAfterRedirects.split('/').pop();
                if (_this.id !== '') {
                    _this.docs = [];
                    _this.uplate = [];
                    _this.predmeti = [];
                    _this.get(1);
                }
            }
        });
    };
    UserComponent.prototype.get = function (num) {
        var _this = this;
        this.userService.get(this.id).subscribe(function (data) {
            _this.user = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__model_user_api__["a" /* UserApi */](), data);
            _this.loading = false;
            _this.fileService.getBlobUser(_this.user);
            if (_this.user.isNastavnik()) {
                _this.userService.getPredmeti(_this.user.id).subscribe(function (data) { return _this.predmeti = data; });
            }
            else if (_this.user.isUcenik()) {
                _this.userService.getUplate(_this.user.id).subscribe(function (data) { return _this.uplate = data; });
                _this.userService.getDokumenta(_this.user.id).subscribe(function (data) { return _this.docs = data; });
                _this.userService.getPredmeti(_this.user.id).subscribe(function (data) { return _this.predmeti = data; });
            }
            if (num == 0) {
                _this.authService.me().subscribe(function (data) {
                    _this.me = data;
                    _this.isAdmin = _this.me.type.toLowerCase() === 'user';
                });
            }
        }, function () { return _this.user = null; });
    };
    UserComponent.prototype.addDoc = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__add_doc_add_doc_component__["a" /* AddDocComponent */], {
            panelClass: 'dialog-600x400',
            data: {
                doc: new __WEBPACK_IMPORTED_MODULE_4__model_dokument__["a" /* Dokument */]().setUcenik(this.user),
                docs: this.docs, file: null
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.documentService.add(result.doc, result.file).subscribe(function (data) {
                    _this.docs.push(data);
                    _this.snackBar.open('Successfully added!', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                }, function () {
                    _this.snackBar.open('Error with add new document', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    UserComponent.prototype.deleteDoc = function (doc) {
        var _this = this;
        var index = this.docs.indexOf(doc);
        this.snackBar.open("Dokument with name: " + doc.tipDokumenta.naziv + " will be deleted\n" +
            'Are you sure?', 'Yes', {
            duration: 10000, verticalPosition: 'top'
        }).onAction().subscribe(function () {
            _this.documentService.delete(doc).subscribe(function () { return _this.docs.splice(index, 1); }, function () { });
        });
    };
    UserComponent.prototype.download = function (file) {
        this.fileService.downloadFile(file);
    };
    UserComponent.prototype.openDoc = function (doc) {
        var _this = this;
        this.fileService.getBlobDoc(doc).subscribe(function (data) {
            doc.href = _this.domSanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(data));
            var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__dialog_document_dialog_document_component__["a" /* DialogDocumentComponent */], {
                panelClass: 'fullscreen-dialog',
                data: {
                    href: doc.href
                }
            });
        }, function () { });
    };
    UserComponent.prototype.supportedType = function (filename) {
        var name = filename.toLowerCase();
        return name.endsWith('.png') || name.endsWith('.jpg')
            || name.endsWith('.pdf') || name.endsWith('.jpeg') || name.endsWith('.gif');
    };
    UserComponent.prototype.fileChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length === 1) {
            var file = fileList[0];
            this.userService.changePicture(this.me.id, file).subscribe(function (data) {
                _this.user = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__model_user_api__["a" /* UserApi */](), data);
                _this.fileService.getBlobUser(_this.user);
                _this.snackBar.open('Successful change profile picture!', 'Ok', {
                    duration: 4000, verticalPosition: 'top'
                });
            });
        }
        else {
            this.snackBar.open('Only one file can be uploaded', 'Ok', {
                duration: 4000, verticalPosition: 'top'
            });
        }
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/page/users/user/user.component.html"),
            styles: [__webpack_require__("./src/app/page/users/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_8__service_dokument_service__["a" /* DokumentService */], __WEBPACK_IMPORTED_MODULE_5__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_9__service_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["c" /* DomSanitizer */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/page/users/users.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isAdmin\">\n  <div style=\"padding: 8px 24px 0\">\n    <mat-toolbar>\n      <button mat-mini-fab color=\"primary\" matTooltip=\"Add new user\" (click)=\"addUser()\">\n        <mat-icon>person_add</mat-icon>\n      </button>\n      <span class=\"spacer\"></span>\n      <mat-form-field class=\"w-90\">\n        <mat-icon matPrefix>search</mat-icon>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n      </mat-form-field>\n    </mat-toolbar>\n  </div>\n  <mat-spinner *ngIf=\"loading\"></mat-spinner>\n  <mat-table *ngIf=\"!loading\" #table [dataSource]=\"users\">\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> First name </mat-header-cell>\n      <mat-cell *matCellDef=\"let user\"> {{user.ime}} </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"surname\">\n      <mat-header-cell *matHeaderCellDef> Last name </mat-header-cell>\n      <mat-cell *matCellDef=\"let user\"> {{user.prezime}} </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"username\">\n      <mat-header-cell *matHeaderCellDef> Username </mat-header-cell>\n      <mat-cell *matCellDef=\"let user\"> {{user.username}} </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"email\">\n      <mat-header-cell *matHeaderCellDef> Email </mat-header-cell>\n      <mat-cell *matCellDef=\"let user\"> {{user.email}} </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"type\">\n      <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\n      <mat-cell *matCellDef=\"let user\"> {{user.type}} </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"online\">\n      <mat-header-cell *matHeaderCellDef> Last Online </mat-header-cell>\n      <mat-cell *matCellDef=\"let user\">\n        <span *ngIf=\"user.online\">\n          <mat-icon class=\"text-success text-sm-center\">lens</mat-icon>\n          <i>Online</i>\n        </span>\n        <span *ngIf=\"!user.online\">\n          <mat-icon class=\"text-danger text-sm-center\">lens</mat-icon>\n          <i>{{user.lastOnline | date: 'dd.MM.yyyy. HH:mm'}}</i>\n        </span>\n      </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"options\">\n      <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n      <mat-cell *matCellDef=\"let user\">\n        <button mat-icon-button [routerLink]=\"['/users',user.username]\" matTooltip=\"Open\" color=\"primary\">\n          <mat-icon>person</mat-icon>\n        </button>\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" *ngIf=\"user.type!=='User'\" color=\"primary\" matTooltip=\"Options\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item (click)=\"updateUser(user)\">\n            <mat-icon>edit</mat-icon> Update\n          </button>\n          <button mat-menu-item (click)=\"changePassword(user)\">\n            <mat-icon>edit</mat-icon> Change password\n          </button>\n          <button mat-menu-item (click)=\"deleteUser(user)\">\n            <mat-icon>delete</mat-icon> Delete\n          </button>\n        </mat-menu>\n      </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n  <mat-paginator #paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\">\n  </mat-paginator>\n</div>\n<mat-spinner *ngIf=\"loading\"></mat-spinner>\n<app-not-found *ngIf=\"!isAdmin && !loading\" class=\"not-found\"></app-not-found>"

/***/ }),

/***/ "./src/app/page/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_user_api__ = __webpack_require__("./src/app/model/user-api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_user_add_user_component__ = __webpack_require__("./src/app/page/users/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_user_edit_user_component__ = __webpack_require__("./src/app/page/users/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__change_password_change_password_component__ = __webpack_require__("./src/app/page/users/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_user_password__ = __webpack_require__("./src/app/model/user-password.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UsersComponent = /** @class */ (function () {
    function UsersComponent(dialog, userService, authService, snackBar, _router) {
        var _this = this;
        this.dialog = dialog;
        this.userService = userService;
        this.authService = authService;
        this.snackBar = snackBar;
        this._router = _router;
        this.displayedColumns = ['name', 'surname', 'username', 'email', 'type', 'online', 'options'];
        this.users = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatTableDataSource */]();
        this.loading = true;
        this.authService.me().subscribe(function (data) {
            _this.me = data;
            _this.isAdmin = data.authorities
                .filter(function (a) { return a.name.substring(5).toLowerCase() === 'admin'; }).length === 1;
        });
    }
    UsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.users.filter = filterValue;
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.users.paginator = this.paginator;
        this.getAll();
    };
    UsersComponent.prototype.getAll = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (data) {
            _this.users.data = data;
            _this.users.paginator = _this.paginator;
            _this.loading = false;
        }, function (err) {
            if (err.status !== 403) {
                _this.snackBar.open('Something is wrong with the server', 'OK', {
                    duration: 4000, verticalPosition: 'top'
                });
            }
            else {
                _this.users.data = null;
            }
        });
    };
    UsersComponent.prototype.addUser = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__add_user_add_user_component__["a" /* AddUserComponent */], {
            data: {
                user: new __WEBPACK_IMPORTED_MODULE_3__model_user_api__["a" /* UserApi */]()
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.userService.add(result.user).subscribe(function (data) {
                    _this.users.data.push(data);
                    _this.users.paginator = _this.paginator;
                    _this.snackBar.open("Success added!: Open User with username:'" + result.user.username + "'\n", 'Open', {
                        duration: 10000, verticalPosition: 'top'
                    }).onAction().subscribe(function () {
                        _this._router.navigate(['/users', result.user.username]);
                    });
                }, function () {
                    _this.snackBar.open("Error, user with username: '" + result.user.username + "' can not be added", 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.snackBar.open('Are you sure?', 'Yes', {
            duration: 10000, verticalPosition: 'top'
        }).onAction().subscribe(function () {
            _this.userService.delete(user).subscribe(function () {
                _this.users.data = _this.users.data.filter(function (u) { return u.id !== user.id; });
                _this.users.paginator = _this.paginator;
            });
        });
    };
    UsersComponent.prototype.updateUser = function (user) {
        var _this = this;
        var index = this.users.data.indexOf(user);
        var users = this.users.data;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__edit_user_edit_user_component__["a" /* EditUserComponent */], {
            data: {
                user: Object.assign(new __WEBPACK_IMPORTED_MODULE_3__model_user_api__["a" /* UserApi */](), user),
                me: Object.assign(new __WEBPACK_IMPORTED_MODULE_3__model_user_api__["a" /* UserApi */](), this.me)
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.userService.update(result.user).subscribe(function (data) {
                    // this.getAll();
                    users[index] = data;
                    _this.users.data = users;
                    _this.snackBar.open("Success changed!: Open User with username:'" + result.user.username + "'\n", 'Open', {
                        duration: 10000, verticalPosition: 'top'
                    }).onAction().subscribe(function () {
                        _this._router.navigate(['/users', result.user.username]);
                    });
                }, function () {
                    _this.snackBar.open("Error, user with username " + result.user.username + " is already exists", 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    UsersComponent.prototype.changePassword = function (user) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__change_password_change_password_component__["a" /* ChangePasswordComponent */], {
            panelClass: 'dialog-600x400',
            data: { user: new __WEBPACK_IMPORTED_MODULE_8__model_user_password__["a" /* UserPassword */](), admin: true }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.userService.changePassword(user.id, result.user).subscribe(function () {
                    _this.snackBar.open('Successfully changed!', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                }, function () {
                    _this.snackBar.open('Error with change password!', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatPaginator */])
    ], UsersComponent.prototype, "paginator", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/page/users/users.component.html"),
            styles: [__webpack_require__("./src/app/page/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_9__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    // https://stackoverflow.com/questions/40678206/angular-2-filter-search-list
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, keys, term) {
        if (!term) {
            return value;
        }
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'search'
        })
        // https://stackoverflow.com/questions/40678206/angular-2-filter-search-list
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/service/aktivnost.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AktivnostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AktivnostService = /** @class */ (function () {
    function AktivnostService(http) {
        this.http = http;
        this.aktivnosti = '/api/aktivnosti/';
    }
    AktivnostService.prototype.add = function (akt) {
        return this.http.post("" + this.aktivnosti, akt);
    };
    AktivnostService.prototype.edit = function (akt) {
        return this.http.put("" + this.aktivnosti + akt.id, akt);
    };
    AktivnostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AktivnostService);
    return AktivnostService;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.loginPost = function (user) {
        var body = "username=" + user.username + "&password=" + user.password;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
        return this.http.post('/auth/login', body, httpOptions);
    };
    AuthService.prototype.setToken = function (data) {
        localStorage.setItem('token', data.access_token);
    };
    AuthService.prototype.removeToken = function () {
        localStorage.removeItem('token');
    };
    AuthService.prototype.logout = function () {
        this.removeToken();
        return this.http.get('/auth/logout');
    };
    AuthService.prototype.me = function () {
        return this.http.get('/api/me');
    };
    AuthService.prototype.offline = function () {
        return this.http.get('/api/offline');
    };
    AuthService.prototype.nav_items = function () {
        return this.http.get('/api/nav_items');
    };
    AuthService.prototype.isLoggedIn = function () {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.group_chat = '/api/group_chat';
    }
    ChatService.prototype.getAll = function (page) {
        return this.http.get(this.group_chat + "?page=" + page, { observe: 'response' });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/service/dokument.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DokumentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DokumentService = /** @class */ (function () {
    function DokumentService(http) {
        this.http = http;
        this.docs = '/api/dokumenti/';
    }
    DokumentService.prototype.add = function (doc, file) {
        var formData = new FormData();
        formData.append('file', file);
        formData.append('ucenik', String(doc.ucenik.username));
        formData.append('tipDokumenta', String(doc.tipDokumenta.id));
        return this.http.post("" + this.docs, formData);
    };
    DokumentService.prototype.delete = function (doc) {
        var id = typeof doc === 'number' ? doc : doc.id;
        return this.http.delete("" + this.docs + id);
    };
    DokumentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], DokumentService);
    return DokumentService;
}());



/***/ }),

/***/ "./src/app/service/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver__ = __webpack_require__("./node_modules/file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileService = /** @class */ (function () {
    function FileService(http, domSanitizer) {
        this.http = http;
        this.domSanitizer = domSanitizer;
    }
    FileService.prototype.getBlobUser = function (user) {
        var _this = this;
        this.http.get(user.picture, { responseType: 'blob' })
            .subscribe(function (data) {
            user.href = _this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data));
        }, function () { });
    };
    FileService.prototype.downloadFile = function (filename) {
        this.http.get(filename, { responseType: 'blob' })
            .subscribe(function (data) {
            Object(__WEBPACK_IMPORTED_MODULE_3_file_saver__["saveAs"])(data, filename.substr(6));
        }, function () { });
    };
    FileService.prototype.getBlobDoc = function (doc) {
        return this.http.get(doc.filename, { responseType: 'blob' });
    };
    FileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/service/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
        this.messages = '/api/messages/';
    }
    MessageService.prototype.countUnread = function () {
        return this.http.get(this.messages + "unread_count");
    };
    MessageService.prototype.chat = function () {
        return this.http.get("" + this.messages);
    };
    MessageService.prototype.countUnreadUser = function (id) {
        return this.http.get("" + this.messages + id + "/unread");
    };
    MessageService.prototype.chatUser = function (id, page) {
        return this.http.get("" + this.messages + id + "?page=" + page, { observe: 'response' });
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/service/nastavnik.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NastavnikService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NastavnikService = /** @class */ (function () {
    function NastavnikService(http) {
        this.http = http;
        this.nastavnici = '/api/nastavnici/';
    }
    NastavnikService.prototype.getAll = function () {
        return this.http.get(this.nastavnici);
    };
    NastavnikService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], NastavnikService);
    return NastavnikService;
}());



/***/ }),

/***/ "./src/app/service/predmet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredmetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PredmetService = /** @class */ (function () {
    function PredmetService(http) {
        this.http = http;
        this.predmeti = '/api/predmeti/';
    }
    PredmetService.prototype.getAll = function (naziv, page, num) {
        naziv = naziv == undefined ? '' : naziv;
        page = page == undefined ? 0 : page;
        num = num == undefined ? 5 : num;
        return this.http.get(this.predmeti + "?naziv=" + naziv + "&page=" + page + "&num=" + num, { observe: 'response' });
    };
    PredmetService.prototype.get = function (id) {
        return this.http.get("" + this.predmeti + id);
    };
    PredmetService.prototype.getUcenici = function (id) {
        return this.http.get("" + this.predmeti + id + "/ucenici");
    };
    PredmetService.prototype.postUcenici = function (id, helpers) {
        return this.http.post("" + this.predmeti + id + "/ucenici", helpers);
    };
    PredmetService.prototype.getNastavnici = function (id) {
        return this.http.get("" + this.predmeti + id + "/nastavnici");
    };
    PredmetService.prototype.postNastavnici = function (id, helpers) {
        return this.http.post("" + this.predmeti + id + "/nastavnici", helpers);
    };
    PredmetService.prototype.getUplate = function (id) {
        return this.http.get("" + this.predmeti + id + "/uplate");
    };
    PredmetService.prototype.add = function (predmet) {
        return this.http.post(this.predmeti, predmet);
    };
    PredmetService.prototype.edit = function (predmet) {
        return this.http.put("" + this.predmeti + predmet.id, predmet);
    };
    PredmetService.prototype.delete = function (predmet) {
        var id = typeof predmet === 'number' ? predmet : predmet.id;
        return this.http.delete("" + this.predmeti + id);
    };
    PredmetService.prototype.deleteNastavnik = function (predmet, nastavnik) {
        return this.http.delete("" + this.predmeti + predmet + "/nastavnici/" + nastavnik);
    };
    PredmetService.prototype.deleteUcenik = function (predmet, ucenik) {
        return this.http.delete("" + this.predmeti + predmet + "/ucenici/" + ucenik);
    };
    PredmetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PredmetService);
    return PredmetService;
}());



/***/ }),

/***/ "./src/app/service/tip-aktivnosti.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipAktivnostiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TipAktivnostiService = /** @class */ (function () {
    function TipAktivnostiService(http) {
        this.http = http;
        this.tipovi = '/api/tipovi_aktivnosti/';
    }
    TipAktivnostiService.prototype.getAll = function () {
        return this.http.get("" + this.tipovi);
    };
    TipAktivnostiService.prototype.add = function (tip) {
        return this.http.post(this.tipovi, tip);
    };
    TipAktivnostiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], TipAktivnostiService);
    return TipAktivnostiService;
}());



/***/ }),

/***/ "./src/app/service/tip-dokumenta.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipDokumentaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TipDokumentaService = /** @class */ (function () {
    function TipDokumentaService(http) {
        this.http = http;
        this.tipovi = '/api/tipovi_dokumenta/';
    }
    TipDokumentaService.prototype.getAll = function () {
        return this.http.get("" + this.tipovi);
    };
    TipDokumentaService.prototype.add = function (tip) {
        return this.http.post(this.tipovi, tip);
    };
    TipDokumentaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], TipDokumentaService);
    return TipDokumentaService;
}());



/***/ }),

/***/ "./src/app/service/ucenik.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UcenikService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UcenikService = /** @class */ (function () {
    function UcenikService(http) {
        this.http = http;
        this.ucenici = '/api/ucenici/';
    }
    UcenikService.prototype.getAll = function () {
        return this.http.get(this.ucenici);
    };
    UcenikService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UcenikService);
    return UcenikService;
}());



/***/ }),

/***/ "./src/app/service/uplata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UplataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UplataService = /** @class */ (function () {
    function UplataService(http) {
        this.http = http;
        this.uplate = '/api/uplate/';
    }
    UplataService.prototype.add = function (uplata) {
        return this.http.post("" + this.uplate, uplata);
    };
    UplataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UplataService);
    return UplataService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.users = '/api/users/';
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.users);
    };
    UserService.prototype.get = function (id) {
        return this.http.get("" + this.users + id);
    };
    UserService.prototype.getAuthorities = function (id) {
        return this.http.get("" + this.users + id + "/authorities");
    };
    UserService.prototype.getPredmeti = function (id) {
        return this.http.get("" + this.users + id + "/predmeti");
    };
    UserService.prototype.getUplate = function (id) {
        return this.http.get("" + this.users + id + "/uplate");
    };
    UserService.prototype.getDokumenta = function (id) {
        return this.http.get("" + this.users + id + "/dokumenti");
    };
    UserService.prototype.add = function (user) {
        return this.http.post(this.users, user);
    };
    UserService.prototype.delete = function (user) {
        var id = typeof user === 'number' ? user : user.id;
        return this.http.delete("" + this.users + id);
    };
    UserService.prototype.update = function (user) {
        return this.http.put("" + this.users + user.id, user);
    };
    UserService.prototype.changePassword = function (id, user) {
        return this.http.patch("" + this.users + id + "/password", user);
    };
    UserService.prototype.changePicture = function (id, file) {
        var formData = new FormData();
        formData.append('file', file);
        return this.http.put("" + this.users + id + "/picture", formData);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/service/zvanje.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZvanjeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZvanjeService = /** @class */ (function () {
    function ZvanjeService(http) {
        this.http = http;
        this.zvanja = '/api/zvanja/';
    }
    ZvanjeService.prototype.getAll = function () {
        return this.http.get(this.zvanja);
    };
    ZvanjeService.prototype.get = function (id) {
        return this.http.get("" + this.zvanja + id);
    };
    ZvanjeService.prototype.add = function (zvanje) {
        return this.http.post(this.zvanja, zvanje);
    };
    ZvanjeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ZvanjeService);
    return ZvanjeService;
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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
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