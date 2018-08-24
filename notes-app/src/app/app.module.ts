import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllnotesComponent } from './allnotes/allnotes.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { NewNoteComponent } from './new-note/new-note.component';
import { SortGridPipe } from './order-by-pipe/order-by-pipe.component';
import { SortgridComponent } from './sortgrid/sortgrid.component'

@NgModule({
  declarations: [
    AppComponent,
    AllnotesComponent,
    NewNoteComponent,
    SortGridPipe,
    SortgridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
