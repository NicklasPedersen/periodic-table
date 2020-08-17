import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atom, reformat } from './atom.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = "https://neelpatel05.pythonanywhere.com/";

  constructor(private _http: HttpClient) { }
  _data: Atom[]; // singleton
  refreshData(callback) {
    if (this._data) {
      // we have the data already so just pass it into callback
      callback(this._data);
      return;
    }
    // we have to request the data
    this._http.get<Atom[]>(this.apiUrl).subscribe(res => {
      this._data = res;
      // reformat the data because the api has a weird format
      this._data.forEach((atom: Atom) => {
        reformat(atom);
      });
      callback(this._data);
    });
  }
}
