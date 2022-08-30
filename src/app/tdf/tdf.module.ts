import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdfComponent } from './tdf/tdf.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TdfComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  bootstrap: [TdfComponent]
})
export class TdfModule { }
