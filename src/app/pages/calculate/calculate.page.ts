import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.page.html',
  styleUrls: ['./calculate.page.scss'],
})
export class CalculatePage implements OnInit {
 floorNumber;
  constructor() {
    this.floorNumber=0;
   }

  ngOnInit() {
  }

  goToNextFloor(){
    this.floorNumber++
  }
}
