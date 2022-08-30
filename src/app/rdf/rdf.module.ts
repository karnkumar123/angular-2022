import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdfComponent } from './rdf/rdf.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RdfAssignmentComponent } from './rdf-assignment/rdf-assignment.component';



@NgModule({
  declarations: [
    RdfComponent,
    RdfAssignmentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  bootstrap: [RdfComponent]
})
export class RdfModule { }
