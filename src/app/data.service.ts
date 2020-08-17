import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atom, reformat } from './atom.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = "https://neelpatel05.pythonanywhere.com/";
  _data;

  constructor(private _http: HttpClient) { }
  refreshData(callback) {
    if (this._data) {
      callback(this._data);
      return;
    }
    this._http.get<Atom[]>(this.apiUrl).subscribe(res => {
      this._data = res;
      this._data.forEach((atom: Atom) => {
        reformat(atom);
      });
      callback(this._data);
    });
  }
}
