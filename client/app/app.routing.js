"use strict";
var router_1 = require("@angular/router");
var about_component_1 = require("./components/about/about.component");
var search_component_1 = require("./components/search/search.component");
var artist_component_1 = require("./components/artist/artist.component");
var album_component_1 = require("./components/album/album.component");
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./components/register/register.component");
//No hash strategy for routes without dynamic parameters
var appRoutes = [
    {
        path: '',
        component: search_component_1.SearchComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'artist/:id',
        component: artist_component_1.ArtistComponent
    },
    {
        path: 'album/:id',
        component: album_component_1.AlbumComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
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
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
/**
 * export const dynamicRouting: ModuleWithProviders = RouterModule.forRoot(dynamicRoutes);
 * */
//# sourceMappingURL=app.routing.js.map