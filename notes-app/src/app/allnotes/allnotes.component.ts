import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allnotes',
  templateUrl: './allnotes.component.html',
  styleUrls: ['./allnotes.component.css']
})
export class AllnotesComponent implements OnInit {
  //create array for the response data
  allNotesObj:any;
  //create obj for the one response
  note:any
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.allNotesObj = [];
    this.note ={ noteContent:"", timestamp: ""};
    this.getAllNotes();
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
