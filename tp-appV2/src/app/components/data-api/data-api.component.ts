import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';
import { ServiceUserService } from 'src/app/services/service-user.service';

@Component({
  selector: 'app-data-api',
  templateUrl: './data-api.component.html',
  styleUrls: ['./data-api.component.css']
})
export class DataApiComponent implements OnInit {

  public listData:Array<UserModel>;

  constructor(private _service: ServiceUserService) {
    this.listData = new Array();
   }


  ngOnInit(): void {
    this.loadData();
  }

  loadData():void {
    this._service.getData()
    .subscribe(
      res => {
        this.listData = res;
        console.log(this.listData);
        
      },
      err => console.log(err)
    )  
  }

  public gethour(stri) {
    let date = new Date(stri);
    return `${date.getUTCHours()} - ${date.getMinutes()} ${date.getUTCHours()  > 12 ? "pm":"am"}`;
  }

}
