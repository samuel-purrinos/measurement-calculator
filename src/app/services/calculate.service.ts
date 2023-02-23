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
      leftForge: {
        maximun: 0,
        minimun: 0,
        average: 0
      },
      rightForge: {
        maximun: 0,
        minimun: 0,
        average: 0
      },
      leftBackground: {
        maximun: 0,
        minimun: 0,
        average: 0
      },
      rightBackground: {
        maximun: 0,
        minimun: 0,
        average: 0
      },
      leftSide: {
        maximun: 0,
        minimun: 0,
        average: 0
      },
      rightSide: {
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
      this.result.leftForge.maximun = Math.max(m.leftForge);
      this.result.leftForge.minimun = Math.min(m.leftForge);
      this.result.leftForge.average = this.result.leftForge.maximun - this.result.leftForge.minimun;
      this.result.rightForge.maximun = Math.max(m.rightForge);
      this.result.rightForge.minimun = Math.min(m.rightForge);
      this.result.rightForge.average = this.result.rightForge.maximun - this.result.rightForge.minimun;
      this.result.leftBackground.maximun = Math.max(m.leftBackground);
      this.result.leftBackground.minimun = Math.min(m.leftBackground);
      this.result.leftBackground.average = this.result.leftBackground.maximun - this.result.leftBackground.minimun;
      this.result.rightBackground.maximun = Math.max(m.rightBackground);
      this.result.rightBackground.minimun = Math.min(m.rightBackground);
      this.result.rightBackground.average = this.result.rightBackground.maximun - this.result.rightBackground.minimun;
      this.result.leftSide.maximun = Math.max(m.leftSide);
      this.result.leftSide.minimun = Math.min(m.leftSide);
      this.result.leftSide.average = this.result.leftSide.maximun - this.result.leftSide.minimun;
      this.result.rightSide.maximun = Math.max(m.rightSide);
      this.result.rightSide.minimun = Math.min(m.rightSide);
      this.result.rightSide.average = this.result.rightSide.maximun - this.result.rightSide.minimun;
    }
    return this.result;
    }

}
