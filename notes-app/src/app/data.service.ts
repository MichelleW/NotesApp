import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  createNew(productObj) {
    console.log('create new :', productObj);
    return this._http.post('/notes', productObj);
  }

  getAllNotes(){
    console.log('getAllnotes :');
    return this._http.get('/notes');
  }







}
