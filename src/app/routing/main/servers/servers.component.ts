import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Server } from './server.model';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: Server[];
  constructor(private _router: Router, private _serverService: ServersService) { 
    
  }

  ngOnInit(): void {
    this.servers = this._serverService.getAllServer();
  }
  editServer(server: {name: string, id: number, status: 'Online' | 'Offline'}){
    this._router.navigate(['/servers', server.id, 'edit'], 
                        {
                          queryParams: {serverStatus: server.status, allowEdit: true}, 
                          fragment: 'loading'
                        }
                      )
  }

}
