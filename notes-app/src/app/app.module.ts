import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllnotesComponent } from './allnotes/allnotes.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { NewNoteComponent } from './new-note/new-note.component'

@NgModule({
  declarations: [
    AppComponent,
    AllnotesComponent,
    NewNoteComponent
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
