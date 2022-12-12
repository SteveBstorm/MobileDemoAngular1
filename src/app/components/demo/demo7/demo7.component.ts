import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TailleValidator } from 'src/app/shared/myValidators/taille.validator';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {

  myForm! : FormGroup //peut contenir des control/group/array
  constructor(
    private builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm = this.builder.group({
      nom : ['', Validators.required], //ca c'est un control
      prenom : [null, [TailleValidator(2, 8), Validators.required]], //ca aussi
      email : ['', [Validators.required, Validators.email]], //idem
      tels : this.builder.array([])
    })

    let monArray = this.myForm.controls['tels'] as FormArray
    monArray.push(new FormControl(null, Validators.required))
  }

  getTelArray() : FormArray{
    return this.myForm.controls['tels'] as FormArray
  }
  ajoutTel() {
    this.getTelArray().push(new FormControl(null, Validators.required))
  }

  submitForm() {
    console.log(this.myForm.value)
  }

}
