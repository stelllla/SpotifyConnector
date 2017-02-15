import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppRoutingModule} from './app.routing';

import {AppModule} from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule, [AppRoutingModule]);
