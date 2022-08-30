import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { RdfModule } from './app/rdf/rdf.module';
import { RoutingModule } from './app/routing/routing.module';
import { TdfModule } from './app/tdf/tdf.module';
import { ObservablesModule } from './app/understanding-observables/observables.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RdfModule).then(() => {
  console.log('Reactive driven form module is bootstraped successfully !');
}).catch(err => console.error(err));
