import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  private _registerUrl = "http://localhost:3000/api/add"
  private _getrUrl = "http://localhost:3000/api/data"

  constructor(private http: HttpClient) { 
    
  }

  addData(user):Observable<UserModel> {
    return this.http.post<UserModel>(this._registerUrl,user)
  }


  getData():Observable<Array<UserModel>> {
    return this.http.get<Array<UserModel>>(this._getrUrl)
  }

}