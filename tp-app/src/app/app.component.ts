import { Component, OnInit } from '@angular/core';
import { ServeUserService } from './serve-user.service';
import { newArray } from '@angular/compiler/src/util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'tp-app';

  users:Array<any>;
  users2: Array<any>;
  user =  { 
    documento: "",
    nombres: "",
    apellidos: "",
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
    horario_inicio_turno: new Date(),
    horario_fin_turno: new Date(),
    horas_extras : [{
        inicio_hora_extra: new Date(),
        fin_Hora_extra: new Date(),
        motivo_hora_extra : "", 
    }]}

    horas_extras : Array<any>;

    panelOpenState = false;  
    flag = false;

    hours:Array<number>
    min:Array<number>
    hoursSelectInit;
    minSelectInit;
    hoursSelectEnd;
    minSelectEnd;
    

    hoursExSelectInit = 0;
    minExSelectInit = 0;
    hoursExSelectEnd = 0;
    minExSelectEnd = 0;
    motivo= "";
    

  constructor(private _service: ServeUserService) {
    this.users =  new Array();
    this.horas_extras = new Array();
    this.hours = new Array();
    this.min= new Array();
    let date = new Date();
    this.hoursSelectInit = date.getUTCHours();
    this.minSelectInit = date.getUTCMinutes(); 
    this.hoursSelectEnd = date.getUTCHours();
    this.minSelectEnd = date.getUTCMinutes(); 
    for (let i = 1; i < 25; i++) {
      this.hours.push(i)
    }

    for (let i = 1; i < 61; i++) {
      this.min.push(i)
    }
    
  }


  ngOnInit(): void {
    this.loadData()
  }


  loadData(){
    this._service.getData().subscribe(
      res => {
        this.users = res
        console.log(this.users);
        
      },
      err => {console.log(err);
      }
    )
  }

  public gethour(stri) {
    let date = new Date(stri);
       
    return `${date.getUTCHours()} - ${date.getMinutes()} ${date.getUTCHours()  > 12 ? "pm":"am"}`;
  }

  public addHoursEx() {
    console.log("Entro");
    
    this.horas_extras.push({
      inicio_hora_extra: new Date(),
      fin_Hora_extra: new Date(),
      motivo_hora_extra : "", 
  })
  
  console.log(this.horas_extras.length);
  }

  public save() {
    
    this.user.horario_inicio_turno = new Date();
    this.user.horario_inicio_turno.setHours(this.hoursSelectInit);
    this.user.horario_inicio_turno.setMinutes(this.minSelectInit);
    this.user.horario_fin_turno.setHours(this.hoursSelectEnd);
    this.user.horario_fin_turno.setMinutes(this.minSelectEnd);
    
    console.log(this.horas_extras);
    if(this.horas_extras.length > 0) {
      for (let i = 0; i < this.horas_extras.length; i++) {
        this.horas_extras[0].inicio_hora_extra.setHours(this.hoursExSelectInit);
        this.horas_extras[0].inicio_hora_extra.setMinutes(this.minExSelectInit);
        this.horas_extras[0].fin_Hora_extra.setHours(this.hoursExSelectEnd);
        this.horas_extras[0].fin_Hora_extra.setMinutes(this.minExSelectEnd);
      }
      
    }
    this.user.horas_extras = this.horas_extras;
    console.log(this.user);
    this._service.addData(this.user).subscribe( res => this.user =  { 
      documento: "",
      nombres: "",
      apellidos: "",
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      horario_inicio_turno: new Date(),
      horario_fin_turno: new Date(),
      horas_extras : [{
          inicio_hora_extra: new Date(),
          fin_Hora_extra: new Date(),
          motivo_hora_extra : "", 
      }]}, err => console.log(err)
      )
    
  }

}
