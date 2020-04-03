export class HourExModel{

    public inicio_hora_extra: Date;
    public fin_Hora_extra: Date;
    public motivo_hora_extra: string;

    constructor() {
        this.inicio_hora_extra = new Date();
        this.fin_Hora_extra = new Date();
        this.motivo_hora_extra = "";
    }

 
    public setHourInit(hour:number):number{
        return this.inicio_hora_extra.setHours(hour);
    }

    public setMinInit(min:number):number{
        return this.inicio_hora_extra.setMinutes(min);
    }

    
    public setHourFinish(hour:number):number{
        return this.fin_Hora_extra.setHours(hour);
    }

    public setMinfinish(min:number):number{
        return this.fin_Hora_extra.setMinutes(min);
    }


}