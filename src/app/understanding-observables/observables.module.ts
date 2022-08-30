import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ObserMainPageComponent } from './obser-main-page/obser-main-page.component';
import { HomeComponent } from './obser-main-page/home/home.component';
import { UserComponent } from './obser-main-page/user/user.component';
import { ObservablesRoutingModule } from './observables-routing.module';
import { UserService } from './user.service';



@NgModule({
  declarations: [
    ObserMainPageComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ObservablesRoutingModule
  ],
  providers: [UserService],
  bootstrap: [ObserMainPageComponent]
})
export class ObservablesModule { }
