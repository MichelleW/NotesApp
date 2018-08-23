import { AllnotesComponent } from './../allnotes/allnotes.component';

import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  newNoteObj: any;
  allNotesObj:any;
  //create obj for t
  msg: any;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.allNotesObj = [];
    this.newNoteObj = { noteContent:"", timestamp: ""};
    this.msg = "hi";
    this.getAllNotes();
  }
 

  createNew() {
    const tempObservable = this._dataService.createNew(this.newNoteObj);
    tempObservable.subscribe(
      (response) => {
       this.newNoteObj = response;
      //  console.log('create new newNoteObj:', this.newNoteObj);
       this.getAllNotes();
      },
      (error) => {
        console.log(error); 
      }
    );
  }
  getAllNotes(){
    this._dataService.getAllNotes()
    .subscribe(
      (response)=>{
        console.log('getallnotes :', response);
        this.allNotesObj = response;
      }, 
      (err)=>{
        console.log('err in getAllNotes  :', err );
      }
    );
  }



}
