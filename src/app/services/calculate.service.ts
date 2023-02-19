import { Injectable } from '@angular/core';
import { Result } from '../models/max-min-avg-measurement';
import { Measurement } from '../models/measurement';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  private  result : Result;
  
  constructor() { 
    this.result = {
      id: 0,
      name: "",
      side1: {
        maximun: 0,
        minimun: 0,
        average: 0
      },
      side2: {
        maximun: 0,
        minimun: 0,
        average: 0
      },
      side3: {
        maximun: 0,
        minimun: 0,
        average: 0
      },
      side4: {
        maximun: 0,
        minimun: 0,
        average: 0
      },
      side5: {
        maximun: 0,
        minimun: 0,
        average: 0
      },
      side6: {
        maximun: 0,
        minimun: 0,
        average: 0
      },
      side7: {
        maximun: 0,
        minimun: 0,
        average: 0
      },
      side8: {
        maximun: 0,
        minimun: 0,
        average: 0
      }
  }
}

  calculate(measurement: Measurement[]) : Result{
    for(let m of measurement){
      this.result.id = 0;
      this.result.name ="";
      this.result.side1.maximun = Math.max(m.side1);
      this.result.side1.minimun = Math.min(m.side1);
      this.result.side1.average = this.result.side1.maximun - this.result.side1.minimun;
      this.result.side2.maximun = Math.max(m.side2);
      this.result.side2.minimun = Math.min(m.side2);
      this.result.side2.average = this.result.side2.maximun - this.result.side2.minimun;
      this.result.side3.maximun = Math.max(m.side3);
      this.result.side3.minimun = Math.min(m.side3);
      this.result.side3.average = this.result.side3.maximun - this.result.side3.minimun;
      this.result.side4.maximun = Math.max(m.side4);
      this.result.side4.minimun = Math.min(m.side4);
      this.result.side4.average = this.result.side4.maximun - this.result.side4.minimun;
      this.result.side5.maximun = Math.max(m.side5);
      this.result.side5.minimun = Math.min(m.side5);
      this.result.side5.average = this.result.side5.maximun - this.result.side5.minimun;
      this.result.side6.maximun = Math.max(m.side6);
      this.result.side6.minimun = Math.min(m.side6);
      this.result.side6.average = this.result.side6.maximun - this.result.side6.minimun;
      this.result.side7.maximun = Math.max(m.side7);
      this.result.side7.minimun = Math.min(m.side7);
      this.result.side7.average = this.result.side7.maximun - this.result.side7.minimun;
      this.result.side8.maximun = Math.max(m.side8);
      this.result.side8.minimun = Math.min(m.side8);
      this.result.side8.average = this.result.side8.maximun - this.result.side8.minimun;
    }
    return this.result;
    }

}
