export class DatesInfoReserveModel {
  public date: Date;
  public hour: any;
  public min: any;
  
  constructor() {
    this.date = new Date();
    this.hour = this.date.getHours;
    this.min = this.date.getMinutes;
  }
}
