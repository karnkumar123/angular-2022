import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { HttpModuleModule } from './app/http-module/http-module.module';
import { PipeModule } from './app/pipe/pipe.module';
import { RdfModule } from './app/rdf/rdf.module';
import { RoutingModule } from './app/routing/routing.module';
import { TdfModule } from './app/tdf/tdf.module';
import { ObservablesModule } from './app/understanding-observables/observables.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HttpModuleModule).then(() => {
  console.log('Http module is bootstraped successfully !');
}).catch(err => console.error(err));
