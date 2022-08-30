import { Component, OnInit } from '@angular/core';
import {postsList} from './posts.data';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  username: string = '';
  isShow: boolean = true;
  timeStamp = [];
  postsList = postsList;
  usersList: {name: string, age: number}[] = [
    {name: 'karan', age: 23},
    {name: 'saurav', age: 13}
  ]

  ngOnInit(): void {
  }

  onResetUsername(): void{
    this.username = '';
  }
  onClickOfDisplayDetails(){
    this.isShow = !this.isShow;
    let timeStamp = new Date();
    this.timeStamp.push(timeStamp.toLocaleString());
  }
  
  updatePost(){
    this.postsList.push({
      "postId": 2,
      "id": 11,
      "name": "karan kumar",
      "email": "karankumar@gmail.com",
      "body": "Nothing to say"
    });
  }
  trackById(index: number, item: {postId: number, id: number, name: string, email: string, body: string}){
    return item.id;
  }
}
