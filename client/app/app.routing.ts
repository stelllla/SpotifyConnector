import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from "./components/album/album.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {UsersComponent} from "./components/users/users.component";


//No hash strategy for routes without dynamic parameters
const appRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'artist/:id',
    component: ArtistComponent
  },
  {
    path: 'album/:id',
    component: AlbumComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

//Different hash strategy for dynamically created routes that handle refreshing the page
/**const dynamicRoutes: Routes = [
 {
   path: 'artist/:id',
     component: ArtistComponent
 },{
    path: 'album/:id',
      component: AlbumComponent
  }
 ];*/

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
/**
 * export const dynamicRouting: ModuleWithProviders = RouterModule.forRoot(dynamicRoutes);
 * */
