import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Post } from './model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  errorSubject = new Subject<string>();
  constructor(private _http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this._http.get<Post[]>('/api/posts/');
  }

  createPost(body){
    this._http.post<Post>('/api/posts', body).subscribe({next: (responseDate) => {
      this.getPosts();
    }, error: (error) => {
      this.errorSubject.next(error);
    }
  })
  }

  deletePosts(idToBeDeleted: number){
    return this._http.delete('/api/posts/'+idToBeDeleted).toPromise();
  }

}
