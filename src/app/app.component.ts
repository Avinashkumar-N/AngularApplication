import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularForm';
  typeDiv = false;
  inputFormat = [];
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
    this.inputFormat.push(this.attrForm.control(''));
    console.log(val);
    var arry = this.attributeForm.get('inputFormat') as FormArray;
    console.log(arry.controls[0].value);
    if (val == "radiobutton") {
      this.typeDiv = true;
      this.inputFormat.push(this.attrForm.control(''));
      console.log(arry.controls.length);

    }
    // console.log(this.attributeForm.get('inputFormat') as FormArray);
    // this.attributeForm.get('inputFormat') as FormArray;
  }
}
