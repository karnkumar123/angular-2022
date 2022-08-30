import { Injectable } from '@angular/core';
import {Server} from './server.model'

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor() { }
  private servers: Server[] = [
    {id:1, name:'Production Server', status: 'Offline'},
    {id:2, name:'Test Server', status: 'Online'},
    {id:3, name:'Dev Server', status: 'Offline'}
  ];

  getAllServer(): Server[]{
    // return this.servers;
    return this.servers;
  }

  getOneServer(id: number): Promise<Server>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.servers.find(server => server.id === id));
      }, 2000)
    })
  }

  updateServer(id: number, status: 'Online' | 'Offline', name: string){
    const serverIndex = this.servers.findIndex((server => server.id === id));
    this.servers[serverIndex].name = name;
    this.servers[serverIndex].status = status;
  }
}
