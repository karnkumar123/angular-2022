import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { CanDeactivateComponent } from 'src/app/guard/can-leave-edit-guard.service';
import { Server } from '../server.model';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateComponent {
  server: {name: string, id: number, status: 'Offline' | 'Online'};
  servername: string;
  serverstatus: 'Offline' | 'Online';
  serverId: number;
  changesSaved: boolean = false;
  constructor(private _activatedRoute: ActivatedRoute,
    private _serverService: ServersService, private _router: Router) { }
  

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(data => {
      // this.servername = data['name'];
      // this.serverstatus = data['status'];
    });

   
    this._activatedRoute.params.subscribe((params: Params) => {
      this.serverId = +params['id'];
      this._serverService.getOneServer(this.serverId).then((server: Server) => {
        this.server = server;
        this.servername = this.server.name;
        this.serverstatus = this.server.status;
      });
      
    })

    this._activatedRoute.fragment.subscribe(data => console.log('Fragment->', data));
  }
  
  updateServer(): void{
    this._serverService.updateServer(this.serverId, this.serverstatus, this.servername);
    this.changesSaved = true;
    this._router.navigate(['../../'], {relativeTo: this._activatedRoute});
  }

  canDeactivateEditComponents(): Observable<boolean> | Promise<boolean> | boolean{
    if(
      (this.server.name !== this.servername || this.server.status !== this.serverstatus) && 
      (this.changesSaved=== false)
      ){
      return confirm('Do you really want to move without saving ?');     
    }else{
      return true;
    }
  }
}
