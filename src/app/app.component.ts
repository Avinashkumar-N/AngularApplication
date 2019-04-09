import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularForm';


  attributeForm = this.attrForm.group({
    attributeName: ['', Validators.required],
    position: [''],
    regEx: [''],
    inputFormat: this.attrForm.array([
      this.attrForm.control('')
    ])
  });
  constructor(private attrForm: FormBuilder) {

  }

  getFieldType(val) {
    console.log(val);
    var arry = this.attributeForm.get('inputFormat') as FormArray;
    console.log(arry.controls[0].value);
    console.log(arry.controls.length);
    if (val == "radiobutton") {

    }
    // console.log(this.attributeForm.get('inputFormat') as FormArray);
    // this.attributeForm.get('inputFormat') as FormArray;
  }
}
