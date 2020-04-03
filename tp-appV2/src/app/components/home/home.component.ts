import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from 'src/app/services/service-user.service';
import { UserModel } from 'src/app/models/UserModel';
import { HourExModel } from 'src/app/models/HourExModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public listData:Array<UserModel>;
  public listDataAux:Array<UserModel>;

  public user: UserModel;
  public hours:Array<number>
  public min:Array<number>


  constructor(private _service: ServiceUserService) {
    this.listData = new Array();
    this.listDataAux = new Array();
    this.user = new UserModel();
    /*this.user.documento = "1541326431";
    this.user.nombres = "Nombre Generico";
    this.user.apellidos = "Apellido Generico";*/
    this.initListNumber();  
   }


  ngOnInit(): void {
    
  }

  initListNumber() {
    this.hours = new Array();
    this.min= new Array();
    for (let i = 0; i < 25; i++) {
      this.hours.push(i)
    }
    let count = 0;
    while(count <=60) {
      this.min.push(count)
      count += 5 
    }

    
  }

  public gethour(stri) {
    let date = new Date(stri);
    return `${date.getUTCHours()} - ${date.getMinutes()} ${date.getUTCHours()  > 12 ? "pm":"am"}`;

    
  }

  public saveData(){
    console.log(this.user);
    this.listDataAux.push(this.user);
    this._service.addData(this.user).subscribe(
      res => {
        this.user = new UserModel;
      }, err => {
        console.log(err);
        
      }
    )
    
  }

  

  setHours(data,key) {
    switch (key) {
      case 1:
        this.user.setHourInit(data.value);
        break;
      case 2:
        this.user.setMinInit(data.value);
        break;
      case 3:
        this.user.setHourFinish(data.value);
        break;
      case 4:
        this.user.setMinfinish(data.value);
        break;
      default:
        break;
    }
  }

  setHoursEx(objHoursEx,data,key) {
    switch (key) {
      case 1:
        objHoursEx.setHourInit(data.value);
        break;
      case 2:
        objHoursEx.setMinInit(data.value);
        break;
      case 3:
        objHoursEx.setHourFinish(data.value);
        break;
      case 4:
        objHoursEx.setMinfinish(data.value);
        break;
      default:
        break;
    }
  }

  public addHoursEx() {
    this.user.horas_extras.push(new HourExModel());
  }

  deleteHoursEx(obj) {
    this.user.horas_extras
    let index;
    index = this.user.horas_extras.indexOf(obj);
     
    if (index > -1) {
    this.user.horas_extras.splice(index, 1);
    }
  }

}
