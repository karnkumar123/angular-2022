import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementsComponent } from './server-elements/server-elements.component';
import { GameControlComponent } from './exercise/game-control/game-control.component';
import { OddComponent } from './exercise/game-control/odd/odd.component';
import { EvenComponent } from './exercise/game-control/even/even.component';
import { BasicHighlight } from './directive/basic-highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight.directive';
import { AnchorTagDirective } from './directive/anchor-tag.directive';
import { NgIfKaUltaDirective } from './directive/ng-if-ka-ulta.directive';
import { ActiveUserComponent } from './exercise/active-inactive-users/active-user/active-user.component';
import { InactiveUserComponent } from './exercise/active-inactive-users/inactive-user/inactive-user.component';
import { LoggerService } from './exercise/active-inactive-users/logger.service';
import { UserService } from './exercise/active-inactive-users/user.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    CockpitComponent,
    ServerElementsComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlight,
    BetterHighlightDirective,
    AnchorTagDirective,
    NgIfKaUltaDirective,
    ActiveUserComponent,
    InactiveUserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoggerService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
