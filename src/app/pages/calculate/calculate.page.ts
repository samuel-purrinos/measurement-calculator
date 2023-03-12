import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Measurement } from '../../models/measurement';
import { CalculateService } from '../../services/calculate.service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.page.html',
  styleUrls: ['./calculate.page.scss'],
})
export class CalculatePage implements OnInit {
 floorNumber;
 validationForm!: FormGroup;
 validationMessages :any;
 private measurements : Measurement[] = [];
 measurement : Measurement;
  constructor(private formBuilder: FormBuilder,private translate: TranslateService, 
    private calculateService : CalculateService,private router: Router) {
    this.floorNumber=0;
    this.measurement = {} as Measurement;
   }

  ngOnInit() {
    this.prepareFormValidation();
  }
  prepareFormValidation(){
    this.validationForm = this.formBuilder.group({
      leftBackground : new FormControl(this.measurement.leftBackground, Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      rightBackground : new FormControl(this.measurement.rightBackground, Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      leftForge : new FormControl(this.measurement.leftForge, Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      rightForge : new FormControl(this.measurement.rightForge, Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      leftSide : new FormControl(this.measurement.leftSide, Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      rightSide : new FormControl(this.measurement.rightSide, Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]))
    });
  }

  goToNextFloor(){
    let measurement =  this.validationForm.value;
    measurement.floor = this.floorNumber;
    this.measurements.push(measurement);
    this.floorNumber++;
    this.validationForm.reset();
  }

  async finish(){
    this.goToNextFloor();
    await this.calculateService.calculate(this.measurements);
    console.log(this.measurements);
    this.router.navigateByUrl('/measurement-result');
  }

  get leftForge() {  return this.validationForm.get('leftForge')!; }
  get leftSide() { return this.validationForm.controls['leftSide']; }
  get rightForge() { return this.validationForm.controls['rightForge']; }
  get rightSide() { return this.validationForm.controls['rightSide']; }
  get leftBackground() { return this.validationForm.controls['leftBackground']; }
  get rightBackground() { return this.validationForm.controls['rightBackground']; }

}
