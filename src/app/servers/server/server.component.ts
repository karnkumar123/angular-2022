import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
    serverId: number = Math.ceil(10 * Math.random());
    serverStatus: string = 'offline';
    constructor(){
        this.serverStatus = this.serverId > 5 ? 'online' : 'offline';
    }
    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}