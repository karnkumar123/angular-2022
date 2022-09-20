import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../model/post.model';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  @ViewChild('postForm') postForm: NgForm;
  allPosts: Post[] = [];
  isFetching = false;
  deletePostsIds: number[] = [];
  error = null;
  constructor(
    private _httpClient: HttpClient,
    private _postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  onCreatePost(){
    const body = {
      id: this.postForm.value.id,
      title: this.postForm.value.title,
      content: this.postForm.value.content
    }

    this._postService.createPost(body)
    .subscribe({
      next: (response) => {
        this.getPosts();
      },error: (error) => {
        console.log(error);
      }
    })
  }

  getPosts(){
    this.isFetching = true;
    this._postService.getPosts()
    .subscribe({
      next: (responseData: Post[]) => {
        this.isFetching = false;
        this.allPosts = responseData;
      },
      error: (error) => {
        this.error = error;
      }
    })
  }
  onClearPosts(){
    let response = {};
    this.deletePostsIds.forEach(async (id) => {
      response[id] = await this._postService.deletePosts(id)
    })
    console.log(response);
    this.getPosts();
  }

  collectIdsForDelete(post: {id: number, checkedStatus: boolean}){
    if(post.checkedStatus === true){
      this.deletePostsIds.push(post.id);
    }else{
      let index = this.deletePostsIds.findIndex(id => id === post.id);
      this.deletePostsIds.splice(index,1);
    }
  }
}
