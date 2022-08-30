import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './main/home/home.component';
import { UsersComponent } from './main/users/users.component';
import { ServersComponent } from './main/servers/servers.component';
import { UserComponent } from './main/users/user/user.component';
import { EditServerComponent } from './main/servers/edit-server/edit-server.component';
import { ServerComponent } from './main/servers/server/server.component';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { RoutingRoutingModule } from './routing-routing.module';
import { AuthGuard } from '../guard/auth-guard.service';
import { AuthService } from '../guard/auth-service';
import { CanLeaveEditGuard } from '../guard/can-leave-edit-guard.service';
import { ServerResolver } from '../guard/server-resolver.service';



@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RoutingRoutingModule
  ],
  providers: [AuthGuard, AuthService, CanLeaveEditGuard, ServerResolver],
  bootstrap:[MainComponent]
})
export class RoutingModule { }
