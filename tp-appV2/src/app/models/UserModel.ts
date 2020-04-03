import { HourExModel } from './HourExModel';

export class UserModel {

    public documento: string;
    public nombres: string;
    public apellidos: string;
    public fecha_inicio: Date;
    public fecha_fin: Date
    public horario_inicio_turno: Date;
    public horario_fin_turno: Date
    public horas_extras : Array<HourExModel>

    constructor() {
        this.documento = "";
        this.nombres = "";
        this.apellidos = "" ;
        this.fecha_inicio = new Date();
        this.fecha_fin = new Date();
        this.horario_inicio_turno = new Date();
        this.horario_fin_turno = new Date();
        this.horas_extras = new Array();
        
    }

    public setHourInit(hour:number):number{
        return this.horario_inicio_turno.setHours(hour);
    }

    public setMinInit(min:number):number{
        return this.horario_inicio_turno.setMinutes(min);
    }

    
    public setHourFinish(hour:number):number{
        return this.horario_fin_turno.setHours(hour);
    }

    public setMinfinish(min:number):number{
        return this.horario_fin_turno.setMinutes(min);
    }



}