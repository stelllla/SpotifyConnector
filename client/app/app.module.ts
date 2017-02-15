import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NavbarComponent} from "./components/navbar/navbar.component";

import {AppComponent}  from './app.component';
import {AboutComponent} from "./components/about/about.component";
import {SearchComponent} from "./components/search/search.component";
import {AppRoutingModule} from "./app.routing";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ArtistComponent} from "./components/artist/artist.component";
import {AlbumComponent} from "./components/album/album.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {UsersComponent} from "./components/users/users.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';


@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpModule,ReactiveFormsModule],
  declarations: [AppComponent, NavbarComponent, AboutComponent, SearchComponent, ArtistComponent, AlbumComponent, LoginComponent, RegisterComponent, UsersComponent],
  bootstrap: [AppComponent],
  providers: [ CookieService ]
})
export class AppModule {
}
