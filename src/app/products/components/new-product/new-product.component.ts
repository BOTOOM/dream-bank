import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  newProductForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.newProductForm = this.fb.group({
      Product: ['', Validators.required],
      cellPhone: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]],
      monthlyIncome: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }
  isInvalid(nombre: string) {
    const input = this.newProductForm.get(nombre);
    if (input)
      return input.invalid && (input.touched);
    else
      return true;
  }

  register() {
    
  }

  back() {
    this.location.back();

  }
}
