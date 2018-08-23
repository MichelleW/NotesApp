import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  newNoteObj: any;
  str: any;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.newNoteObj = { noteContent:"", timestamp: ""};
    this.str = "hi"
  }
  // addNote(){
  //   this._dataService.addNote(this.newNoteObj)
  //   .subscribe(
  //     (response) =>{
  //       this.newNoteObj = response;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   )
  // }

  createNew() {
    const tempObservable = this._dataService.createNew(this.newNoteObj);
    tempObservable.subscribe(
      (response) => {
        
       this.newNoteObj = response;
       console.log('create new newNoteObj:', this.newNoteObj);
      },
      (error) => {
        console.log(error); 
      }
    );
  }


}
