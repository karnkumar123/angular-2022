import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Server } from '../server.model';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Server;
  allowEdit: boolean = false;
  constructor(private _activatedRoute: ActivatedRoute,
    private _serverService: ServersService,
    private _router: Router) { }

  ngOnInit(): void {
    let id: number;
    console.log('Server component loads->',new Date().toLocaleTimeString())

    // this._activatedRoute.params.subscribe((params: Params) => {
    //   id = +params['id'];
    //   this._serverService.getOneServer(id).then((server: Server) => {
    //     this.server = server;
    //     console.log('server data loads->', new Date().toLocaleTimeString());
    //   });
    // });

    this._activatedRoute.data.subscribe((data: Data) => {
      this.server = data['server'];
      console.log('server data loads->', new Date().toLocaleTimeString());
;    })

    this._activatedRoute.queryParams.subscribe((params: Params) => {
      this.allowEdit = params['allowEdit'] === '1' ? true : false;
    })
  }

  onEditServer(server: Server): void{
    this._router.navigate(['edit'], 
                          {
                            relativeTo: this._activatedRoute, 
                            queryParamsHandling: 'merge',
                            queryParams: {
                              name: server.name,
                              status: server.status
                            }
                          })
  }
}
