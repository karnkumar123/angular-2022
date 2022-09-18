import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PipeComponent } from './pipe/pipe.component';
import { PipeService } from './pipe.service';
import { ShortenPipe } from './shorten.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { ReverseInstance } from './reverse.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    PipeComponent,
    ShortenPipe,
    FilterPipe,
    ReverseInstance,
    SortPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers: [PipeService],
  bootstrap: [PipeComponent]
})
export class PipeModule { }
