import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
// import { DatePipe } from '@angular/common';
import {orderby} from './../order-by-pipe';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  newNoteObj: any;
  allNotesObj:any;
  allNotesSorted: any;
  msg: any;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.allNotesObj = [];
    this.allNotesObj.sort(function (name1, name2) {
      if (name1.createdAt < name2.createdAt) {
        return -1;
      } else if (name1.createdAt > name2.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
    console.log('sorted :', this.allNotesObj);

    this.newNoteObj = { noteContent:"", time: ""};

    this.msg = "hi";
    this.getAllNotes();
  }
  
  
   



  createNew() {
    const tempObservable = this._dataService.createNew(this.newNoteObj);
    tempObservable.subscribe(
      (response) => {
       this.newNoteObj= response;
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
