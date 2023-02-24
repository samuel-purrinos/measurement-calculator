import { Injectable } from '@angular/core';
import { Result } from '../models/max-min-avg-measurement';
import { Measurement } from '../models/measurement';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  private measurements : Measurement[] =[];
  private currentResult : Result;
  
  constructor() { 
    this.currentResult ={
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

  async calculate(measurements: Measurement[]){
    this.measurements= [];
    this.measurements = measurements;
    let result : Result ={
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
    for(let m of measurements){
      result.id = 0;
      result.name ="";
      result.leftForge.maximun = Math.max(m.leftForge);
      result.leftForge.minimun = Math.min(m.leftForge);
      result.leftForge.average = result.leftForge.maximun - result.leftForge.minimun;
      result.rightForge.maximun = Math.max(m.rightForge);
      result.rightForge.minimun = Math.min(m.rightForge);
      result.rightForge.average = result.rightForge.maximun - result.rightForge.minimun;
      result.leftBackground.maximun = Math.max(m.leftBackground);
      result.leftBackground.minimun = Math.min(m.leftBackground);
      result.leftBackground.average = result.leftBackground.maximun - result.leftBackground.minimun;
      result.rightBackground.maximun = Math.max(m.rightBackground);
      result.rightBackground.minimun = Math.min(m.rightBackground);
      result.rightBackground.average = result.rightBackground.maximun - result.rightBackground.minimun;
      result.leftSide.maximun = Math.max(m.leftSide);
      result.leftSide.minimun = Math.min(m.leftSide);
      result.leftSide.average = result.leftSide.maximun - result.leftSide.minimun;
      result.rightSide.maximun = Math.max(m.rightSide);
      result.rightSide.minimun = Math.min(m.rightSide);
      result.rightSide.average = result.rightSide.maximun - result.rightSide.minimun;
    }
    this.currentResult = result;
    return result;
    }

    get finishedMeasurements(){
      return [...this.measurements];
    }

    get result(){
      return this.currentResult;
    }
}
