import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './main-container/main-container.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PostsListComponent } from './main-container/posts-list/posts-list.component';
import { PostService } from './service/post.service';
import { AuthInterceptorService } from './service/auth-interceptors.service';
import { LoginInterceptorService } from './service/login-interceptors.service';


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
  providers: [
    PostService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoginInterceptorService, multi: true}
  ]
})
export class HttpModuleModule { }
