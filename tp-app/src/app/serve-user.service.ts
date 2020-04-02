import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServeUserService {

  private _registerUrl = "http://localhost:3000/api/add"
  private _getrUrl = "http://localhost:3000/api/data"

  constructor(private http: HttpClient) { 
    
  }

  addData(user):Observable<any> {
    return this.http.post<any>(this._registerUrl,user)
  }


  getData():Observable<any> {
    return this.http.get<any>(this._getrUrl)
  }

}
