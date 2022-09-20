import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap} from 'rxjs';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private _http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this._http.get<Post[]>('/api/posts/', {
      headers: new HttpHeaders({
        'custom-header': 'I am custom header',
      }),
      responseType: 'json'
    });
  }

  createPost(body){
    return this._http.post<Post>('/api/posts', body,{observe: 'body'})
  }

  deletePosts(idToBeDeleted: number){
    return this._http.delete('/api/posts/'+idToBeDeleted).toPromise();
  }

}
