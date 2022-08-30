import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../guard/auth-guard.service";
import { CanLeaveEditGuard } from "../guard/can-leave-edit-guard.service";
import { ServerResolver } from "../guard/server-resolver.service";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { HomeComponent } from "./main/home/home.component";
import { EditServerComponent } from "./main/servers/edit-server/edit-server.component";
import { ServerComponent } from "./main/servers/server/server.component";
import { ServersComponent } from "./main/servers/servers.component";
import { UserComponent } from "./main/users/user/user.component";
import { UsersComponent } from "./main/users/users.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'users', component: UsersComponent, canActivateChild: [AuthGuard],children: [
      {path: ':id/:name', component: UserComponent},
    ]},
    {path: 'servers', 
      component: ServersComponent, 
      //canActivate: [AuthGuard], 
      canActivateChild: [AuthGuard],
      children: [
        {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}},
        {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanLeaveEditGuard]},
    ]},
    {path: 'not-found', component: PageNotFoundComponent, data: {message: 'Page Not found static data'}},
    {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})

export class RoutingRoutingModule{

}