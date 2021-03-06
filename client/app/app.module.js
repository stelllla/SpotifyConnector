"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var navbar_component_1 = require("./components/navbar/navbar.component");
var app_component_1 = require("./app.component");
var about_component_1 = require("./components/about/about.component");
var search_component_1 = require("./components/search/search.component");
var app_routing_1 = require("./app.routing");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var artist_component_1 = require("./components/artist/artist.component");
var album_component_1 = require("./components/album/album.component");
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./components/register/register.component");
var users_component_1 = require("./components/users/users.component");
var forms_2 = require("@angular/forms");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var chat_component_1 = require("./components/chat/chat.component");
var create_message_component_1 = require("./components/create-message/create-message.component");
var chat_view_component_1 = require("./components/chat-view/chat.view.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_1.AppRoutingModule, forms_1.FormsModule, http_1.HttpModule, forms_2.ReactiveFormsModule],
        declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent, about_component_1.AboutComponent, search_component_1.SearchComponent, artist_component_1.ArtistComponent, album_component_1.AlbumComponent,
            login_component_1.LoginComponent, register_component_1.RegisterComponent, users_component_1.UsersComponent, chat_component_1.ChatComponent, create_message_component_1.CreateMessage, chat_view_component_1.ChatViewComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [cookies_service_1.CookieService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map