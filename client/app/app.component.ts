import { Component } from '@angular/core';
import { SpotifyService } from "./services/spotify.service";
import { Router, NavigationStart} from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

import 'rxjs/add/operator/filter';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.components.html',
  providers: [SpotifyService, Router, AuthenticationService]
})
export class AppComponent  {

  constructor(private _spotifyService: SpotifyService, private _router: Router, private _auth: AuthenticationService) {
    this._router.events.subscribe((event:NavigationStart) => {
        console.log(event);
        let currUserEmail = this._auth.getCurrentUser();
        if (!currUserEmail) {
          this._router.navigate(['/login']);
        }

    });
  }
}
