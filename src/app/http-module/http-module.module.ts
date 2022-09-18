import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './main-container/main-container.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PostsListComponent } from './main-container/posts-list/posts-list.component';
import { PostService } from './post.service';


@NgModule({
  declarations: [
    MainContainerComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [MainContainerComponent],
  providers: [PostService]
})
export class HttpModuleModule { }
