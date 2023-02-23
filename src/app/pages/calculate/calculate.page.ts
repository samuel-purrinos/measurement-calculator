import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.page.html',
  styleUrls: ['./calculate.page.scss'],
})
export class CalculatePage implements OnInit {
 floorNumber;
 validationForm!: FormGroup;
 validationMessages :any;
  constructor(private formBuilder: FormBuilder,private translate: TranslateService) {
    this.translate.get('LEFT_BACKGROUND').subscribe(
      value => {
        console.log(value);
      }
    )
    this.floorNumber=0;
   }

  ngOnInit() {
    this.prepareFormValidation();
  }
  prepareFormValidation(){
    this.validationForm = this.formBuilder.group({
      side1 : new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      side2 : new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      side3 : new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      side4 : new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      side5 : new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      side6 : new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      side7 : new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      side8 : new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]))
    });
    this.validationMessages = {
      side1: [
        { type: 'required', message: 'Side 1 is required.' },
        { type: 'minlength', message: 'Side 1 must be at least 2 characters long.' },
        { type: 'maxlength', message: 'Side 1 cannot be more than 7 characters long.' },
        { type: 'pattern', message: 'Side 1 must be a number.' },
      ],
      side2: [
        { type: 'required', message: 'Side 2 is required.' },
        { type: 'minlength', message: 'Side 2 must be at least 2 characters long.' },
        { type: 'maxlength', message: 'Side 2 cannot be more than 7 characters long.' },
        { type: 'pattern', message: 'Side 2 must be a number.' },
      ],
      side3: [
        { type: 'required', message: 'Side 3 is required.' },
        { type: 'minlength', message: 'Side 3 must be at least 2 characters long.' },
        { type: 'maxlength', message: 'Side 3 cannot be more than 7 characters long.' },
        { type: 'pattern', message: 'Side 3 must be a number.' },
      ],
      side4: [
        { type: 'required', message: 'Side 4 is required.' },
        { type: 'minlength', message: 'Side 4 must be at least 2 characters long.' },
        { type: 'maxlength', message: 'Side 4 cannot be more than 7 characters long.' },
        { type: 'pattern', message: 'Side 4 must be a number.' },
      ],
      side5: [
        { type: 'required', message: 'Side 5 is required.' },
        { type: 'minlength', message: 'Side 5 must be at least 2 characters long.' },
        { type: 'maxlength', message: 'Side 5 cannot be more than 7 characters long.' },
        { type: 'pattern', message: 'Side 5 must be a number.' },
      ],
      side6: [
        { type: 'required', message: 'Side 6 is required.' },
        { type: 'minlength', message: 'Side 6 must be at least 2 characters long.' },
        { type: 'maxlength', message: 'Side 6 cannot be more than 7 characters long.' },
        { type: 'pattern', message: 'Side 6 must be a number.' },
      ],
      side7: [
        { type: 'required', message: 'Side 7 is required.' },
        { type: 'minlength', message: 'Side 7 must be at least 2 characters long.' },
        { type: 'maxlength', message: 'Side 7 cannot be more than 7 characters long.' },
        { type: 'pattern', message: 'Side 7 must be a number.' },
      ],
      side8: [
        { type: 'required', message: 'Side 8 is required.' },
        { type: 'minlength', message: 'Side 8 must be at least 2 characters long.' },
        { type: 'maxlength', message: 'Side 8 cannot be more than 7 characters long.' },
        { type: 'pattern', message: 'Side 8 must be a number.' },
      ]
    };

  }

  goToNextFloor(){
    this.floorNumber++
  }
}
