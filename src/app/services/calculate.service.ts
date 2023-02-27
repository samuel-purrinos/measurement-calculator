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
        minimun: this.measurements[0].leftForge,
        average: 0
      },
      rightForge: {
        maximun: 0,
        minimun: this.measurements[0].rightForge,
        average: 0
      },
      leftBackground: {
        maximun: 0,
        minimun: this.measurements[0].leftBackground,
        average: 0
      },
      rightBackground: {
        maximun: 0,
        minimun: this.measurements[0].rightBackground,
        average: 0
      },
      leftSide: {
        maximun: 0,
        minimun: this.measurements[0].leftSide,
        average: 0
      },
      rightSide: {
        maximun: 0,
        minimun: this.measurements[0].rightSide,
        average: 0
      }
  }
    for(let m of measurements){
      result.id = 0;
      result.name ="";
      if(m.leftForge > result.leftForge.maximun){
        result.leftForge.maximun = m.leftForge;
      }
      if(m.leftForge < result.leftForge.minimun){
        result.leftForge.minimun = m.leftForge;
      }
      if(m.rightForge > result.rightForge.maximun){
        result.rightForge.maximun = m.rightForge;
      }
      if(m.rightForge < result.rightForge.minimun){
        result.rightForge.minimun = m.rightForge;
      }
      if(m.leftBackground > result.leftBackground.maximun){
        result.leftBackground.maximun = m.leftBackground;
      }
      if(m.leftBackground < result.leftBackground.minimun){
        result.leftBackground.minimun = m.leftBackground;
      }
      if(m.rightBackground > result.rightBackground.maximun){
        result.rightBackground.maximun = m.rightBackground;
      }
      if(m.rightBackground < result.rightBackground.minimun){
        result.rightBackground.minimun = m.rightBackground;
      }
      if(m.leftSide > result.leftSide.maximun){
        result.leftSide.maximun = m.leftSide;
      }
      if(m.leftSide < result.leftSide.minimun){
        result.leftSide.minimun = m.leftSide;
      }
      if(m.rightSide > result.rightSide.maximun){
        result.rightSide.maximun = m.rightSide;
      }
      if(m.rightSide < result.rightSide.minimun){
        result.rightSide.minimun = m.rightSide;
      }
    }
      result.leftForge.average = result.leftForge.maximun - result.leftForge.minimun;
      result.rightForge.average = result.rightForge.maximun - result.rightForge.minimun;
      result.leftBackground.average = result.leftBackground.maximun - result.leftBackground.minimun;
      result.rightBackground.average = result.rightBackground.maximun - result.rightBackground.minimun;
      result.leftSide.average = result.leftSide.maximun - result.leftSide.minimun;
      result.rightSide.average = result.rightSide.maximun - result.rightSide.minimun;
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
