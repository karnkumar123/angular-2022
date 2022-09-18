import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../model/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  @Input('error') error = null;
  @Input('allPosts') allPosts: Post[] = [];
  @Input('isFetching') isFetching: boolean = false;
  @Output('idsForDeletePost') idsForDeletePost = new EventEmitter<{id: number, checkedStatus: boolean}>();
  constructor() { }

  ngOnInit(): void {
  }
  onChange(event: Event){
    this.idsForDeletePost.emit({
      id: +((<HTMLInputElement>(event.target)).value), 
      checkedStatus: ((event.target) as HTMLInputElement).checked
    });
  }

}
