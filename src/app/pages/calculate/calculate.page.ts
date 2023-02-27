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
  constructor(private formBuilder: FormBuilder,private translate: TranslateService, 
    private calculateService : CalculateService,private router: Router) {
    this.floorNumber=0;
   }

  ngOnInit() {
    this.prepareFormValidation();
  }
  prepareFormValidation(){
    this.validationForm = this.formBuilder.group({
      leftBackground : new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      rightBackground : new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      leftForge : new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      rightForge : new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      leftSide : new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      rightSide : new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]))
    });
    this.validationMessages = {
      leftBackground: [
        { type: 'required', message: 'calculate.left_background calculate.error.required' },
        { type: 'minlength', message: 'calculate.left_background calculate.error.min_length' },
        { type: 'maxlength', message: 'calculate.left_background calculate.error.max_length' },
        { type: 'pattern', message: 'calculate.left_background calculate.error.number' },
      ],
      rightBackground: [
        { type: 'required', message: 'calculate.right_background calculate.error.required' },
        { type: 'minlength', message: 'calculate.right_background calculate.error.min_length' },
        { type: 'maxlength', message: 'calculate.right_background calculate.error.max_length' },
        { type: 'pattern', message: 'calculate.right_background calculate.error.number' },
      ],
      leftForge: [
        { type: 'required', message: 'calculate.left_forge calculate.error.required' },
        { type: 'minlength', message: 'calculate.left_forge calculate.error.min_length' },
        { type: 'maxlength', message: 'calculate.left_forge calculate.error.max_length' },
        { type: 'pattern', message: 'calculate.left_forge calculate.error.number' },
      ],
      rightForge: [
        { type: 'required', message: 'calculate.right_forge calculate.error.required' },
        { type: 'minlength', message: 'calculate.right_forge calculate.error.min_length' },
        { type: 'maxlength', message: 'calculate.right_forge calculate.error.max_length' },
        { type: 'pattern', message: 'calculate.right_forge calculate.error.number' },
      ],
      leftSide: [
        { type: 'required', message: 'calculate.left_side calculate.error.required' },
        { type: 'minlength', message: 'calculate.left_side calculate.error.min_length' },
        { type: 'maxlength', message: 'calculate.left_side calculate.error.max_length' },
        { type: 'pattern', message: 'calculate.left_sidecalculate.error.number' },
      ],
      rightSide: [
        { type: 'required', message: 'calculate.right_side calculate.error.required' },
        { type: 'minlength', message: 'calculate.right_side calculate.error.min_length' },
        { type: 'maxlength', message: 'calculate.right_side calculate.error.max_length' },
        { type: 'pattern', message: 'calculate.right_sidecalculate.error.number' },
      ]
    };

  }

  goToNextFloor(){
    let measurement =  {   
    floor:this.floorNumber,
    leftBackground:this.validationForm.value.leftBackground,
    rightBackground:this.validationForm.value.rightBackground,
    leftForge:this.validationForm.value.leftForge,
    rightForge:this.validationForm.value.rightForge,
    leftSide:this.validationForm.value.leftSide,
    rightSide:this.validationForm.value.rightSide
  }
    this.measurements.push(measurement);
    this.floorNumber++
  }

  async finish(){
    this.goToNextFloor();
    await this.calculateService.calculate(this.measurements);
    console.log(this.measurements);
    this.router.navigateByUrl('/measurement-result');
  }

}
