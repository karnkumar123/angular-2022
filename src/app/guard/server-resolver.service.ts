import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Server } from "../routing/main/servers/server.model";
import { ServersService } from "../routing/main/servers/servers.service";


@Injectable()
export class ServerResolver implements Resolve<Server>{

    constructor(private _serverService: ServersService){}
    resolve(route: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot): Server | Promise<Server> | Observable<Server> {
                let serverId = route.params['id'];
                return this._serverService.getOneServer(+serverId);
    } 
}